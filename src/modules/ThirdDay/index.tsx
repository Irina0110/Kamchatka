import * as S from './style.ts';
import Background from '@/assets/Background-7.png';
import CardSlider from "@/components/CardSlider";
import {Slider2} from "@/utils/slider-cards.static.ts";

const ThirdDay = () => {
    return (
        <S.ThirdDay>
            <S.Background src={Background}/>
            <S.Content>
                <CardSlider arr={Slider2}/>
                <S.TextBlock>
                    <S.Title><S.OrangeText>День 3.</S.OrangeText>&#160;Горные цирки и водопады вулкана
                        Вачкажец</S.Title>
                    <S.Paragraph>Вачкажец–горный массив и его окрестности, одно из красивейших мест первозданной
                        камчатской природы. Небольшой пеший переход не успеет Вас утомить. А в награду за труд в конце
                        пути открывается великолепный вид на горное озеро в чаше кратера старого потухшего вулкана,
                        обрамленное пиками старых, невысоких гор.</S.Paragraph>
                    <S.Paragraph>Выезд из гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну сторону
                        к горным циркам вулкана Вачкажец, осмотр водопада. Обед. Отдых. По прибытию в машину чай с
                        шоколадом! Обратный переход по тому же пути. </S.Paragraph>
                    <S.Paragraph>Продолжительность: 8 часов. Трансфер в гостиницу.</S.Paragraph>
                </S.TextBlock>
            </S.Content>
        </S.ThirdDay>
    )
}

export default ThirdDay;