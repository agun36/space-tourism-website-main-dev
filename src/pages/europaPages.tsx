import { Data } from "../utils/data";

export const EuropaPages = () => {
    const europaData = Data.destinations[2];
    return (
        <div className="container moon">
            <h1 className='text-white-000 moon-head'>{europaData.name}</h1>
            <div className="moon-about mt-4">
                <p className='text-texts-color'>{europaData.description}</p>
            </div>
            <div className="row moon-avg border-top mt-4">
                <div className="col-6 mt-8 moon-avg__distance">
                    <p className='text-white-000'>AVG. DISTANCE</p>
                    <h2 className='text-white-000'>{europaData.distance}</h2>
                </div>
                <div className="col-6 mt-8 moon-avg__travel">
                    <p className='text-white-000'>est. travel time</p>
                    <h3 className='text-white-000'>{europaData.travel}</h3>
                </div>
            </div>
        </div>
    )
}