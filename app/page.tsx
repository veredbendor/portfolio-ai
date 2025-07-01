"use client";

import { SparklesIcon, ChartBarIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-6 md:px-12">
      <section className="max-w-4xl mx-auto text-center border-b border-gray-200 pb-5 mb-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Vered Ben-Dor</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          AI Integration • Business Automation • Full-Stack Software Development • Climate Contributor
        </p>
        
        {/* Resume-style contact header */}
        <div className="text-md md:text-lg text-gray-700 mb-6">
          North Bay, CA • 707-287-2312 • 
          <a href="mailto:bendor.vered@gmail.com" className="hover:text-blue-600 transition-colors"> bendor.vered@gmail.com</a> • 
          <a href="https://linkedin.com/in/vered-ben-dor" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">linkedin.com/in/vered-ben-dor</a>
        </div>
        
        <p className="text-md md:text-lg max-w-3xl mx-auto text-gray-700">
          I integrate AI into business operations to automate workflows, reduce costs, and accelerate growth. Specializing in seamless implementations that transform manual processes into intelligent, scalable systems—delivering all with scale and impact in mind.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-5" id="about">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">About Me</h2>
        <p className="text-gray-700 mb-5">
          With 20+ years as a senior software engineer at enterprise companies including <strong className="text-blue-600 font-semibold">O'Reilly Media</strong>, <strong className="text-blue-600 font-semibold">eBay</strong>, and <strong className="text-blue-600 font-semibold">AOL</strong>, I bring deep technical expertise to every AI implementation, ensuring robust, scalable solutions that integrate seamlessly with existing business systems.
        </p>
        
        <div className="mt-5">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Services</h3>
          
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            <div className="flex-1 min-w-[280px] max-w-[350px] p-6 bg-white border border-gray-200 border-l-4 border-l-gray-100 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-slate-300 hover:border-l-blue-500 hover:shadow-sm hover:-translate-y-0.5">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Agents</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Transform company data into intelligent, conversational assistants</p>
            </div>
            
            <div className="flex-1 min-w-[280px] max-w-[350px] p-6 bg-white border border-gray-200 border-l-4 border-l-gray-100 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-slate-300 hover:border-l-blue-500 hover:shadow-sm hover:-translate-y-0.5">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Process Integration</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Seamlessly embed AI into existing workflows</p>
            </div>
            
            <div className="flex-1 min-w-[280px] max-w-[350px] p-6 bg-white border border-gray-200 border-l-4 border-l-gray-100 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-slate-300 hover:border-l-blue-500 hover:shadow-sm hover:-translate-y-0.5">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Intelligent Automation Systems</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Turn manual processes into scalable, knowledge-driven solutions</p>
            </div>
            
            <div className="flex-1 min-w-[280px] max-w-[350px] p-6 bg-white border border-gray-200 border-l-4 border-l-gray-100 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-slate-300 hover:border-l-blue-500 hover:shadow-sm hover:-translate-y-0.5">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Conversion Optimization</h4>
              <p className="text-gray-600 text-sm leading-relaxed">AI-driven personalized customer experiences to improve engagement and conversion</p>
            </div>
            
            <div className="flex-1 min-w-[280px] max-w-[350px] p-6 bg-white border border-gray-200 border-l-4 border-l-gray-100 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:border-slate-300 hover:border-l-blue-500 hover:shadow-sm hover:-translate-y-0.5">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Full-Stack Development</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Enterprise-grade web applications and data systems built for scale and reliability</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Recommendations</h3>
          
          <div className="space-y-4">
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 italic mb-3">
                "Working with Vered has been transformational for our operations. Her technical solutions have made my business life significantly easier, and the value she delivers is so substantial. When you find a consultant who consistently delivers this level of impact, you want to keep them involved long-term."
              </p>
              <cite className="text-sm text-gray-600 font-medium">— Glenn, Business Owner</cite>
            </blockquote>
            
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 italic mb-3">
                "We brought Vered in to solve a critical integration challenge that was blocking our operations. Her technical intuition identified the optimal solution architecture, delivering a clean, complete implementation that saved us significant time and resources. When you need someone to tackle complex technical problems and deliver business results, she's the consultant to call."
              </p>
              <cite className="text-sm text-gray-600 font-medium">— Marcel, Senior Technology Lead</cite>
            </blockquote>
            
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-700 italic mb-3">
                "Vered transformed how we approached our data challenges by bringing innovative technical solutions we hadn't considered internally. Her ability to quickly understand our business needs and translate them into effective technical implementations made a real impact on our operations. Smart, results-driven, and delivers solutions that move the business forward."
              </p>
              <cite className="text-sm text-gray-600 font-medium">— Aaron, Director of Business Operations</cite>
            </blockquote>
          </div>
        </div>

      </section>

      <section className="max-w-5xl mx-auto mt-24" id="projects">
        <h2 className="text-2xl font-semibold mb-8 text-center">Sample Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2">
              <SparklesIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">AI-Powered Support Assistant (RAG)</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Built a support assistant using OpenAI + ChromaDB to generate contextual replies from a knowledge base.
              Integrated with Zoho Desk and automated replies with PII masking.
            </p>
            <p className="text-sm text-gray-500">FastAPI · OpenAI · ChromaDB · Docker · Presidio</p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2">
              <ChartBarIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Time-Series Anomaly Detection</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Designed a complete pipeline to collect, transform, and detect anomalies in time-series data using ML models.
              Built a Streamlit UI and automated it with Airflow.
            </p>
            <p className="text-sm text-gray-500">
              Python · Streamlit · Airflow · PostgreSQL · Supabase · Isolation Forest
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2">
              <Cog6ToothIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">AI Recommendation Engine</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Built ingestion and transformation pipelines to power personalized content recommendations using AI-driven insights.
            </p>
            <p className="text-sm text-gray-500">Python · BigQuery · Machine Learning · Cloud Pipelines</p>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">SQL-Based Data Quality Framework</h3>
            </div>
            <p className="text-gray-700 mb-2">
              Architected and implemented a declarative SQL-based audit system to detect data mismatches across pipelines at scale.
            </p>
            <p className="text-sm text-gray-500">SQL · BigQuery · Data Quality · Governance · Automation</p>
          </div>
        </div>
      </section>

    </main>
  );
}