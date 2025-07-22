export interface IProducts {
    id: number, 
    name: string, 
    price: number, 
    oldPrice: number, 
    image: string
}

export interface ICartProducts extends IProducts {
    quantity: number
}