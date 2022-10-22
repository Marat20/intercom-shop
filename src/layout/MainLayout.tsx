import { memo, ReactNode } from "react"
import { Footer } from "./footer/Footer"
import { HeaderTop } from "./header/HeaderTop"
import { Props } from "../interfaces/product"

export const MainLayout = memo(({children}: Props) => {
    return (
        <div className="container">
        <HeaderTop/>
        <main>
            {children}
        </main>
        <Footer/>
        </div>
    )
})