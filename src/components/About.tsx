import { Link } from "react-router-dom";


export default function() {
    return <div id="content">
        <div id="right_content">
            <h1>Web based solutions for real world problems</h1>
            <p>
                Consultancy services available upon request.  Please fill in my <Link to="/contact">contact form</Link> for enquiries.
            </p>
        </div>
    </div>
}