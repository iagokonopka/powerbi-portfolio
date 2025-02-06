'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function BIPortfolioPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-neutral-900 p-6 md:p-8">
        <div className="flex flex-col h-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Iago Konopka</h1>
            <p className="text-neutral-400 text-sm md:text-base mb-4">
              Especialista em Business Intelligence e Análise de Dados
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Meus Projetos de BI</h1>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                image: "/bi-project1.png",
                title: "Dashboard de Vendas",
                description: "Visualização interativa de métricas de vendas com análise comparativa e tendências.",
                tools: ["Power BI", "SQL"],
                link: "/projetos/dashboard-vendas"
              },
              {
                image: "/bi-project2.png",
                title: "Análise de Performance",
                description: "Relatório detalhado de KPIs e métricas de desempenho organizacional.",
                tools: ["Tableau", "Excel"],
                link: "/projetos/analise-performance"
              }
            ].map((project) => (
              <div key={project.title} className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{project.title}</h2>
                <p className="text-neutral-400 text-sm md:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={project.link} 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}