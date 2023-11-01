import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className="text-center ">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor.</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-primary-subtle p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger ' speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text..... I can be a React component, multiple React components, or just some text.....
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;