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
        <div className="destination row row-cols-lg-2  flex-lg-column px-md-4 px-sm-0">
            <div className="mt-sm-0 mt-md-5 px-4 col-12 col-lg-12">
                <Navigation />
            </div>
            <div className="col-12 col-lg-12 row row-cols-lg-1    flex-lg-column align-items-center justify-content-md-center   mx-auto  ">
                <div className="destination-head  col-12 col-lg-12 d-flex justify-content-center justify-content-sm-start justify-content-md-start px-4  d-flex justify-content-center align-items-center">
                    <h1 className="text-white-000 d-flex gap-2"><span className="opacity-50">01</span> pick your destination</h1>
                </div>
                <div className="destination-names col-12 col-lg-12  row flex-lg-row align-items-md-center justify-content-center mt-md-8 mt-4">
                    <div className="col-md-8 d-flex flex-lg-column align-items-sm-center justify-content-sm-center ">
                        <img src={Data.destinations[selectedDestination].images.png} alt={Data.destinations[selectedDestination].name} className="img-fluid " />
                    </div>

                    <nav className="navbar  destination-nav-wrapper  col-md-4 d-flex align-items-center justify-content-center ">
                        <ul className="destination-nav row pl-0  me-md-auto">
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