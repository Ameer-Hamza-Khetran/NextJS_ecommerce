'use client'

import { useState } from 'react';
import Hero from './components/views/heroSection'
import Menu from './components/layout/navbar';
import Navbar from "@/app/components/layout/navbarFinal";
import NavbarOpen from '@/app/components/layout/navbar';
import Footer from '@/app/components/views/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
