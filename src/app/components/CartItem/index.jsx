import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import AppContext from "../context/AppContext";



const CartItem = ({ product }) => {

    const { cartItens, setCartItens } = useContext(AppContext);
    const { id, thumbnail, title, price } = product;

    let strg = title;
    let first_name = strg.split(' ')[0];

    const handleDeleteItem = () => {
        const updateItens = cartItens.filter((item) => {
            return item.id !== id;
        })
        setCartItens(updateItens);
    }

    return (
        <Card className="flex justify-center items-center gap-3 mb-3">
            <CardHeader className="flex-auto p-2">
                <img src={thumbnail} alt={title} />
            </CardHeader>
            <CardContent className="flex flex-2 flex-col justify-center mt-5">
                <CardDescription>{first_name}</CardDescription>
                <CardTitle className="font-bold text-lg">{price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}
                </CardTitle>
            </CardContent>
            <CardFooter className="flex p-3 m-0">
                <MdDelete size={20} className="text-red-700 cursor-pointer" onClick={handleDeleteItem} />
            </CardFooter>
        </Card>
    )
}

export default CartItem;