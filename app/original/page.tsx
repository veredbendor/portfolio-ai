import { SparklesIcon, ChartBarIcon, Cog6ToothIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vered Ben-Dor</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Software Engineer · Data & AI Systems · Climate Contributor
        </p>
        <p className="text-md md:text-lg max-w-2xl mx-auto">
          I build systems that power smarter, more ethical decisions — combining 20+ years of software engineering with a
          focus on data quality, automation, and AI. Recently, I've designed pipelines for anomaly detection,
          AI-enhanced customer support, and recommendation engines — all with scale and impact in mind.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-20" id="about">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I'm a backend engineer at heart — designing data pipelines and integrating AI systems that support real-time insights,
          automated workflows, and better decisions. From building a SQL-based data quality framework to launching full-stack
          anomaly detection systems, I specialize in making complex data more usable, scalable, and trustworthy.
        </p>
        <p className="text-gray-700">
          Now, I’m focusing my skills in the climate space — helping mission-driven teams build resilient, transparent data systems.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mt-24" id="projects">
        <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
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

