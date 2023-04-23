import '../App.css';
// import { IMAGES } from '../utils/images';
// import ModalImage from "react-modal-image";
// import React, { useState } from 'react';
import React from 'react';

// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image'

// const file_prefix = './photos/'
const photo_host = 'http://localhost:1337/';
const photos = require('../data/photos.json');

const MainSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        className: 'd-flex'
    };

    const Photos500 = photos.map((p, i) => {
        return (
            <div className='flex-grow-1'>
                <Image src={`${photo_host}${p.file}?h=500`} alt={`${p.title}`} />
                {`${p.title}`}
            </div>
        )
    })


    return (
        <>
        <Slider {...settings}>
            {Photos500}
        </Slider>
        </>
    )
}

// const Photos = () => {

//     const PhotoCards = photos.map((p, i) => {
//         return (
//             <div className='m-2 border'>
//                 <ModalImage
//                     small={`${file_prefix}sm-${p.file}`}
//                     large={`${file_prefix}${p.file}`}
//                     alt={p.title}
//                     imageBackgroundColor="black"
//                     key={i}
//                     hideDownload="true"
//                     hideZoom="true"
//                 />
//             </div>
//         )
//     })

//     return (
//         <div className='d-flex flex-wrap mt-5'>
//             {PhotoCards}
//         </div>
//     )
// }



// const PhotoCarousel = () => {
//     const [index, setIndex] = useState(0);

//     const handleSelect = (selectedIndex, e) => {
//         setIndex(selectedIndex);
//     };

//     const carouselItems = photos.map((photo, index) => (
//         <Carousel.Item key={index}>
//             <img
//                 className=""
//                 src={`${file_prefix}sm-${photo.file}`}
//                 alt={photo.title}
//             />
//             <Carousel.Caption>
//                 <h3>{photo.title}</h3>
//                 <p>{photo.description}</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//     ));


//     return (
//         <div c>
//             <Carousel activeIndex={index} onSelect={handleSelect} className="border">
//                 {carouselItems}
//             </Carousel>
//         </div>
//     );
// }


const Photography = () => {
    return (
        <>
            {/* <img class="background" style={styles.background} src={IMAGES[5]} alt="background" width="300" height="300"></img> */}
            <h1 className='photography' style={styles.h1}>Photography</h1>
            <div className='d-flex m-5 p-6'>
                <MainSlider />
            </div>
            {/* <PhotoCarousel /> */}
            {/* <Photos /> */}
        </>
    );
};


const styles = {
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: "0px",
        top: "0px",
        "z-index": "-1",
        filter: "blur(10px)",
    }
}


export default Photography;