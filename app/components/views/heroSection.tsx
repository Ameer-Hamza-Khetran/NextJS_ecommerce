import { Button } from "@/components/ui/button"
import { ShoppingCart, } from "lucide-react"
import Image from 'next/image'
import hero1 from '@/images/hero1.webp'
import hero2 from '@/images/hero2.webp'
import hero3 from '@/images/hero3.webp'
import hero4 from '@/images/hero4.webp'

function Sale() {
    return(
        <div className="h-10 w-32 bg-blue-100 text-blue-700 font-semibold rounded-md flex justify-center items-center mt-16">
            Sale 70%
        </div>
    );
}

function HeadingMain() {
    return(
        <div className="mt-10"> 
            <h1 className="font-bold text-black text-5xl leading-tight">
                An Industrial Take on Streetwear
            </h1>
        </div>
    );
}

function Para() {
    return(
        <div>
            <p className="text-gray-700 font-normal mt-8">
                Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
            </p>
        </div>
    );
}

function CartShopping() {
    return(
        <div className="mt-8">
            <Button className="h-16 w-60 bg-gray-950 bg-blend-lighten">
                <ShoppingCart size={24}/>
                <p className="font-semibold ml-2 text-lg">Start Shopping</p>
            </Button>
        </div>
    );
}

function HeroBrandImages() {
    return(
        <div className="mt-10 grid grid-cols-2 gap-y-6">
            <Image alt="bazaar (Brand)" src={hero1} width={100} height={100}></Image>
            <Image alt="bazaar (Brand)" src={hero2} width={100} height={100}></Image>
            <Image alt="bazaar (Brand)" src={hero3} width={100} height={100}></Image>
            <Image alt="bazaar (Brand)" src={hero4} width={100} height={100}></Image>
        </div>
    );
} 

export default function Hero() {
    return(
        <div className="w-5/6 mx-auto">
            <Sale/>
            <HeadingMain/>
            <Para/>
            <CartShopping/>
            <HeroBrandImages/>
        </div>
    );
}