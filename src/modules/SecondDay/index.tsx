import * as S from './style';
import Background from '@/assets/Background-6.png';
import CardSlider from "@/components/CardSlider";
import {Slider2} from "@/utils/slider-cards.static";

const SecondDay = () => {
    return (
        <S.SecondDay>
            <S.TextBlock>
                <S.Title><S.OrangeText>День 2.</S.OrangeText>&#160;Вилючинский водопад, вулкан и Верхне-Паратунские
                    термальные источники</S.Title>
                <S.Paragraph>Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями,
                    форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные
                    принадлежности).</S.Paragraph>
                <S.Paragraph>Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто
                    прыгает.</S.Paragraph>
                <S.Background src={Background}/>
            </S.TextBlock>
            <S.SliderBlock>
                <CardSlider arr={Slider2} view={'main'} paginationClassname={'dark'} navigation={true}/>
                <S.TextBlock>
                    <S.Paragraph>Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана
                        Вилючинский. Обзорная пешеходная экскурсия к водопаду Вилючинский. Термос с чаем, шоколад.
                        Возвращение назад.</S.Paragraph>
                    <S.Paragraph>Обед. Купание в Верхне-Паратунских термальных источниках, расположенных на склоне сопки
                        Горячая.</S.Paragraph>
                    <S.Paragraph> Продолжительность – 6-8 часов. Трансфер в гостиницу.</S.Paragraph>
                </S.TextBlock>
            </S.SliderBlock>
        </S.SecondDay>
    )
}

export default SecondDay;