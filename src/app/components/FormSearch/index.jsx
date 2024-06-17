'use client'

import { Button } from '@/components/ui/button';
import { IoSearchCircle } from "react-icons/io5";
import { useState } from 'react';

const FormSearch = () => {
    const [searchValue, setSearchValue] = useState("");

    // // const handleInput = (event) => {
    // //     event.preventDefault();
    // //     setSearch(event.target.value);
    // // }

    return (
        <form className='flex h-14 w-full max-w-screen-md items-center py-12'>
            <input type="text" placeholder="Buscar produtos, marcas e muito mais..." className="bg-white outline-none border-none px-4 py-3 text-gray-900 text-lg rounded-2xl w-full" onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
            <Button variant="link">
                <IoSearchCircle size={57} className='text-white font-black' />
            </Button>
        </form>
    )
}

export default FormSearch;