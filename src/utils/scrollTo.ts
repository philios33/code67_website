import { MutableRefObject } from "react";

export function animateScroll({ targetPosition, initialPosition, duration }: {targetPosition: number, initialPosition: number, duration: number}) {
    let start: number | undefined;
    let animationFrame: number | undefined;

    const requestAnimationFrame = window.requestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame;

    // Maximum amount of pixels we can scroll
    const maxAvailableScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const amountOfPixelsToScroll = initialPosition - targetPosition;

    function step(timestamp: number) {
        if (start === undefined) {
            start = timestamp;
        }

        const elapsed = timestamp - start;

        // this just gives us a number between 0 (start) and 1 (end)
        const relativeProgress = elapsed / duration;

        // ease out that number (Using easeOutQuart)
        // The easing function that makes the scroll decelerate over time
        const easedProgress = 1 - Math.pow(1 - relativeProgress, 4);

        // Calculate new position for every tick of the requesAnimationFrame
        const position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

        // Set the scrollbar position
        window.scrollTo(0, position);

        // Stop when max scroll is reached
        if (initialPosition !== maxAvailableScroll && window.scrollY === maxAvailableScroll) {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
            return;
        }

        // Repeat until the end is reached
        if (elapsed < duration) {
            animationFrame = requestAnimationFrame(step);
        }
    }
    animationFrame = requestAnimationFrame(step);
}

export const scrollTo = (id: string, ref: MutableRefObject<HTMLElement> | null = null, duration: number = 1000) => {
    // The position of the scroll bar before the user clicks the button
    const initialPosition = window.scrollY;

    const element = ref ? ref.current : id ? document.getElementById(id) : null;

    if (!element) {
        console.log("Invalid element: " + id);
        return;
    }

    animateScroll({
        targetPosition: element.offsetTop,
        initialPosition,
        duration
    });
};