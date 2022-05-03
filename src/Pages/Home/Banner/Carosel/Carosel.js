import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider from '../../../../images/slider/slider5.jpg'
import slider1 from '../../../../images/slider/slider1.jpg'
import slider2 from '../../../../images/slider/slider2.jpg'
import slider3 from '../../../../images/slider/slider4.jpg'
const Carosel = () => {
    return (
        <div>
            <Carousel className='lg:w-[550px] md:w-[300px] center rounded'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 rounded"
                        src={slider}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Kitchen Oven</h3>
                        <p>Electronic kitchen oven and light or all electronic items.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 rounded"
                        src={slider1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Business Deal</h3>
                        <p>Warehouse Business Deal sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={slider2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>asdfasdf</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Computer Store</h3>
                        <p>Electronic Computers Store in the counting all over store equevments.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;