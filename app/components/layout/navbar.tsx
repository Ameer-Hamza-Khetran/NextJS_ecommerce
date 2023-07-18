'use client'

import Image from "next/image";
import logo from '@/images/Logo.webp'
import { AlignRight,} from "lucide-react";
import { useState } from "react";
import NavbarOpen from "@/app/components/layout/navbarOpen";

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
