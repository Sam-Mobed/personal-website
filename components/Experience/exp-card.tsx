import './card.css'

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
        <div className="flex-1 m-3 flex flex-col border-2 border-white-500 rounded">
            <div className="flex justify-center text-center position-name">
                <h3 className="p-2 underline">{position}</h3>
            </div>
            
            <div className="flex flex-row justify-between position-info border-b-2 border-white-500">
                <h5 className="p-2">{company}</h5>
                <h5 className="p-2 text-end">{period}</h5>
            </div>
            <p className="p-5 position-description">
                {description}
            </p>
        </div>
    )
}