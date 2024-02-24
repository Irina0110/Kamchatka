export type ICard = {
    title?: string,
    description?: string,
    img: string,
    view?: string
}
export interface ICardSlider {
    arr: ICard[],
    navigation?: boolean,
    view?: string,
    isLightPagination?: boolean
}