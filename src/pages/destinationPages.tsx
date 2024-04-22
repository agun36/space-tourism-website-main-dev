/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { DestinationContext } from "../contents/destinationContext";
import { Navigation } from "../components/navigation";
import { DestinationPagesReusable } from "./DestinationPagesReusable"; // import the component
import { Data } from "../utils/data";
export const DestinationPages = () => {
    const { setDestination } = useContext(DestinationContext);
    const [selectedDestination, setSelectedDestination] = useState(0); // set initial state to 0

    function handleSelect(selectedButton: any) {
        setSelectedDestination(selectedButton);
        setDestination(selectedButton);
    }

    return (
        <div className="destination px-8 d-flex flex-column min-vh-100">
            <div className="mt-md-5">
                <Navigation />
            </div>
            <div className="row  ">
                <div className="destination-head d-flex justify-content-center justify-content-md-start  mt-5 col-12 ">
                    <h1 className="text-white-000 d-flex gap-2"><span className="opacity-50">01</span> pick your destination</h1>
                </div>
                <div className="destination-names container col-12 row align-items-md-center justify-content-center mt-md-8 mt-4">
                    <div className="col-md-8">
                        <img src={Data.destinations[selectedDestination].images.png} alt={Data.destinations[selectedDestination].name} className="img-fluid " />
                    </div>

                    <nav className="navbar  destination-nav-wrapper  col-md-4 d-flex align-items-center justify-content-center ">
                        <ul className="destination-nav row pl-0 col-7 me-md-auto">
                            <li className="nav-item col">
                                <button
                                    className={`nav-link ${selectedDestination === 0 ? 'active' : ''}`}
                                    onClick={() => handleSelect(0)}
                                >
                                    Moon
                                </button>
                            </li>
                            <li className="nav-item col">
                                <button className={`nav-link ${selectedDestination === 1 ? 'active' : ''}`} onClick={() => handleSelect(1)} >Mars</button>
                            </li>
                            <li className="nav-item col">
                                <button className={`nav-link ${selectedDestination === 2 ? 'active' : ''}`} onClick={() => handleSelect(2)} >Europa</button>
                            </li>
                            <li className="nav-item col">
                                <button className={`nav-link ${selectedDestination === 3 ? 'active' : ''}`} onClick={() => handleSelect(3)} >Titan</button>
                            </li>
                        </ul>
                        <DestinationPagesReusable />
                    </nav>
                </div>
            </div>
        </div>
    )
}