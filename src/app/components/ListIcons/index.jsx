import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaMobileScreenButton } from "react-icons/fa6";
import { HiComputerDesktop } from "react-icons/hi2";
import { GiPoloShirt } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import fetchProduct from "@/app/api/fetchProducts";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const ListIcons = () => {

    const { setProducts } = useContext(AppContext);

    const clicou = async (search) => {
        const productsIcons = await fetchProduct(search);
        setProducts(productsIcons);
    }

    return (
        <div className="container max-w-screen-xl w-full px-28 flex flex-wrap justify-between gap-1 mt-4">

            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <FaMobileScreenButton size={48} onClick={e => (clicou("smartphones"))} />
                    <CardTitle>Smartphones</CardTitle>
                </CardHeader>
            </Card>

            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <HiComputerDesktop size={48} onClick={e => (clicou('computadores'))} />
                    <CardTitle>Computadores</CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <GiPoloShirt size={48} onClick={e => clicou('vestuário')} />
                    <CardTitle>Vestuário</CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <FaCarAlt size={48} onClick={e => (clicou('veículos'))} />
                    <CardTitle>Veículos</CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default ListIcons;