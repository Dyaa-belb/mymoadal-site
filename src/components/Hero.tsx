import { Download, GraduationCap } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
          <GraduationCap size={18} className="text-blue-600" />
          <span className={`text-sm font-medium ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            For University Students
          </span>
        </div>

        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Calculate Your Average
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            The Smart Way
          </span>
        </h1>

        <p className={`text-xl sm:text-2xl mb-10 max-w-3xl mx-auto ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Track your grades, calculate your GPA, and stay on top of your academic performance with MyMoadal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#download"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
          >
            <Download size={22} />
            <span>Download for Android</span>
          </a>

          <a
            href="https://github.com"
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              darkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
