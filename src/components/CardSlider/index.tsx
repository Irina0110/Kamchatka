import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardSliderProps from '@/types';
import * as S from './style';

// import required modules
import { Navigation  } from 'swiper/modules';
import { FC } from "react";
import './style.css';


const CardSlider: FC<CardSliderProps> = ({arr, navigation= false}) =>{
    const swiper = useSwiper();
    return (
        <S.Slider>
            <Swiper
                slidesPerView={1.5}
                width={500}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                    disabledClass: 'disable',
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    arr.map((item, index) =>  (
                        <SwiperSlide key={index} >{({ isActive }) => (
                            <S.Image src={item.img} isActive={isActive}/>
                        )}</SwiperSlide>
                    ))
                }
            </Swiper>
            <S.ButtonGroup right={navigation}>
                <S.Button className={'prev'} onClick={() => swiper.slidePrev()}/>
                <S.Button className={'next'} onClick={() => swiper.slideNext()}/>
            </S.ButtonGroup>
        </S.Slider>
    );
}

export default CardSlider;
