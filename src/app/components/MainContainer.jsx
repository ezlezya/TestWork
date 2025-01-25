import { notFound } from "next/navigation"
import ProductsContainer from "../ProductsContainer"

export default async function MainContainer() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if (!response.ok) {
            notFound()
        }
        const data = await response.json()
        return (
            <ProductsContainer data={data} />
        )
    } catch (err) {
        console.error("We have an error while getting products from api")
        notFound()
    }
}
