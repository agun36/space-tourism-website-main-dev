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
        <div className='crew d-flex flex-column px-8 min-vh-100'>

            <div className='mt-md-10'>
                <Navigation />
            </div>
            <div className='mt-8 m-auto ms-md-0'>
                <h1 className='text-white-000 d-flex gap-3'><span className='opacity-50'>00</span>Crew Pages</h1>
            </div>
            <div className="mt-5 about-crew  d-flex flex-column flex-md-row flex-lg-row align-items-md-center align-items-lg-center">
                <div className='about-crew__text flex-fill text-center text-md-start '>
                    <h1 className='text-white-000'>{currentCrew.role}</h1>
                    <h2 className='text-white-000'>{currentCrew.name}</h2>
                    <p className='text-justify mt-5 text-texts-color'>
                        {currentCrew.bio}
                    </p>

                    <div className='d-flex align-items-center justify-content-center justify-content-md-start gap-4 about-crew_dots mt-8 mb-8'>
                        <span onClick={() => handleSpanClick(0)} className={currentCrew === Data.crew[0] ? 'active' : ''}></span>
                        <span onClick={() => handleSpanClick(1)} className={currentCrew === Data.crew[1] ? 'active' : ''}></span>
                        <span onClick={() => handleSpanClick(2)} className={currentCrew === Data.crew[2] ? 'active' : ''}></span>
                        <span onClick={() => handleSpanClick(3)} className={currentCrew === Data.crew[3] ? 'active' : ''}></span>
                    </div>

                </div>
                <div className=''>
                    <img src={currentCrew.images.png} alt="Crew member" />
                </div>
            </div>
        </div>
    )
}