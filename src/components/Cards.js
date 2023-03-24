import React from 'react'
import CardItem from './CardItem'
import { IMAGES } from './images'
// console.log(IMAGES)

const Cards = () => {
    return (
        <div className='cards'>
            <h1> Check this out</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={IMAGES[8]}
                            text='explore the hidden waterfall in the amazon jungle.'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={IMAGES[1]}
                            text='explore the hidden waterfall in the amazon jungle.'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={IMAGES[0]}
                            text='explore the hidden waterfall in the amazon jungle.'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={IMAGES[2]}
                            text='explore the hidden waterfall in the amazon jungle.'
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards