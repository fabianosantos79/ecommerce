import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import AppContext from "../context/AppContext";


const CardProduct = ({ product }) => {

    const { cartItens, setCartItens } = useContext(AppContext);

    const addItemCart = () => setCartItens([...cartItens, product]);

    return (
        <Card key={product.id} className="sm:w-full sm:max-w-60 relative card hover:shadow-2xl">
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
            <Button variant="link" className="absolute flex justify-center gap-6 w-14 h-14 right-0 top-80 "><FaCartPlus size={30} className="text-blue-600 botao-adicionar" onClick={addItemCart} />
            </Button>
        </Card>
    )
}

export default CardProduct