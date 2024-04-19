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
        <div className='technology   px-md-8 d-flex flex-column   min-vh-100'>
            <div className='mt-md-10'>
                <Navigation />
            </div>
            <div className='m-md-auto  d-flex flex-column align-items-center'>
                <div className='text-white-000 mt-8   me-md-auto'>
                    <h1 className='d-flex gap-2'><span className='opacity-50'>03</span>Technology Pages</h1>
                </div>
                <div className="about-technology  d-flex flex-column flex-md-column flex-lg-row-reverse align-items-center mt-8 mb-8">

                    <div className='tech-picture   '>
                        <picture className='pic object-fit-fill'>
                            <source srcSet={currentTechnology.images.landscape} media="(min-width: 768px)" className='object-fit-scale img-sm-fluid w-100' />
                            <img src={currentTechnology.images.portrait} alt="Technology" className='object-fit-scale  img-sm-fluid' />
                        </picture>
                    </div>

                    <div className='d-flex flex-column align-items-center flex-md-row   text-center text-md-start text-lg-start gap-3 mt-6 mb-6'>
                        <div className='d-flex  flex-md-column   gap-4 about-technology_dots'>
                            <span onClick={() => handleSpanClick(0)} className={currentTechnology === Data.technology[0] ? 'active' : ''}>1</span>
                            <span onClick={() => handleSpanClick(1)} className={currentTechnology === Data.technology[1] ? 'active' : ''}>2</span>
                            <span onClick={() => handleSpanClick(2)} className={currentTechnology === Data.technology[2] ? 'active' : ''}>3</span>
                        </div>
                        <div className='about-technology__text mb-6 '>
                            <h1 className='text-texts-color'> The terminology...</h1>
                            <h2 className='text-white-000'>{currentTechnology.name}</h2>
                            <p className='text-justify mt-5 text-texts-color'>
                                {currentTechnology.description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}