'use client'

import Image from "next/image";
import logo from '@/images/Logo.webp'
import { Menu, } from "lucide-react";

function Logo1() {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={160} height={160}></Image>
        </div>
    );
}

function handleOpenMenu() {
    return alert('Hello World')   
}

function HamburgerMenu() {
    return(
        <Menu color="#000000" size={28} onClick={handleOpenMenu}/>
    );
}

export default function Navbar2() {
    return(
        <div className='max-w-screen-2xl w-5/6 mx-auto mt-8 flex justify-between'>
            <Logo1/>
            <HamburgerMenu/>          
        </div>
    );
}
