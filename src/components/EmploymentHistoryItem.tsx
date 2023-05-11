
type Props = {
    dates: string
    name: string
    title: string
    children: any
}

export default function(props: Props) {
    return <div className="employmentHistoryItem">
        <p className="title">
            {props.name}
            <span className="date">{props.dates}</span>
        </p>
        <h3>{props.title}</h3>

        {props.children}

    </div>
}