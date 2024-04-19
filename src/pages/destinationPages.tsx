import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DestinationContext } from "../contents/destinationContext";
import { Data } from "../utils/data";
import { Navigation } from "../components/navigation";


export const DestinationPages = () => {
    const { destination, setDestination } = useContext(DestinationContext);
    const location = useLocation();
    useEffect(() => {
        setDestination(0);
    })
    return (
        <div className=" destination  px-8 d-flex flex-column min-vh-100">
            <div className="mt-md-10">
                <Navigation />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center  gap-8">
                <div className="destination-head mt-5 me-md-auto ">
                    <h1 className="text-white-000 d-flex gap-2"><span className="opacity-50">01</span> pick your destination</h1>
                </div>


                <div className="destination-names d-flex flex-column flex-md-row flex-lg-row align-items-md-center align-items-lg-center justify-content-md-evenly justify-content-lg-evenly gap-md-9 gap-lg-9 ">
                    <div className=" m-auto mt-8">
                        <img src={Data.destinations[destination].images.webp} alt={Data.destinations[destination].name} />
                    </div>
                    <nav className=" navbar  mt-8 mt-md-0 mt-lg-0  destination-nav-wrapper text-center text-md-start">

                        <ul className="destination-nav d-flex mx-auto ms-md-0  nav-underline pl-0">
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link ${destination === 0 || location.pathname === '/destination' ? 'active' : ''}`}
                                    onClick={() => { setDestination(0) }}
                                    to='moon'
                                >
                                    Moon
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${destination === 1 ? 'active' : ''}`} onClick={() => { setDestination(1) }} to='mars'>Mars</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${destination === 2 ? 'active' : ''}`} onClick={() => { setDestination(2) }} to='europa'>Europa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${destination === 3 ? 'active' : ''}`} onClick={() => { setDestination(3) }} to='titan'>Titan</NavLink>
                            </li>
                        </ul>
                        <div className="container g-col-6">
                            <Outlet />
                        </div>
                    </nav>

                </div>
            </div>
        </div>

    )
}