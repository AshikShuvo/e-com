export default interface ProductType{
    id: number;
    title: string;
    price: number;
    description:string;
    category: string;
    image: string;
    rating:RatingType;
    mine:number;
}

interface RatingType{
    rate:number;
    count:number;
}