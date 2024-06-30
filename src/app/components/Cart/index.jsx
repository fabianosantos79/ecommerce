import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import CartItem from "../CartItem";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { Button } from "@/components/ui/button";
import { PiShoppingCartDuotone } from "react-icons/pi";


const Cart = () => {
    const { cartItens } = useContext(AppContext);

    const totalPrice = cartItens.reduce((acc, item) => {
        return item.price + acc
    }, 0);

    return (
        <Sheet>
            <SheetTrigger className="md:top-5 md:right-20 absolute sm:top-5 sm:right-1">
                <PiShoppingCartDuotone size={50} className='text-white' />
                {
                    cartItens.length > 0 &&
                    <span className='absolute w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white font-bold top-0 right-0'>{cartItens.length}</span>
                }
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] flex flex-col justify-between">
                <div className="overflow-auto">
                    <SheetTitle className="mb-3">Itens do carrinho</SheetTitle>
                    {cartItens.map(cartItem => <CartItem key={cartItem.id} product={cartItem} />)}
                    {/* <Separator className="my-4" /> */}
                </div>
                <div className="bg-yellow-500 rounded-lg p-4">
                    <SheetHeader>
                        <SheetTitle className="text-slate-700">Valor total</SheetTitle>
                        <SheetDescription className="font-extrabold text-slate-950 text-xl">
                            {totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </SheetDescription>
                    </SheetHeader>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Cart;