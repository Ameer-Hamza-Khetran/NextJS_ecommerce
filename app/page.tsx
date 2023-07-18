'use client'

import { useState } from 'react';
import Hero from '../app/components/heroSection'
import MenuOpen from './components/layout/navbar';
import Navbar from "@/app/components/layout/navbarOpen";

export default function Home() {
  return (
    <div>
      <MenuOpen/>
      <Hero/>
    </div>
  );
}
