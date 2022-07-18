import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return (
        <>
        <div className="main">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/fashi/img/hero-1.jpg.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3 className='h1 fw-light'>Enjoy This <span className='text-danger'> Summer</span> Trends</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam? Tenetur et laborum nemo voluptatem</p>
                        <button type="button" className="btn btn-outline-secondary rounded-pill">Shop Now <FontAwesomeIcon className='ms-2' icon={faArrowRight} /></button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3 className='h1 fw-light'>New <span className='text-info'> Arrivals</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, numquam? Tenetur et laborum nemo voluptatem</p>
                        <button type="button" className="btn btn-outline-secondary rounded-pill">Shop Now <FontAwesomeIcon className='ms-2' icon={faArrowRight} /></button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default Home