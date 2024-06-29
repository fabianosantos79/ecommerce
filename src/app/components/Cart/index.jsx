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


const Cart = () => {
    return (
        <Sheet>
            <SheetTrigger className="top-0 right-0 absolute">Open</SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetTitle className="mb-3">Itens do carrinho</SheetTitle>
                <CartItem className="mb-4" />
                <Separator className="my-4" />
                <SheetHeader>
                    <SheetTitle>Resumo</SheetTitle>
                    <SheetDescription>
                        ...
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default Cart;