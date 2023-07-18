'use client'

import Image from "next/image";
import Link from 'next/link'
import logo from '@/images/Logo.webp'
import { AlignRight, ShoppingCart, X,} from "lucide-react";
import ProductCount from "../productCount";
import { useState } from "react";
// import NavbarOpen from "@/app/components/layout/navbarOpen";

/*------- Navbar Mobile -> Hamburger Menu Closed Start--------*/

interface LogoSize {
    height?: number | `${number}` | undefined
    width?: number | `${number}` | undefined
}

function Logo({height, width}: LogoSize) {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={width} height={height}></Image>
        </div>
    );
}

function HamburgerMenu({onClick}:any) {
    return(
        <AlignRight color="#000000" size={28} onClick={onClick}/>
    );
}

/*------- Navbar Mobile -> Hamburger Menu Closed End--------*/

/**------ Navbar Mobile -> Hamburger menu Open Start------ */

function Logo1() {
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
        menu ? <Menu/>
        : 
        <div className="flex justify-between">
            <Logo1/>
            <MenuClose onClick={toggleClose}/>
        </div>
     );
}

//--- Hamburger Menu complete function------
export function NavbarOpen() {
    return(
        <div className='md:hidden w-4/5 h-screen mx-auto m-12'> 
            <Header />
            <Cart/> 
            <Nav/>           
        </div>
    );
}


/**------ Navbar Mobile -> Hamburger menu Open End------ */

/*----- Main Function ---------*/
export default function Menu() {
    const [nav, setNav] = useState(true);
    const toggleNav = () => {
        setNav(!nav);
    };
    return(
        nav ?
            <div className='max-w-screen-2xl w-5/6 mx-auto mt-8 flex justify-between'>
                <Logo
                    height={160}
                    width={160}
                />
                <HamburgerMenu onClick={toggleNav}/>          
            </div>
        : <NavbarOpen/>
    );
}
