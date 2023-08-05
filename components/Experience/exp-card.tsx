
type Props = {
    position: string;
    company: string;
    period: string;
    description:string;
}

export default function Card(
    {
        position,
        company,
        period,
        description
    }:Props
){
    return (
        <div className="flex flex-col">
            <h3>{position}</h3>
            <div className="flex flex-row">
                <h4>{company}</h4>
                <h4>{period}</h4>
            </div>
            <p>
                {description}
            </p>
        </div>
    )
}