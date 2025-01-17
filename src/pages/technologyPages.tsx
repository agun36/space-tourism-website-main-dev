/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigation } from '../components/navigation';
import { Data } from '../utils/data';
import { useState } from 'react';

export const TechnologyPages = () => {
    const [currentTechnology, setCurrentTechnology] = useState(Data.technology[0]);

    const handleSpanClick = (index: any) => {
        setCurrentTechnology(Data.technology[index]);
    };

    return (
        <div className='technology row row-cols-lg-2  flex-lg-column  px-md-4 px-sm-0'>
            <div className='mt-sm-0 mt-md-5 px-4 col-12 col-lg-12'>
                <Navigation />
            </div>
            {/* second column */}
            <div className='col-12 col-lg-12 row row-cols-lg-1    flex-lg-colum align-items-center justify-content-md-center   mx-auto my-lg-8'>
                <div className='text-white-000 mt-8 mt-md-8 mt-lg-3   col-12 col-lg-12 d-flex  justify-content-center justify-content-sm-start justify-content-md-start bg-lg-danger p-lg-5'>
                    <h1 className='d-flex gap-2 text-uppercase'><span className='opacity-50'>03</span> space launch 101</h1>
                </div>
                <div className="about-technology col-12 col-lg-12 flex-lg-row   row row-sm-col-1 align-items-sm-center justify-content-sm-center me-md-auto  ">

                    <div className='tech-picture  col-md-6 col-sm-12 ms-md-auto order-1 order-md-2 order-sm-2'>
                        <picture className='pic '>
                            <source srcSet={currentTechnology.images.landscape} media="(min-width: 768px)" />
                            <img src={currentTechnology.images.portrait} alt="Technology" className=' w-md-auto w-sm-wide' />
                        </picture>
                    </div>

                    <div className='col-md-6 col-sm-12 d-flex flex-column flex-sm-column flex-md-row  align-items-sm-center justify-content-sm-center   gap-5  text-center text-md-start text-lg-start  mt-6 mb-6 order-2 order-md-1'>
                        <div className='d-flex  flex-md-column align-items-center justify-content-center   gap-4 about-technology_dots'>
                            <span onClick={() => handleSpanClick(0)} className={currentTechnology === Data.technology[0] ? 'active' : ''}>1</span>
                            <span onClick={() => handleSpanClick(1)} className={currentTechnology === Data.technology[1] ? 'active' : ''}>2</span>
                            <span onClick={() => handleSpanClick(2)} className={currentTechnology === Data.technology[2] ? 'active' : ''}>3</span>
                        </div>
                        <div className=' about-technology__text mb-6 '>
                            <h1 className='text-texts-color'> The terminology...</h1>
                            <h2 className='text-white-000'>{currentTechnology.name}</h2>
                            <p className='text-justify mt-5 text-texts-color px-md-0'>
                                {currentTechnology.description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}