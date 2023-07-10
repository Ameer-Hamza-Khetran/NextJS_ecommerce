import Link from 'next/link'
import Image from "next/image";
import logo from '@/images/Logo.webp'
import { Input } from "@/components/ui/input"
import { ShoppingCart} from "lucide-react";

function Search() {
    let searchIcon;
    return(
        <div className='mx-4'>
            <Input placeholder='What you looking for'/>
        </div>
    )
    
}

function Logo() {
    return(
        <div className='bg-yellow-700 w-fit'>
            <Image alt='Logo' src={logo} width={100} height={100}></Image>
        </div>
    );
}

function Nav() {
    return(
        <div className='flex ml-5 bg-red-300'>
            <Link href='../female'>Female</Link>
            <Link href='../male'>Male</Link>
            <Link href='../kids'>Kids</Link>
            <Link href='../all_products'>All Products</Link>
        </div>
    );
}

function Cart() {
    return(
        <div>
            <ShoppingCart/>
        </div>
    );
}

export default function Navbar() {
    return(
        <div className='max-w-screen-2xl w-10/12 mx-auto bg-green-200 flex'>
            <Logo/>
            <Nav/>
            <Search/>
            <Cart/>            
        </div>
    );
}