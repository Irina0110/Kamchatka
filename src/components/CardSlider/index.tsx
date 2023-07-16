import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ICardSlider} from '@/types';
import * as S from './style';

// import required modules
import { Navigation  } from 'swiper/modules';
import { FC } from "react";
import './style.css';


const CardSlider: FC<ICardSlider> = ({arr, navigation= false, view = "main"}) =>{
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

            >
                {
                    arr.map((item, index) =>  (
                        <SwiperSlide key={index} >{({ isActive }) => (
                            <>
                                <S.Image src={item.img} isActive={isActive} view={view as "main" | "header"}/>
                                {item.title &&
                                    (<S.Text isActive={isActive}>{item.title}</S.Text> )
                                }
                                {
                                    item.description && (
                                        <S.Description isActive={isActive}>{item.description}</S.Description>
                                    )
                                }
                            </>

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
