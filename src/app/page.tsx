'use client';
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function BIPortfolioPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <aside className="w-full md:w-72 bg-neutral-900 p-6 md:p-8">
        <div className="flex flex-col h-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Iago Konopka</h1>
            <p className="text-neutral-400 text-sm md:text-base mb-4">
              Data Analyst focused on powerful BI solutions development.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/iagokonopka/" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/iago-konopka/" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:konopka.iago@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-6 md:p-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Power BI Reports Portfolio</h1>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/powerbi-portfolio/abb.png",
                title: "Procurement IM&S PA Report",
                description: "This report is focused on Purchase Requisition and Receipt metrics that help the Procurement team on a daily-basis analysis.",
                tools: ["Power BI", "Excel", "Sharepoint"],
                link: "/projects/abb"
              },
              {
                image: "/powerbi-portfolio/solman.png",
                title: "SAP Solman Governance",
                description: "Report built to display volume of Incident tickets from SAP Solman, helping the team to reduce the backlogged tickets.",
                tools: ["Power BI", "Sharepoint"],
                link: "/projetos/analise-performance"
              },
              {
                image: "/powerbi-portfolio/voicero.png",
                title: "Live Translator Bot",
                description: "Project made to help the developers displaying usage metrics for bot that translates voice calls in real-time.",
                tools: ["Power BI", "SQL"],
                link: "/projetos/analise-performance"
              },
              {
                image: "/powerbi-portfolio/xflow.png",
                title: "Marketing Analytics",
                description: "Report created to analyze data from advertising campaigns using common metrics to ensure marketing performance.",
                tools: ["Power BI", "Excel"],
                link: "/projetos/analise-performance"
              },
              {
                image: "/powerbi-portfolio/cot.png",
                title: "Commitment of Traders",
                description: "Project built to display market price changes based on the Commitment of Traders weekly balance.",
                tools: ["Power BI", "SQL", "Python"],
                link: "/projetos/analise-performance"
              }
            ].map((project) => (
              <div key={project.title} className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-4 hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-contain bg-neutral-800"
                  />
                </div>  
                <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{project.title}</h2>
                <p className="text-neutral-400 text-sm md:text-base mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
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
                    className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full text-sm transition-colors shrink-0"
                  >
                    See details
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