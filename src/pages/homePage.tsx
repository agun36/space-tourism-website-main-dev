import { NavLink } from 'react-router-dom';
// import './styles.scss';
import { Navigation } from '../components/navigation';

export const HomePage = () => {

    return (
        <div className='home row   px-md-4 px-sm-0 min-vh-100'>
            <div className='mt-sm-0 mt-md-5 px-4 col-12'>
                <Navigation />
            </div>
            <div className='row text-lg-center  align-items-center home-wrapper-about justify-content-md-center  mx-auto col-12'>
                <div className='home-text__header   col-md-6 mx-auto text-center  text-md-start'>
                    <h1 className='text-texts-color text-sm-center text-md-start'>
                        so, you want to tarvel to <br /> <small className='text-white-000'>
                            space
                        </small>
                    </h1>
                    <p className="text-texts-color ">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <p className='home-link__wrapper mb-sm-5    col-md-6'>
                    <NavLink className=' home-link__explore ' to='/destination'>
                        Explore
                    </NavLink>
                </p>
            </div>
        </div>
    )
}