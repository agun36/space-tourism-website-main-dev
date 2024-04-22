/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigation } from '../components/navigation';
import { Data } from '../utils/data';
import { useState } from 'react';

export const CrewPages = () => {
    const [currentCrew, setCurrentCrew] = useState(Data.crew[0]);

    const handleSpanClick = (index: any) => {
        setCurrentCrew(Data.crew[index]);
    };

    return (
        <div className='crew row  px-md-4 px-sm-0 min-vh-100 max-vh-auto'>

            <div className='mt-sm-0 mt-md-5 px-4 col-12'>
                <Navigation />
            </div>
            <div className="col-12 row align-items-center justify-content-md-center  mx-auto">
                <div className='mt-8 mt-md-8 col-12 d-flex justify-content-center justify-content-sm-start justify-content-md-start px-4'>
                    <h1 className='text-white-000 d-flex gap-3 text-uppercase'><span className='opacity-50'>00</span>meet your crew</h1>
                </div>
                <div className="mt-5 about-crew col-12   row align-items-center justify-content-md-center  container">
                    <div className='about-crew__text  text-center text-md-start col-md-5 col-sm-12 row'>
                        <div className='mt-md-8 col-12 '>
                            <h1 className='text-white-000 font-size-sm font-size-md'>{currentCrew.role}</h1>
                            <h2 className='text-white-000'>{currentCrew.name}</h2>
                            <p className='text-justify mt-md-5 text-texts-color font-size-sm font-size-md'>
                                {currentCrew.bio}
                            </p>
                        </div>

                        <div className='d-flex align-items-center justify-content-center justify-content-md-start gap-4 about-crew_dots my-md-8 my-sm-5 my-5 col-12'>
                            <span onClick={() => handleSpanClick(0)} className={currentCrew === Data.crew[0] ? 'active' : ''}></span>
                            <span onClick={() => handleSpanClick(1)} className={currentCrew === Data.crew[1] ? 'active' : ''}></span>
                            <span onClick={() => handleSpanClick(2)} className={currentCrew === Data.crew[2] ? 'active' : ''}></span>
                            <span onClick={() => handleSpanClick(3)} className={currentCrew === Data.crew[3] ? 'active' : ''}></span>
                        </div>

                    </div>
                    <div className='col-sm-12 col-md-7 d-flex justify-content-center'>
                        <img src={currentCrew.images.png} alt="Crew member" />
                    </div>
                </div>
            </div>
        </div>
    )
}