import * as S from './style';
import ComplexityIcon from '@/assets/ComplexityIcon.svg';
import HotelIcon from '@/assets/HotelIcon.svg';
import ClockIcon from '@/assets/ClockIcon.svg';
import CalendarIcon from '@/assets/CalendarIcon.svg';
import KamchatkaImg from '@/assets/Kamchatka.svg';
import Airplane from '@/assets/Airplan.png';
import Background from '@/assets/Background-4.png';
const Description = () => {
    return(
        <S.Description>
            <S.Title>Путешествие на край света начинается</S.Title>
            <S.SubTitle>Ваша мечта осуществилась, вы приняли решение, и вам предстоит путешествие на край света.</S.SubTitle>
            <S.SecondaryText>Этот маршрут лучший вариант для тех, кто хочет ощутить, как живёт самая молодая земля нашей планеты, многое увидеть, испытать на себе и полюбить, увезти целый рюкзак незабываемых чувств и впечатлений. Каждый день вы будете выезжать на радиальные маршруты, а проживать в комфортабельных двухместных номерах.</S.SecondaryText>
            <S.Background src={Background}/>
            <S.CardGroup>
                <S.Card>
                    <S.CardIcon src={ComplexityIcon}/>
                    <S.CardTitle>Сложность</S.CardTitle>
                    <S.CardInfo>Для семейного отдыха</S.CardInfo>
                </S.Card>
                <S.Card>
                    <S.CardIcon src={CalendarIcon}/>
                    <S.CardTitle>Период</S.CardTitle>
                    <S.CardInfo>Июль - сентябрь</S.CardInfo>
                </S.Card>
                <S.Card>
                    <S.CardIcon src={ClockIcon}/>
                    <S.CardTitle>Длительность</S.CardTitle>
                    <S.CardInfo>7 дней / 6 ночей</S.CardInfo>
                </S.Card>
                <S.Card>
                    <S.CardIcon src={HotelIcon}/>
                    <S.CardTitle>Проживание</S.CardTitle>
                    <S.CardInfo>Отель, без палаток</S.CardInfo>
                </S.Card>
            </S.CardGroup>
            <S.ImagesBlock>
                <S.KamchatkaImg src={KamchatkaImg} />
                <S.AirplaneImg src={Airplane}/>
            </S.ImagesBlock>
            <S.ReviewBlock>
                <S.ReviewTitle>Камчатка – земля великолепной заснеженной природы, действующих вулканов и диких мест, где ещё не ступала нога человека.</S.ReviewTitle>
                <S.Quote>“Когда мы подлетали к Камчатке, у меня захватило дух от увиденного. Это за гранью реальности. Невероятно!”</S.Quote>
                <S.Sign>Максим, <u>@max_max</u></S.Sign>
            </S.ReviewBlock>

        </S.Description>
    )
}

export default Description;