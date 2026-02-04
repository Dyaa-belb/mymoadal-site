interface PhoneMockupsProps {
  darkMode: boolean;
}

export default function PhoneMockups({ darkMode }: PhoneMockupsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center h-[600px] sm:h-[700px]">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 sm:-translate-y-0 rotate-[-8deg] scale-90 sm:scale-100 z-10">
            <div className={`relative w-[280px] sm:w-[320px] rounded-[3rem] shadow-2xl overflow-hidden border-8 ${
              darkMode ? 'border-gray-800' : 'border-gray-900'
            }`}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
              <img
                src="/screenshot1.png"
                alt="MyMoadal App Screenshot 1"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="absolute left-1/2 transform translate-x-12 sm:translate-x-20 translate-y-12 rotate-[8deg] scale-85 sm:scale-95 z-20">
            <div className={`relative w-[280px] sm:w-[320px] rounded-[3rem] shadow-2xl overflow-hidden border-8 ${
              darkMode ? 'border-gray-800' : 'border-gray-900'
            }`}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
              <img
                src="/screenshot2.png"
                alt="MyMoadal App Screenshot 2"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-[230px] sm:-translate-x-[280px] translate-y-8 rotate-[-12deg] scale-85 sm:scale-90 z-0">
            <div className={`relative w-[280px] sm:w-[320px] rounded-[3rem] shadow-2xl overflow-hidden border-8 ${
              darkMode ? 'border-gray-800' : 'border-gray-900'
            }`}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
              <img
                src="/screenshot1.png"
                alt="MyMoadal App Screenshot 3"
                className="w-full h-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
