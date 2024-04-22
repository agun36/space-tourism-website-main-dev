import { NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import logo from '../../assets/images/shared/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { useState } from 'react';

export const Navigation = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="navbar nav-layout">
            <div className=" navigate container-fluid container-fluid-md d-flex align-items-center align-items-md-baseline gap-">
                <div className='logo-link  position-relative'>
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt='showing star' /></NavLink>
                </div>

                {show ? <FontAwesomeIcon icon={faTimes} className="hamburger d-sm-none d-md-none " onClick={() => setShow(false)} /> : <FontAwesomeIcon icon={faBars} className="hamburger d-xxxl-none d-md-none d-sm-none" onClick={() => setShow(true)} />}

                <div className="d-none d-sm-block d-md-block  nav-layout__wrapper">
                    <Nav className="justify-content-end nav-underline nav-layout__wrapper__nav ">
                        <Nav.Item className=' nav-layout__wrapper__nav__item  white-00'>
                            <NavLink className="nav-layout__wrapper__nav__item nav-link" aria-current="page" to='/'>00 Home</NavLink>
                        </Nav.Item>
                        <Nav.Item className='nav-layout__wrapper__nav__item'>
                            <NavLink className="nav-link" to='/destination'>01 Destination</NavLink>
                        </Nav.Item>
                        <Nav.Item className='nav-layout__wrapper__nav__item'>
                            <NavLink className="nav-link" to='/crew'>02 Crew</NavLink>
                        </Nav.Item>
                        <Nav.Item className='nav-layout__wrapper__nav__item'>
                            <NavLink className="nav-link" to='/technology'>03 Technology</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>

                <div className={`offcanvas offcanvas-start ${show ? 'show' : ''}`} data-bs-scroll="true" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className='offcanvas-header font-size-large text-white-000'>
                        <div className=''>Menu</div >
                        <Button type="button" className="btn-close bg-white-000 text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setShow(false)}></Button>
                    </div>
                    <div className='offcanvas-body mt-8'>
                        <Nav className="flex-column align-items-center justify-content-end nav-underline ">
                            <Nav.Item className='nav-item'>
                                <NavLink className="nav-link  font-size-large text-texts-color" aria-current="page" to='/'>00 Home</NavLink>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <NavLink className="nav-link text-texts-color font-size-large" to='/destination'>01 Destination</NavLink>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <NavLink className="nav-link text-texts-color font-size-large" to='/crew'>02 Crew</NavLink>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <NavLink className="nav-link text-texts-color  font-size-large" to='/technology'>03 Technology</NavLink>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </div>
        </nav>
    )
}