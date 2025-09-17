import { ProductProps } from "./product-props"

export type CartProduct = ProductProps & {
    count: number,
}

export type Cart = {
    products: Array<CartProduct>
    total: number
    products_amount: number
}