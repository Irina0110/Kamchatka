import {ICard} from '@/types';
import Slider11 from '@/assets/slider-1-1.png';
import Slider12 from '@/assets/slider-1-2.png';
import Slider13 from '@/assets/slider-1-3.png';
import Slider23 from '@/assets/Slider-2-3.png';
import Slider22 from '@/assets/Slider-2-2.png';
import Slider21 from '@/assets/Slider-2-1.png';
import WaitingCard1 from '@/assets/WaitingCard-1.png';
import WaitingCard2 from '@/assets/WaitingCard-2.png';
import WaitingCard3 from '@/assets/WaitingCard-3.png';
import WaitingCard4 from '@/assets/WaitingCard-4.png';

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

export const WaitingCards = [
    {
        img: WaitingCard1,
        title: 'Аудиосопровождение',
        description: 'Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.',
    },
    {
        img: WaitingCard2,
        title: 'Разнообразное питание',
        description: 'Каждый обед мы готовим с большой любовью. Кормим вас традиционными камчатскими блюдами. Еда - залог хорошего отдыха!',
    },
    {
        img: WaitingCard3,
        title: 'Безопасность на маршруте',
        description: 'Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций.',
    },
    {
        img: WaitingCard4,
        title: 'Потрясающие фото',
        description: 'Можете не переживать, что не успели сделать фото. Наш фотограф успевает везде и за всеми. У вас будут самые лучшие фото!',
    },
]