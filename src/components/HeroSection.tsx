
import React from 'react';
import { Activity, ArrowRight, BarChart, Gauge, Settings } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-block animate-fade-in opacity-0 [animation-delay:0.2s]">
              <div className="bg-cng-darkgreen/10 border border-cng-green/20 py-1 px-4 rounded-full inline-block">
                <span className="text-cng-darkgreen font-medium text-sm">CNG Station Management Portal</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cng-black leading-tight animate-fade-in opacity-0 [animation-delay:0.4s]">
              Manage Your
              <span className="text-cng-green block mt-2">CNG Station Operations<br />With Precision</span>
            </h1>
            
            <p className="text-cng-gray text-lg md:text-xl max-w-xl animate-fade-in opacity-0 [animation-delay:0.6s]">
              Monitor your CNG station in real-time, manage fuel availability, and optimize operations from a single dashboard. Take control of your station's efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in opacity-0 [animation-delay:0.8s]">
              <a href="#features" className="bg-cng-green text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-cng-darkgreen hover:shadow-lg hover:scale-105 flex items-center justify-center group">
                Station Dashboard <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </a>
              <a href="#team" className="border border-cng-green/30 bg-cng-green/5 text-cng-darkgreen px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-cng-green/10 hover:border-cng-green flex items-center justify-center">
                View Operations
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto md:ml-auto max-w-sm md:max-w-md">
            <div className="relative bg-white p-6 rounded-2xl shadow-xl animate-fade-in opacity-0 [animation-delay:1s] transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px]">
              <h2 className="text-2xl font-bold mb-6 text-center text-cng-black">Real-time <span className="text-cng-green">Dashboard</span></h2>
              
              <div className="space-y-5">
                <div className="bg-gradient-to-b from-cng-green/20 to-cng-lightgreen/10 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cng-green/20 flex items-center justify-center mr-3">
                      <Gauge className="text-cng-darkgreen" />
                    </div>
                    <p className="text-cng-black">
                      <span className="font-semibold">Track fuel levels</span> and manage inventory in real-time.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-cng-green/20 to-cng-lightgreen/10 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cng-green/20 flex items-center justify-center mr-3">
                      <Activity className="text-cng-darkgreen" />
                    </div>
                    <p className="text-cng-black">
                      <span className="font-semibold">Monitor station activity</span> and customer flow throughout the day.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-cng-green/20 to-cng-lightgreen/10 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cng-green/20 flex items-center justify-center mr-3">
                      <BarChart className="text-cng-darkgreen" />
                    </div>
                    <p className="text-cng-black">
                      <span className="font-semibold">Generate detailed reports</span> on station performance and sales.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-center text-cng-black leading-relaxed">
                  Our platform helps you optimize operations, minimize downtime, and maximize profitability.
                </p>
              </div>
            </div>
            
            {/* Decorative elements with enhanced animations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cng-green/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cng-green/10 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background gradients with animations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-cng-green/10 to-transparent rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/4 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-cng-green/10 to-transparent rounded-full blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>
    </section>
  );
};

export default HeroSection;
