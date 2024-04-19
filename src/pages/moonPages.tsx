import { useContext } from "react";
import { DestinationContext } from "../contents/destinationContext";
import { Data } from "../utils/data";

export const MoonPages = () => {
    const { destination } = useContext(DestinationContext);
    return (
        <div className="container moon">
            <h1 className='text-white-000 moon-head'>{Data.destinations[destination].name}</h1>
            <div className="moon-about mt-4">
                <p className='text-texts-color'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
            <div className="row moon-avg border-top mt-4">
                <div className="col-6 mt-8 moon-avg__distance">
                    <p className='text-white-000'>AVG. DISTANCE</p>
                    <h2 className='text-white-000'>384,400 km</h2>
                </div>
                <div className="col-6 mt-8 moon-avg__travel">
                    <p className='text-white-000'>est. travel time</p>
                    <h3 className='text-white-000'>3 days</h3>
                </div>
            </div>
        </div>
    )
}