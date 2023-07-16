import * as S from './style.ts';
import WaitingCard from "@/components/WaitingCard";
import {WaitingCards} from "@/utils/slider-cards.static.ts";

const Waiting = () => {
    return(
        <S.Waiting>
            <S.Title>На протяжении маршрута вас ожидает:</S.Title>
            <S.Cards>
                {WaitingCards.map((card, index) => (
                    <WaitingCard key={index} img={card.img} title={card.title} description={card.description}/>
                ))}
            </S.Cards>
        </S.Waiting>
    )
}

export default Waiting;