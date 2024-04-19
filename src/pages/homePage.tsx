import { NavLink } from 'react-router-dom';
// import './styles.scss';
import { Navigation } from '../components/navigation';

export const HomePage = () => {

    return (
        <div className='home  px-8 d-flex flex-column min-vh-100'>
            <div className='mt-md-10'>
                <Navigation />
            </div>
            <div className='m-auto d-flex flex-column flex-md-row flex-lg-row justify-content-center justify-content-md-center justify-content-lg-center align-items-center align-items-md-center align-items-lg-center gap-8'>
                <div className='home-text__header w-50'>
                    <h1 className='text-texts-color'>
                        so, you want to tarvel to <br /> <small className='text-white-000'>
                            space
                        </small>
                    </h1>
                    <p className="text-texts-color">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <p className='home-link__wrapper mt-7  mt-md-0 '>
                    <NavLink className=' home-link__explore ' to='/destination'>
                        Explore
                    </NavLink>
                </p>
            </div>
        </div>
    )
}