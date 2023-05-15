import { ReactNode } from "react";

export type Props = {
    projectName: string
    children: ReactNode
}

export function Project(props: Props) {

    return <div className="projectsBox">
        <h4>{props.projectName}</h4>
        {props.children}
    </div>
}
