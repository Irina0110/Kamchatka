import {ICard} from '@/types';
import Slider11 from '@/assets/slider-1-1.png';
import Slider12 from '@/assets/slider-1-2.png';
import Slider13 from '@/assets/slider-1-3.png';
import Slider23 from '@/assets/Slider-2-3.png';
import Slider22 from '@/assets/Slider-2-2.png';
import Slider21 from '@/assets/Slider-2-1.png';

export const Slider1: ICard[] = [
    {
        img: Slider11,
    },
    {
        img: Slider12,
    },
    {
        img: Slider13,
    },
]

export const Slider2: ICard[] = [
    {
        img: Slider21,
        title: 'Паратунка',
        description: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.'
    },
    {
        img: Slider22,
        title: 'Памятник “Здесь начинается Россия”',
        description: 'Гости Камчатки по традиции делают фото в начале и в конце путешествий.',
    },
    {
        img: Slider23,
        title: 'Название слайда',
        description: 'Какой-то вспомогательный текст, в котором кратко описывается что на картинке.',
    },
]