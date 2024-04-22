import { NavLink } from 'react-router-dom';
// import './styles.scss';
import { Navigation } from '../components/navigation';

export const HomePage = () => {

    return (
        <div className='home row   px-md-4 px-sm-0 min-vh-100 max-vh-auto'>
            <div className='mt-md-5 col-12'>
                <Navigation />
            </div>
            <div className='col-12 container  row justify-content-center align-items-center'>
                <div className='home-text__header   col-md-6 mx-auto text-sm-center'>
                    <h1 className='text-texts-color'>
                        so, you want to tarvel to <br /> <small className='text-white-000'>
                            space
                        </small>
                    </h1>
                    <p className="text-texts-color ">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <p className='home-link__wrapper     col-md-6'>
                    <NavLink className=' home-link__explore ' to='/destination'>
                        Explore
                    </NavLink>
                </p>
            </div>
        </div>
    )
}