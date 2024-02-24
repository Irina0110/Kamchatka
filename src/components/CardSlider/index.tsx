import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ICardSlider} from '@/types';
import * as S from './style';
import { Navigation  } from 'swiper/modules';
import { FC } from "react";
import './style.scss';
import ArrowRight from "@/assets/Pagination-right-light.svg?react";


const CardSlider: FC<ICardSlider> = ({arr, navigation= false, view = "main", isLightPagination = true}) =>{
    const swiper = useSwiper();

    return (
        <S.Slider>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={200}
                width={500}
                effect={'cards'}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                    disabledClass: 'disable',
                }}
                modules={[Navigation]}

            >
                {
                    arr.map((item, index) =>  (
                        <SwiperSlide key={index}>{({isActive}) => (
                            <div className={isActive ? `active-slide--${view}` : `slide--${view}`}>
                                <img src={item.img}/>
                                {item.title &&
                                    (<S.Text>{item.title}</S.Text> )
                                }
                                {
                                    item.description && (
                                        <S.Description>{item.description}</S.Description>
                                    )
                                }
                            </div>

                        )}</SwiperSlide>
                    ))
                }
            </Swiper>
            <S.ButtonGroup right={navigation}>
                <S.Button className={'prev'} onClick={() => swiper.slidePrev()}>
                    <ArrowRight fill={isLightPagination ? '#fff' : '#000000'}/>

                </S.Button>
                <S.Button className={'next'} onClick={() => swiper.slideNext()}>
                    <ArrowRight/>
                </S.Button>
            </S.ButtonGroup>
        </S.Slider>
    );
}

export default CardSlider;
