'use client'

import { useState } from "react";
import Image from "next/image";
import logo from '@/images/Logo.webp'
import { AlignRight, ShoppingCart, X,} from "lucide-react";
import ProductCount from "@/app/components/productCount";
import Link from 'next/link'


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


/**------ Navbar Mobile -> Hamburger menu Open End------ */

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    return (  
        <div>
        <div className='max-w-screen-2xl w-5/6 mx-auto mt-8 flex justify-between sm:w-3/4 sm:mt-16 md:w-5/6'>
          {!isOpen && <Logo height={160} width={160} />}
          {!isOpen && <HamburgerMenu onClick={toggleNav} />}
          {isOpen && (
            <div className='flex justify-between w-full'>
              <Logo1 />
              <MenuClose onClick={toggleNav} />
            </div>
          )}
        </div>
  
        {isOpen && (
          <div className='md:hidden relative w-4/5 max-h-screen h-screen mx-auto m-12'>
            <Cart />
            <Nav />
          </div>
        )}
      </div>
    );
  }