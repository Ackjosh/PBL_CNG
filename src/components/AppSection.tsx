
import React, { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Users, DollarSign, Cpu } from 'lucide-react';

const AppSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    revealElements?.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="app" ref={sectionRef} className="section relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="space-y-6">
              <div className="inline-block reveal-on-scroll">
                <div className="bg-cng-darkgreen/10 border border-cng-green/20 py-1 px-4 rounded-full inline-block">
                  <span className="text-cng-darkgreen font-medium text-sm">Operational Excellence</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-cng-black leading-tight reveal-on-scroll">
                Designed for <span className="text-cng-green">station operators</span> who demand <span className="text-cng-green">precision</span> and <span className="text-cng-green">reliability</span>
              </h2>
              
              <p className="text-cng-gray text-lg max-w-xl reveal-on-scroll">
                Our platform provides comprehensive tools to streamline operations, enhance customer service, and maximize your station's efficiency and profitability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <FeatureItem 
                  icon={<FileText />}
                  title="Automated Reporting"
                  delay={0.2}
                />
                
                <FeatureItem 
                  icon={<Users />}
                  title="Staff Management"
                  delay={0.3}
                />
                
                <FeatureItem 
                  icon={<DollarSign />}
                  title="Financial Dashboard"
                  delay={0.4}
                />
                
                <FeatureItem 
                  icon={<Cpu />}
                  title="Equipment Monitoring"
                  delay={0.5}
                />
              </div>
              
              <div className="pt-6 reveal-on-scroll" style={{ animationDelay: '0.6s' }}>
                <a 
                  href="#contact" 
                  className="bg-cng-green text-white px-6 py-3 rounded-full font-medium inline-flex items-center transition-all duration-300 hover:bg-cng-darkgreen hover:shadow-lg hover:scale-105 group"
                >
                  Explore Features <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end reveal-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cng-green/20 to-cng-lightgreen/30 rounded-full blur-3xl transform scale-125 animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-100 p-8 rounded-3xl shadow-2xl border border-white/50 max-w-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]">
                <h3 className="text-2xl font-bold mb-6 text-center text-cng-black">OUR COMMITMENT</h3>
                
                <p className="text-cng-gray mb-6 leading-relaxed">
                  We understand the unique challenges faced by CNG station operators. Our platform is built to address these challenges with robust, reliable solutions.
                </p>
                
                <p className="text-cng-gray mb-6 leading-relaxed">
                  From inventory management to customer service optimization, our tools are designed to enhance every aspect of your station operations.
                </p>
                
                <div className="bg-cng-green/10 p-4 rounded-xl border border-cng-green/20 transition-all duration-300 hover:bg-cng-green/20">
                  <p className="text-cng-black font-medium text-center">
                    Partner with us to transform your station into a model of operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background decorative elements with animations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-cng-green/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cng-green/5 rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  );
};

const FeatureItem = ({ 
  icon, 
  title, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  delay: number;
}) => {
  return (
    <div className="flex items-center gap-3 reveal-on-scroll group" style={{ animationDelay: `${delay}s` }}>
      <div className="flex-shrink-0 w-10 h-10 bg-cng-green/10 rounded-full flex items-center justify-center text-cng-green transition-all duration-300 group-hover:bg-cng-green group-hover:text-white">
        {icon}
      </div>
      <span className="font-medium text-cng-black group-hover:text-cng-green transition-colors duration-300">{title}</span>
    </div>
  );
};

export default AppSection;
