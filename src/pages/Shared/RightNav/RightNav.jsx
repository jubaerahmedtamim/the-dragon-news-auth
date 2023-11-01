import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login</h4>
                <Button className='mb-2' variant="outline-secondary"><FaGoogle />  Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub />  Login With Github</Button>
            </div>
            <div className='mt-4'>
                <h2>Find Us On</h2>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='text-center text-white position-relative '>
                <img className='' src={bg} alt="" />
                <div className='text-center position-absolute top-50 start-50 translate-middle'>
                    <h2 className='mb-4'>Create an Amazing Newspaper</h2>
                    <h5 className='mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
                    <Button className='btn btn-danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;