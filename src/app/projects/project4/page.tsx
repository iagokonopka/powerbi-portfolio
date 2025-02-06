'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function DashboardVendasPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link href="/" className="flex items-center text-neutral-400 hover:text-white transition-colors">
            <ChevronLeft size={20} className="mr-2" />
            Back to projects
          </Link>
        </nav>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Marketing Analytics</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded-full text-xs">
              Power BI
            </span>
            <span className="bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs">
              Excel
            </span>
          </div>
        </header>

        {/* Project Details */}
        <section className="bg-neutral-900 rounded-lg p-4 md:p-6 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">About the project</h2>
          <p className="text-neutral-400 text-sm md:text-base">
            DETAILS COMING SOON
          </p>
        </section>

        {/* Embedded Power BI */}
        <section className="bg-neutral-900 rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Interactive Report</h2>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <iframe 
              title="Procurement IM&S PA Report - Portfolio" 
              className="absolute inset-0 w-full h-full bg-neutral-800" 
              src="https://app.powerbi.com/view?r=eyJrIjoiNTZmM2JkZjEtNWE4ZC00YWRlLWIxN2MtNjllNzcyYWEyZmNkIiwidCI6IjRhMzA5ZGI1LTAzYTctNDExMC05MWI0LTdiMjE5NmY5MWE5OSJ9" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}