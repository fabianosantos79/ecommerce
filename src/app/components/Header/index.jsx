import FormSearch from '../FormSearch'
import './Header.css'

const Header = () => {

    return (
        <header className='w-full fundo flex flex-col'>
            <div className='container text-white flex items-center fundo-amarelo justify-evenly'>
                <FormSearch />
            </div>
            <div className='div-container h-96 object-cover xl:object-scale-down'></div>
        </header>
    )
}

export default Header