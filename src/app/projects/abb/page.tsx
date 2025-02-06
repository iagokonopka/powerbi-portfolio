'use client';
import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function DashboardVendasPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <Link href="/" className="flex items-center text-gray-400 hover:text-white">
            <ChevronLeft size={20} className="mr-2" />
            Voltar para Projetos
          </Link>
        </nav>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Dashboard de Vendas</h1>
          <div className="flex space-x-2">
            <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded-full text-xs">
              Power BI
            </span>
            <span className="bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs">
              SQL
            </span>
          </div>
        </header>

        {/* Project Details */}
        <section className="bg-gray-800 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
          <p className="text-gray-400 mb-4">
            Dashboard interativo que oferece uma visão abrangente das métricas de vendas, 
            permitindo análise comparativa e identificação de tendências em tempo real.
          </p>
        </section>

        {/* Embedded Power BI */}
<section className="bg-gray-800 rounded-lg p-6 md:p-8">
  <h2 className="text-2xl font-semibold mb-4">Dashboard Interativo</h2>
  <div className="aspect-video bg-gray-700 flex items-center justify-center text-gray-400">
    <iframe 
      title="Procurement IM&S PA Report - Portfolio" 
      className="w-full h-full rounded-lg" 
      src="https://app.powerbi.com/view?r=eyJrIjoiZDVhYWE2MzEtMDM2Yi00ZjczLTlkMWMtNWEwNjZhMjczMDY2IiwidCI6IjRhMzA5ZGI1LTAzYTctNDExMC05MWI0LTdiMjE5NmY5MWE5OSJ9" 
      frameBorder="0" 
      allowFullScreen
    ></iframe>
  </div>
</section>
      </div>
    </div>
  );
}