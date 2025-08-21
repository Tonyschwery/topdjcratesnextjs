import React from 'react';
import Head from 'next/head';
import CustomMixForm from '@/components/CustomMixForm';

// Simplified Custom Mix Page Component
export default function CustomMixPage() {
  return (
    <>
      <Head>
        <title>Custom Mix Orders - TOP DJ CRATES</title>
        <meta name="description" content="Order a custom-tailored DJ set perfect for your restaurant, retail store, or event. Curated music to match your brand's atmosphere." />
      </Head>

      {/* Page-specific content */}
      <div className="px-4 py-16">
        <CustomMixForm />
      </div>
    </>
  );
}