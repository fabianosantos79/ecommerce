'use client'

import fetchProduct from "@/app/api/fetchProducts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { FaCartPlus } from "react-icons/fa";
import "./ListProducts.css"
import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppContext";


const ListProducts = () => {
    const { products, setProducts } = useContext(AppContext);
    //const [loadingSpin, setLoadSpin] = useState(false);

    useEffect(() => {
        fetchProduct('eletrodomesticos')
            .then(response => setProducts(response))
    }, [])

    return (
        <section className="container max-w-screen-xl w-full px-28 pt-6 flex flex-wrap gap-6">
            {products.map(product =>
                <Card key={product.title} className="w-full max-w-60 relative card hover:shadow-2xl">
                    <CardTitle>
                        <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} className="w-96" />
                    </CardTitle>
                    <CardContent>
                        <h2 className="font-semibold text-sm text-gray-700">{product.title}</h2>
                    </CardContent>
                    <CardFooter>
                        <h3 className="font-extrabold text-xl">{product.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</h3>
                    </CardFooter>
                    <Button variant="link" className="absolute flex justify-center gap-6 w-14 h-14 right-0 top-80 "><FaCartPlus size={30} className="text-blue-600 botao-adicionar" />
                    </Button>
                </Card>)}
        </section>
    )
}

export default ListProducts