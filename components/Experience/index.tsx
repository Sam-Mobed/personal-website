import Card from './exp-card'

const jobs = {
    'ssc-IC':{
        'position':'',
        'company':'',
        'period':'',
        'description':'',
    },
    'ssc-HPCS':{
        'position':'',
        'company':'',
        'period':'',
        'description':'',
    },
    'misa':{
        'position':'',
        'company':'',
        'period':'',
        'description':'',
    },
    'mchacks':{
        'position':'',
        'company':'',
        'period':'',
        'description':'',
    }
}

export default function Experience(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <div className="flex lg:flex-row md:flex-row flex-col text-white w-screen h-[50vmax]">
                <Card 
                    position={jobs['ssc-HPCS']['position']}
                    company={jobs['ssc-HPCS']['company']}
                    period={jobs['ssc-HPCS']['period']}
                    description={jobs['ssc-HPCS']['description']}
                />
                <Card 
                    position={jobs['ssc-IC']['position']}
                    company={jobs['ssc-IC']['company']}
                    period={jobs['ssc-IC']['period']}
                    description={jobs['ssc-IC']['description']}
                />
                <Card 
                    position={jobs['misa']['position']}
                    company={jobs['misa']['company']}
                    period={jobs['misa']['period']}
                    description={jobs['misa']['description']}
                />
                <Card 
                    position={jobs['mchacks']['position']}
                    company={jobs['mchacks']['company']}
                    period={jobs['mchacks']['period']}
                    description={jobs['mchacks']['description']}
                />
            </div>
        </div>
    )
}