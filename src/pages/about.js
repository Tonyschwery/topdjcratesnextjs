import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Where Do DJs Get Their Music? | The TOP DJ CRATES Story</title>
        <meta 
          name="description" 
          content="The secret's out. Learn how TOP DJ CRATES became the trusted source for professional and female DJs to get high-quality, exclusive music and save time." 
        />
        <meta 
          name="keywords" 
          content="about top dj crates, where djs get music, dj music source, female dj community, professional dj tools" 
        />
        <meta property="og:title" content="Where Do DJs Get Their Music? | The TOP DJ CRATES Story" />
        <meta property="og:description" content="Learn why we're the trusted source for high-quality, exclusive music for professional and DJs." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main className="pt-24">
          <section id="about" className="container mx-auto py-16 px-4 md:px-8 text-left bg-gray-800 rounded-xl shadow-xl my-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-10 text-center">The Answer to "Where Do DJs Get Their Music?"</h1>
            <div className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-loose space-y-6">
              <p><strong className="text-emerald-400 font-bold">No More Digging for Tracks.</strong> We've Done It For You. Every pack on our site is curated by professional DJs—including leading female DJs in the industry—who know exactly what works on the dancefloor.</p>
              <p>These aren’t random loops or stock samples — they’re <strong className="text-emerald-400 font-bold">handpicked, high-quality WAV files</strong> ready to plug straight into Rekordbox, Serato, Virtual DJ, or any software you use.</p>
              <p>We save you the hours of digging, sorting, and organizing — so you can focus on what you do best: performing. Just <strong className="text-emerald-400 font-bold">drag, drop, and play.</strong> It’s that easy.</p>
            </div>
          </section>
          
          <TestimonialCarousel />
        </main>
        <Footer />
      </div>
    </>
  );
}
