import { NavLink } from 'react-router-dom';
// import './styles.scss';
import { Navigation } from '../components/navigation';

export const HomePage = () => {

    return (
        <div className='home  d-flex flex-column  px-md-4 px-sm-0 min-vh-100'>
            <div className='mt-md-5'>
                <Navigation />
            </div>
            <div className='m-auto row align-items-center'>
                <div className='home-text__header mt-5  col-md-5'>
                    <h1 className='text-texts-color'>
                        so, you want to tarvel to <br /> <small className='text-white-000'>
                            space
                        </small>
                    </h1>
                    <p className="text-texts-color ">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <p className='home-link__wrapper mt-7  mt-md-0 ms-md-auto  col-md-4'>
                    <NavLink className=' home-link__explore ' to='/destination'>
                        Explore
                    </NavLink>
                </p>
            </div>
        </div>
    )
}