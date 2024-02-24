import * as S from './style';
import CardSlider from "@/components/CardSlider";
import {Slider2} from '@/utils/slider-cards.static';

const FirstDay = () => {
   return (
        <S.FirstDay>
            <S.TextBlock>
                <S.Title><S.OrangeText>День 1.</S.OrangeText>&#160;Прибытие. Встреча в аэропорту и размещение</S.Title>
                <S.Paragraph>С высоты птичьего полета вы увидите знаменитые «домашние» вулканы – Корякский, Авачинский и
                    Козельский. У выхода в аэропорту <S.WhiteText>вас встретят с табличкой «ДРИМ
                        ТУР».</S.WhiteText></S.Paragraph>
                <S.Paragraph><S.WhiteText>По пути в гостиницу сбор средств</S.WhiteText> с членов группы, инструктаж по
                    программе этого дня (бассейн с термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк
                    не раньше 20:00).</S.Paragraph>
                <S.Paragraph>После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный <u>поселок
                    Паратунка.</u></S.Paragraph>
                <S.Paragraph><S.WhiteText>Вечером</S.WhiteText>, после прибытия на Камчатку всех участников (если рейсы
                    разные), <S.WhiteText>общая встреча</S.WhiteText>, проверка снаряжения, обсуждение программы
                    завтрашнего дня.</S.Paragraph>
            </S.TextBlock>
            <S.Slider>
                <CardSlider arr={Slider2} view={'main'} paginationClassname={'light'}/>
            </S.Slider>=
        </S.FirstDay>
    )
}

export default FirstDay;