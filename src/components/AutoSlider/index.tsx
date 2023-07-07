import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {Autoplay, Pagination, EffectFade} from 'swiper/modules';
import Background1 from '@/assets/Background-1.svg';
import Background2 from '@/assets/Background-2.png';
import Background3 from '@/assets/Background-3.jpeg';
import * as S from './style';

const AutoSlider = () => {
    return (
        <S.Slider>
            <Swiper
                autoplay={{delay: 5000, disableOnInteraction: false}}
                speed={2000}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
            >
                <SwiperSlide><S.Image src={Background1}/></SwiperSlide>
                <SwiperSlide><S.Image src={Background2}/></SwiperSlide>
                <SwiperSlide><S.Image src={Background3}/></SwiperSlide>
            </Swiper>
        </S.Slider>
    );
}

export default AutoSlider;
