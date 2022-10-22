import { ReactNode } from "react"

export interface IProduct {
    id: string
    name: string
    description: string
    image: string
    price: number
    category: string
}

export interface Props {
    children?: ReactNode
}