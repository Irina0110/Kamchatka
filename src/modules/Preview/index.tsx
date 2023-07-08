import * as S from './style.ts'
import AutoSlider from "@/components/AutoSlider";
import TimetableIcon from "@/assets/Timetable-icon.svg";
import InstagramIcon from '@/assets/InstagramIcon.svg';
import FacebookIcon from '@/assets/FacebookIcon.svg';
import CardSlider from "@/components/CardSlider";
import {Slider1} from "@/utils/slider-cards.static.ts";

const Preview = () => {
    return (
        <S.Preview>
            <AutoSlider/>
            <S.Title>Мечты о далекой Камчатке - близко</S.Title>
            <S.Label>23.06 - 04.07 DREAM TOUR</S.Label>
            <S.Block>
                <S.BlockSection>
                    <S.BlockSection>
                        <S.Description>Тур перевернет ваш мир с ног на голову и оставит впечатления на всю
                            жизнь.</S.Description>
                        <S.Timetable>
                            <S.UnderlinedText>Расписание</S.UnderlinedText>
                            <S.ButtonIcon src={TimetableIcon}/>
                        </S.Timetable>
                    </S.BlockSection>
                    <S.Contacts>
                        <S.ButtonIcon src={FacebookIcon}/>
                        <S.ButtonIcon src={InstagramIcon}/>
                    </S.Contacts>
                </S.BlockSection>
                <CardSlider arr={Slider1}/>
            </S.Block>

        </S.Preview>
    )
}

export default Preview;