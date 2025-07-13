import { ProductProps } from "./ProductProps"

export type CartProduct = ProductProps & {
    count: number,
}

export type Cart = {
    products: Array<CartProduct>
    total: number
}