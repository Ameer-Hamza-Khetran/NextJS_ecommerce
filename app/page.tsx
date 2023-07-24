'use client'

import { useState } from 'react';
import Hero from '@/app/components/views/heroSection';
import Navbar from "@/app/components/layout/navbar";
import Footer from "@/app/components/views/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
