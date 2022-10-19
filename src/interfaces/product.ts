import { ReactNode } from "react"

export interface IProduct {
    id: number
    name: string
    description: string
    image: string
    price: number
}

export interface Props {
    children?: ReactNode
}