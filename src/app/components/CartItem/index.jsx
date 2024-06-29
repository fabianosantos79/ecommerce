import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { MdDelete } from "react-icons/md";



const CartItem = () => {
    return (
        <Card className="flex justify-center items-center gap-3 mb-3">
            <CardHeader className="flex-1 p-2">
                <img src="https://http2.mlstatic.com/D_635693-MLU72749098569_112023-W.jpg" alt="" />
            </CardHeader>
            <CardContent className="flex flex-3 flex-col justify-center mt-5">
                <CardDescription>Liquidificador Wallita</CardDescription>
                <CardTitle className="font-bold text-lg">R$ 159,50</CardTitle>
            </CardContent>
            <CardFooter className="flex p-3 m-0">
                <MdDelete size={20} className="text-red-700 cursor-pointer " />
            </CardFooter>
        </Card>
    )
}

export default CartItem;