import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aut aspernatur repellat, nostrum accusantium sint aliquam aliquid nam molestiae quasi officia ipsam minus, corporis voluptatem rem tempora fugit porro quia. Iste fuga unde odit doloremque ad odio perspiciatis voluptate sed?</p>
            <p>Go back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Terms;