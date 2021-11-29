import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const slider = {
    height: '600px',
    backroundSize: 'cover',
    position: 'relative'
}

export default function Slider() {
    return (
        <Carousel>
        <Carousel.Item style = {slider}>
            <img 
                className = 'd-block w-100'
                src = 'https://e-vapor.ru/wp-content/uploads/2021/08/171718.jpg'
                alt = 'one'
            />
        </Carousel.Item>
        <Carousel.Item style = {slider}>
            <img 
                className = 'd-block w-100'
                src = 'https://static.tildacdn.com/tild6538-3434-4433-b866-366238366463/enApQV4jNUM.jpg'
                alt = 'two'
            />
        </Carousel.Item>
        <Carousel.Item style = {slider}>
            <img 
                className = 'd-block w-100'
                src = 'https://cdn.lifehacker.ru/wp-content/uploads/2020/10/shutterstock_1245594691_1604037185-1280x640.jpg'
                alt = 'three'
            />
        </Carousel.Item>
    </Carousel>
    )
}