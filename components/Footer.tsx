import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='text-gray-500 py-4 text-center mt-8'>
            <span>Created by: </span>
            <Link href={'https://github.com/AaronJai'} target='_blank' className='text-gray-500 hover:text-gray-700'>
                AaronJai
            </Link>
        </div>
    );
};

export default Footer;