'use client'

import { useState } from 'react';
import Hero from '../app/components/heroSection'
import MenuOpen from './components/layout/navbar2';
import Navbar from "@/app/components/layout/navbar";

export default function Home() {
  return (
    <div>
      <MenuOpen/>
      <Hero/>
    </div>
  );
}
