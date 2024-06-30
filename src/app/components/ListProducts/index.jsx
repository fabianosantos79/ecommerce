'use client'

import fetchProduct from "@/app/api/fetchProducts";
import "./ListProducts.css"
import { useContext, useEffect } from "react"
import AppContext from "../context/AppContext";
import Loading from "../Loading";
import CardProduct from "../CardProduct";


const ListProducts = () => {
    const { products, setProducts, loadingSpin, setLoadSpin } = useContext(AppContext);

    useEffect(() => {
        fetchProduct('eletrodomesticos')
            .then(response => setProducts(response))
        setLoadSpin(false);
    }, [])

    return (
        (loadingSpin && <Loading />) || (
            <section className="container max-w-screen-xl w-full px-28 pt-6 flex flex-wrap gap-6">
                {products.map(product =>
                    <CardProduct product={product} />
                )}
            </section>
        )
    )
}

export default ListProducts