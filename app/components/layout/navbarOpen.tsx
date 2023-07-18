'use client'

import Link from 'next/link'
import Image from "next/image";
import logo from '@/images/Logo.webp'
import { ShoppingCart, X, } from "lucide-react";
import ProductCount from "../productCount";
import { useState } from 'react';
import Menu from '@/app/components/layout/navbar'

/*------- Navbar Mobile -> Hamburger Menu Closed End--------*/
function Logo() {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={180} height={180}></Image>
        </div>
    );
}

function MenuClose({ onClick }:any) {
    return(
        <X color="#000000" size={30} onClick={onClick}/>
    );
}

function Nav() {
    return(
        <div className='flex flex-col text-center mt-12 '>
            <Link className='text-lg hover:font-semibold' href='../female'>Female</Link>
            <Link className='text-lg mt-4 hover:font-semibold' href='../male'>Male</Link>
            <Link className='text-lg mt-4 hover:font-semibold' href='../kids'>Kids</Link>
            <Link className='text-lg mt-4 hover:font-semibold' href='../all_products'>All Products</Link>
        </div>
    );
}

function Cart() {
    return(
        <div className="mt-40 mx-auto w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">
            <div className='flex flex-col items-end'>
                <ProductCount/>
                <ShoppingCart size={30}/>
            </div>
        </div>
    );
}

//--- Logo and Menu close icon combined to form a header component in the click event of hamburger menu icon ---
function Header() {
    const [menu, setMenu] = useState(false)
    const toggleClose = () => {
        setMenu(!menu)   
    }

    return(
        menu ? <NavbarOpen/>
        : 
        <div className="flex justify-between">
            <Logo/>
            <MenuClose onClick={toggleClose}/>
        </div>
     );
}

//--- Hamburger Menu complete function------
export default function NavbarOpen() {
    return(
        <div className='md:hidden w-4/5 h-screen mx-auto m-12'> 
            <Header/>
            <Cart/> 
            <Nav/>           
        </div>
    );
}
