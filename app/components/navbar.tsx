import Link from 'next/link'
import Image from "next/image";
import logo from '@/images/Logo.webp'
import { ShoppingCart, X, } from "lucide-react";

function Logo() {
    return(
        <div className='w-fit'>
            <Image alt='Logo' src={logo} width={180} height={180}></Image>
        </div>
    );
}

function MenuClose() {
    return(
        <X color="#000000" size={30} />
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
            <div>
                <ShoppingCart size={30}/>
            </div>
        </div>
    );
}

function Header() {
    return(
        <div className="flex justify-between">
            <Logo/>
            <MenuClose/>
        </div>
    );
}

export default function Navbar() {
    return(
        <div className='max-w-screen-2xl w-4/5 max-h-screen h-screen mx-auto mt-12'> 
            <Header/>
            <Cart/> 
            <Nav/>           
        </div>
    );
}
