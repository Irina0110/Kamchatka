export type ICard = {
    title?: string,
    description?: string,
    img: string,
}
export default interface CardSliderProps {
    arr: ICard[],
    navigation?: boolean,
}