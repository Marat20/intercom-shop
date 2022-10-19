import { memo, ReactNode } from "react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"
import { Props } from "../interfaces/product"

export const MainLayout = memo(({children}: Props) => {
    return (
        <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
})