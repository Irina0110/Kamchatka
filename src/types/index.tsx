export type ICard = {
    title?: string,
    description?: string,
    img: string,
}
export interface ICardSlider {
    arr: ICard[],
    navigation?: boolean,
    view?: string,
}

export interface IWaitingCard {
    img: string,
    title: string,
    description: string,
}