import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ICardSlider} from '@/types';
import * as S from './style';
import { Navigation  } from 'swiper/modules';
import { FC } from "react";
import './style.scss';


const CardSlider: FC<ICardSlider> = ({arr, navigation= false, view = "main", paginationClassname}) =>{
    const swiper = useSwiper();

    return (
        <S.Slider>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={200}
                width={500}
                effect={'cards'}
                navigation={{
                    prevEl: `.prev--${paginationClassname}`,
                    nextEl: `.next--${paginationClassname}`,
                    disabledClass: 'disable',
                }}
                modules={[Navigation]}

            >
                {
                    arr.map((item, index) =>  (
                        <SwiperSlide key={index}>{({isActive}) => (
                            <div className={`slide--${view}`}>
                                <img src={item.img}/>
                                <div>
                                    {item.title &&
                                        (<S.Text>{item.title}</S.Text> )
                                    }
                                    {
                                        item.description && (
                                            <S.Description>{item.description}</S.Description>
                                        )
                                    }
                                </div>
                            </div>

                        )}</SwiperSlide>
                    ))
                }
            </Swiper>
            <S.ButtonGroup right={navigation}>
                <S.Button theme={paginationClassname} className={`prev--${paginationClassname}`} onClick={() => swiper.slidePrev()}/>
                <S.Button theme={paginationClassname} className={`next--${paginationClassname}`} onClick={() => swiper.slideNext()}/>
            </S.ButtonGroup>
        </S.Slider>
    );
}

export default CardSlider;
