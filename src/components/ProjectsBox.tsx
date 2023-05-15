import { FC, ReactElement } from 'react';
import { Props as ProjectProps, Project } from './Project';

type Props = {
    projects: Array<ReactElement<ProjectProps>>;
}

export default function ProjectsBox(props: Props) {

    
    /*
    return <div className="projectsBox">
        <div className="projectMenu">
            <ul>
                {props.projects.map(p => <li key={p.props.projectName}>{p.props.projectName}</li>)}
            </ul>
        </div>
        {props.projects}
    </div>
    */

    return <div className="projectsBox">
        {props.projects.map(p => <div className="projectContainer" key={p.props.projectName}>{p}</div>)}
    </div>
}
