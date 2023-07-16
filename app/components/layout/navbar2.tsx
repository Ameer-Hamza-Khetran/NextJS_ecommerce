'use client'

import Image from "next/image";
import logo from '@/images/Logo.webp'
import { AlignRight, } from "lucide-react";
import { useState } from "react";
import Navbar from "@/app/components/layout/navbar";

function Logo1() {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={160} height={160}></Image>
        </div>
    );
}

function HamburgerMenu({onClick}:any) {
    return(
        <AlignRight color="#000000" size={28} onClick={onClick}/>
    );
}

export default function MenuOpen() {
    const [nav, setNav] = useState(true);
    const toggleNav = () => {
        setNav(!nav);
    };
    return(
        <div className='max-w-screen-2xl w-5/6 mx-auto mt-8 flex justify-between'>
            <Logo1/>
            {nav ? null : <Navbar/>}
            <HamburgerMenu onClick={toggleNav}/>          
        </div>
    );
}
