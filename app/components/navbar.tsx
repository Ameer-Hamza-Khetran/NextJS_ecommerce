import Link from 'next/link'

export default function Navbar() {
    return(
        <div className='flex flex-col'>
            <Link href='../female'>Female</Link>
            <Link href='../male'>Male</Link>
            <Link href='../kids'>Kids</Link>
            <Link href='../all_products'>All Products</Link>
        </div>
    );
}