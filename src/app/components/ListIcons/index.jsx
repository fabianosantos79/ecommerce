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

const ListIcons = () => {

    function clicou() {
        console.log("Clicou");
    }

    return (
        <div className="container max-w-screen-xl w-full px-28 flex flex-wrap justify-between gap-1 mt-4">

            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <FaMobileScreenButton size={48} onClick={clicou()} />
                    <CardTitle>Smartphones</CardTitle>
                </CardHeader>
            </Card>

            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <HiComputerDesktop size={48} />
                    <CardTitle>Computadores</CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <GiPoloShirt size={48} />
                    <CardTitle>Vestuário</CardTitle>
                </CardHeader>
            </Card>
            <Card className="w-1/5 h-28 cursor-pointer">
                <CardHeader className="flex justify-center items-center text-gray-800">
                    <FaCarAlt size={48} />
                    <CardTitle>Veículos</CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default ListIcons;