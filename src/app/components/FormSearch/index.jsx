'use client'

import { Button } from '@/components/ui/button';
import { IoSearchCircle } from "react-icons/io5";
import { useContext, useState } from 'react';
import fetchProduct from '@/app/api/fetchProducts';
import AppContext from '../context/AppContext';

const FormSearch = () => {
    const { setProducts } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState("");

    const handleInput = async (event) => {
        event.preventDefault();

        const products = await fetchProduct(searchValue);

        setProducts(products);
        setSearchValue("");
    }

    return (
        <form className='flex h-14 w-full max-w-screen-md items-center py-10' onSubmit={handleInput}>
            <input type="text" placeholder="Buscar produtos, marcas e muito mais..." className="bg-white outline-none border-none px-4 py-3 text-gray-900 text-lg rounded-2xl w-full" onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
            <Button variant="link">
                <IoSearchCircle size={57} className='text-white font-black' />
            </Button>
        </form>
    )
}

export default FormSearch;