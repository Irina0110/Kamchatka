import * as S from './style.ts';
import {IWaitingCard} from "@/types";
import {FC} from "react";

const WaitingCard: FC<IWaitingCard> = ({img, title, description}) => {
    return(
        <S.Card>
            <S.Img src={img} alt={'card icon'}/>
            <S.TextBlock>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.TextBlock>
        </S.Card>
    )
}

export default WaitingCard;