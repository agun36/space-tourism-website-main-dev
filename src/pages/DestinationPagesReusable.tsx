import { useContext } from "react";
import { DestinationContext } from "../contents/destinationContext";
import { Data } from "../utils/data";

export const DestinationPagesReusable = () => {
    const { destination } = useContext(DestinationContext);
    const { name, description, distance, travel } = Data.destinations[destination];

    return (
        <div className="containe row">
            <div className="moon-about text-center text-md-start mt-8 col-12">
                <h1 className='text-white-000 moon-head'>{name}</h1>
                <p className='text-texts-color'>{description}</p>
            </div>
            <div className="row  text-center text-md-start mt-4 col-12">
                <div className=" col-md-6  mt-md-8 moon-avg__distance">
                    <p className='text-white-000'>AVG. DISTANCE</p>
                    <h2 className='text-white-000'>{distance}</h2>
                </div>
                <div className="col-md-6 mt-4 mt-md-8 moon-avg__travel ">
                    <p className='text-white-000'>est. travel time</p>
                    <h3 className='text-white-000'>{travel}</h3>
                </div>
            </div>
        </div>
    )
}