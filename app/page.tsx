'use client'

import { useState } from 'react';
import Hero from '../app/components/heroSection'
import Menu from './components/layout/navbar';
import Navbar from "@/app/components/layout/navbarOpen";
import NavbarOpen from '@/app/components/layout/navbar';

export default function Home() {
  return (
    <div>
      <Menu/>
      <Hero/>
    </div>
  );
}
