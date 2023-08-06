
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
        <div className="flex-1 m-5 flex flex-col border-2 border-white-500 rounded">
            <div className="flex justify-center text-center">
                <h3 className="p-2">{position}</h3>
            </div>
            
            <div className="flex flex-row justify-between">
                <h4 className="p-2">{company}</h4>
                <h4 className="p-2 text-end">{period}</h4>
            </div>
            <p className="p-5">
                {description}
            </p>
        </div>
    )
}