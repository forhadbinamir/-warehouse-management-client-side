import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-10'>
            <div className="flex justify-around lg:flex-row md:flex-col bg-indigo-300 rounded">
                <h2 className=' p-2 text-white rounded'>JavaScript</h2>
                <h2 className='bg-indigo-300 p-2 text-white rounded'>NodeJs</h2>
            </div>
            <div className="flex justify-around lg:flex-row md:flex-col bg-gray-300 mb-2">
                <div className=''>
                    <p className=' p-5 rounded'>Javascript is a programming language that is used for writing scripts on the website minima dolor amet laboriosam ea ut!</p>
                    <p className=' p-5 rounded'>Javascript can only be run in the browsers.</p>
                </div>
                <div>
                    <p className='p-5 rounded'>NodeJS is a Javascript runtime environment</p>
                    <p className='p-5 rounded'>We can run Javascript outside the browser with the help of NodeJS.</p>
                </div>
            </div>
            <div className="flex justify-around lg:flex-row md:flex-col bg-indigo-300 rounded">
                <h2 className=' p-2 text-white rounded'>SQL</h2>
                <h2 className='bg-indigo-300 p-2 text-white rounded'>No SQL</h2>
            </div>
            <div className="flex justify-around lg:flex-row md:flex-col bg-gray-300 mb-2">
                <div className=''>
                    <p className=' p-5 rounded'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                    <p className=' p-5 rounded'>These databases have fixed or static or predefined schema.</p>
                </div>
                <div>
                    <p className='p-5 rounded'>Non-relational or distributed database system.</p>
                    <p className='p-5 rounded'>They have dynamic schema</p>
                </div>
            </div>

            <h2 className='bg-indigo-300 p-2 text-white rounded'>Q3 What is JWT?</h2>
            <p className='bg-gray-300 p-5 rounded'>A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.</p>
            <h2 className='bg-indigo-300 p-2 text-white rounded'>Q4 Why use Nodejs?</h2>
            <p className='bg-gray-300 p-5 rounded'>Node.js is an open source, a server-side script which runs on the top of Google’s open-source scripting engine V8. Node.js is fast, lightweight and efficient. It uses the asynchronous mode of operation, event-driven Input/Output rather than using the traditional threads or separate threads for each process. Node.js was originally written by Ryan Dahl in the year 2009. It is a cross-platform Javascript run-time environment that executes Javascript code outside of a browser. Node.js uses javascript for creating node applications or we can use any other language that ultimately compiles to javascript (like typescript). The javascript is written in the same way as we’d use in any client-side application. However, we need to set up the node development environment.</p>
        </div>
    );
};

export default Blogs;