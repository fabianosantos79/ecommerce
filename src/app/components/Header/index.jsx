import FormSearch from '../FormSearch'
import { PiShoppingCartDuotone } from "react-icons/pi";
import './Header.css'
import { Button } from '@/components/ui/button';

const Header = () => {

    return (
        <header className='w-full fundo flex flex-col'>
            <div className='container text-white flex items-center fundo-amarelo justify-evenly'>
                <FormSearch />
                <Button variant="link" className='relative'>
                    <PiShoppingCartDuotone size={50} className='text-white' />
                    <span className='absolute w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white font-bold top-0 right-3'>8</span>
                </Button>

            </div>
            <div className='div-container h-96 object-cover xl:object-scale-down'></div>
        </header>
    )
}

export default Header