import { Calculator, Save, WifiOff, Sparkles } from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

export default function Features({ darkMode }: FeaturesProps) {
  const features = [
    {
      icon: Calculator,
      title: 'Quick Calculations',
      description: 'Instantly calculate your semester average, cumulative GPA, and predict final grades with intuitive tools.'
    },
    {
      icon: Save,
      title: 'Custom Presets',
      description: 'Save and manage multiple calculation presets for different courses, semesters, or grading systems.'
    },
    {
      icon: WifiOff,
      title: 'Offline Access',
      description: 'Work without internet connection. All your data is stored locally and synced automatically.'
    },
    {
      icon: Sparkles,
      title: 'Student-Friendly UI',
      description: 'Clean, modern interface designed specifically for students with focus on ease of use and efficiency.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Everything You Need
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Powerful features designed for university students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all hover:scale-105 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                    : 'bg-white border-gray-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className={`text-2xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
