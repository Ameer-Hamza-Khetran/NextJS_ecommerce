import Link from 'next/link'
import Image from "next/image";
import logo from '@/images/Logo.webp'
import { Input } from "@/components/ui/input"
import { Menu } from "lucide-react";

function Logo() {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={160} height={160}></Image>
        </div>
    );
}

function MenuIcon() {
    return(
        <Menu color="#000000" size={28}/>
    );
}

export default function Navbar() {
    return(
        <div className='max-w-screen-2xl w-5/6 mx-auto mt-8 flex justify-between'>
            <Logo/>
            <MenuIcon/>          
        </div>
    );
}
