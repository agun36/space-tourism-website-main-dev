import { Data } from "../utils/data";

export const MarsPages = () => {
    const marsData = Data.destinations[1];
    return (
        <div className="container moon">
            <h1 className='text-white-000 moon-head'>{marsData.name}</h1>
            <div className="moon-about mt-4">
                <p className='text-texts-color'>{marsData.description}</p>
            </div>
            <div className="row moon-avg border-top mt-4">
                <div className="col-6 mt-8 moon-avg__distance">
                    <p className='text-white-000'>AVG. DISTANCE</p>
                    <h2 className='text-white-000'>{marsData.distance}</h2>
                </div>
                <div className="col-6 mt-8 moon-avg__travel">
                    <p className='text-white-000'>est. travel time</p>
                    <h3 className='text-white-000'>{marsData.travel}</h3>
                </div>
            </div>
        </div>
    )
}