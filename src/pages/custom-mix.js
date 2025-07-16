import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomMixForm from '@/components/CustomMixForm';

export default function CustomMixPage() {
  return (
    <>
      <Head>
        <title>Custom Mix Orders - TOP DJ CRATES</title>
        <meta name="description" content="Order a custom-tailored DJ set perfect for your restaurant, retail store, or event. Curated music to match your brand's atmosphere." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-purple-950 text-gray-100 font-sans antialiased">
        <Header />
        <main className="pt-24">
          {/* The sectionRef prop is no longer needed here as this is a dedicated page */}
          <CustomMixForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
