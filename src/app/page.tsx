import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Navigation - Top bar */}
      <nav className="md:hidden flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="font-medium">Home</Link>
        <div className="flex space-x-4">
          {/* <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            Writing
          </Link> */}
          <a href="https://github.com/admsftpge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
            Resume
          </a>
        </div>
      </nav>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:fixed md:left-8 md:top-8 md:flex md:flex-col md:space-y-2">
        <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          Home
        </Link>
        {/* <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          Writing
        </Link> */}
        <a href="https://github.com/admsftpge" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          GitHub
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          Resume
        </a>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-8 py-8 md:ml-64">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-3xl font-medium mb-4">Adam Seifert-Page</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Software engineer in London. Spent a decade making music as a guitarist and
  producer before switching to code.</p>
        </div>

        {/* Skills */}
        {/* <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:shadow-gray-300/50 dark:hover:shadow-gray-700/50 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Languages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">JavaScript, TypeScript, Python, Go</p>
            </div>
            <div className="group p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-800/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Node.js, Express, PostgreSQL, Redis</p>
            </div>
            <div className="group p-5 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700/50 shadow-sm hover:shadow-lg hover:shadow-green-200/40 dark:hover:shadow-green-800/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="group p-5 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/50 shadow-sm hover:shadow-lg hover:shadow-purple-200/40 dark:hover:shadow-purple-800/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Docker, AWS, Git, Linux</p>
            </div>
            <div className="group p-5 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/50 shadow-sm hover:shadow-lg hover:shadow-orange-200/40 dark:hover:shadow-orange-800/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Databases</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="group p-5 rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700/50 shadow-sm hover:shadow-lg hover:shadow-red-200/40 dark:hover:shadow-red-800/40 hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">DevOps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">CI/CD, Kubernetes, Monitoring</p>
            </div>
          </div>
        </section> */}

        {/* Projects */}
        {/* <section id="projects" className="mb-16">
          <h2 className="text-xl font-medium mb-6">projects</h2>
          <div className="space-y-6">
            <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">E-commerce API</h3>
                <div className="flex space-x-3 text-sm">
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">demo</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">github</a>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                A scalable REST API built with Node.js and PostgreSQL, featuring user authentication, 
                product management, and order processing with Redis caching.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700/50 shadow-sm shadow-blue-200/50 dark:shadow-blue-900/50 hover:shadow-md hover:shadow-blue-300/60 dark:hover:shadow-blue-800/60 hover:scale-105 transition-all duration-200">Node.js</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/40 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-700/50 shadow-sm shadow-green-200/50 dark:shadow-green-900/50 hover:shadow-md hover:shadow-green-300/60 dark:hover:shadow-green-800/60 hover:scale-105 transition-all duration-200">PostgreSQL</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 text-red-700 dark:text-red-300 rounded-full border border-red-200 dark:border-red-700/50 shadow-sm shadow-red-200/50 dark:shadow-red-900/50 hover:shadow-md hover:shadow-red-300/60 dark:hover:shadow-red-800/60 hover:scale-105 transition-all duration-200">Redis</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/40 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-700/50 shadow-sm shadow-purple-200/50 dark:shadow-purple-900/50 hover:shadow-md hover:shadow-purple-300/60 dark:hover:shadow-purple-800/60 hover:scale-105 transition-all duration-200">Docker</span>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Task Scheduler</h3>
                <div className="flex space-x-3 text-sm">
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">demo</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">github</a>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                A distributed job queue system built with Go and MongoDB, handling thousands of 
                concurrent tasks with automatic retry logic and monitoring dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700/50 shadow-sm shadow-blue-200/50 dark:shadow-blue-900/50 hover:shadow-md hover:shadow-blue-300/60 dark:hover:shadow-blue-800/60 hover:scale-105 transition-all duration-200">Go</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/40 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-700/50 shadow-sm shadow-green-200/50 dark:shadow-green-900/50 hover:shadow-md hover:shadow-green-300/60 dark:hover:shadow-green-800/60 hover:scale-105 transition-all duration-200">MongoDB</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/40 text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-700/50 shadow-sm shadow-yellow-200/50 dark:shadow-yellow-900/50 hover:shadow-md hover:shadow-yellow-300/60 dark:hover:shadow-yellow-800/60 hover:scale-105 transition-all duration-200">Kubernetes</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/40 text-orange-700 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-700/50 shadow-sm shadow-orange-200/50 dark:shadow-orange-900/50 hover:shadow-md hover:shadow-orange-300/60 dark:hover:shadow-orange-800/60 hover:scale-105 transition-all duration-200">Prometheus</span>
              </div>
            </div>

            <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Analytics Dashboard</h3>
                <div className="flex space-x-3 text-sm">
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">demo</a>
                  <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">github</a>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                Real-time analytics platform with React frontend and Python backend, featuring 
                interactive charts, data visualization, and automated reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700/50 shadow-sm shadow-blue-200/50 dark:shadow-blue-900/50 hover:shadow-md hover:shadow-blue-300/60 dark:hover:shadow-blue-800/60 hover:scale-105 transition-all duration-200">React</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/40 text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-700/50 shadow-sm shadow-yellow-200/50 dark:shadow-yellow-900/50 hover:shadow-md hover:shadow-yellow-300/60 dark:hover:shadow-yellow-800/60 hover:scale-105 transition-all duration-200">Python</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/40 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-700/50 shadow-sm shadow-green-200/50 dark:shadow-green-900/50 hover:shadow-md hover:shadow-green-300/60 dark:hover:shadow-green-800/60 hover:scale-105 transition-all duration-200">FastAPI</span>
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/40 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-700/50 shadow-sm shadow-purple-200/50 dark:shadow-purple-900/50 hover:shadow-md hover:shadow-purple-300/60 dark:hover:shadow-purple-800/60 hover:scale-105 transition-all duration-200">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
