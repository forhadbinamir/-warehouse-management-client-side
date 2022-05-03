import React from 'react';
import './OurServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const OurServices = () => {
    return (
        <div className='m-10'>
            <div className='flex items-center justify-center p-5'>
                <h2 className='text-5xl text-purple-600'>Our Services</h2>
                <div
                    className='w-96 h-[1px] bg-purple-600'></div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-12 gap-4 mb-3'>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-12 gap-4 mb-3'>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='service-items shadow p-4'>
                        <div className='flex justify-center items-center gap-3'>
                            <div>
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>We can store and package your thing</p>
                            </div>
                            <FontAwesomeIcon className='text-5xl text-gray-300 hover:text-purple-600' icon={faCoffee} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurServices;