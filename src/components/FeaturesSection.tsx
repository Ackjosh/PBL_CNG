
import React, { useEffect, useRef } from 'react';
import { BarChart3, Clock, Gauge, AlertTriangle, UserCheck, RefreshCw } from 'lucide-react';

const FeaturesSection = () => {
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
    <section id="features" ref={sectionRef} className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 reveal-on-scroll">
            <div className="bg-cng-darkgreen/10 border border-cng-green/20 py-1 px-4 rounded-full inline-block">
              <span className="text-cng-darkgreen font-medium text-sm">Station Management</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cng-black reveal-on-scroll">
            Powerful <span className="text-cng-green">Operator Tools</span>
          </h2>
          <p className="text-cng-gray text-lg max-w-2xl mx-auto reveal-on-scroll">
            Comprehensive tools designed specifically for CNG station operators to enhance efficiency and service quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <FeatureCard 
                icon={<RefreshCw size={24} className="animate-spin-slow" />}
                title="Real-time Monitoring"
                description="Track fuel levels, dispensers, and compressor status in real-time. Receive instant notifications for any critical events."
                delayIndex={0}
              />
              
              <FeatureCard 
                icon={<Clock size={24} />}
                title="Operational Hours Management"
                description="Set and update your station's operational hours. Automatically notify customers about availability changes."
                delayIndex={1}
              />
              
              <FeatureCard 
                icon={<BarChart3 size={24} />}
                title="Advanced Analytics Dashboard"
                description="Visualize sales data, customer trends, and operational efficiency metrics to make informed business decisions."
                delayIndex={2}
              />
              
              <FeatureCard 
                icon={<AlertTriangle size={24} className="animate-pulse" />}
                title="Proactive Maintenance Alerts"
                description="Get ahead of potential issues with predictive maintenance alerts and scheduled service reminders."
                delayIndex={3}
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center reveal-on-scroll">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:translate-y-[-10px] group">
                <div className="bg-gradient-to-b from-cng-green to-cng-darkgreen p-4">
                  <h3 className="text-white text-xl font-bold">Station Performance</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-cng-black font-medium">Fuel Level</span>
                      <div className="w-2/3 bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div className="bg-cng-green h-full rounded-full transition-all duration-1000 group-hover:w-[85%]" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cng-black font-medium">Compressor Status</span>
                      <span className="text-cng-green font-medium flex items-center">
                        <span className="w-3 h-3 bg-cng-green rounded-full mr-2 animate-pulse"></span>
                        Operational
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cng-black font-medium">Today's Sales</span>
                      <span className="text-cng-black font-medium">₹45,230</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cng-black font-medium">Customers Served</span>
                      <span className="text-cng-black font-medium">128</span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between text-sm text-cng-gray">
                        <span>Last updated: </span>
                        <span>Just now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements with enhanced animations */}
              <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-cng-green/20 rounded-full animate-float"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-cng-green/20 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delayIndex 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delayIndex: number;
}) => {
  const delay = 0.2 + (delayIndex * 0.1);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] reveal-on-scroll group" style={{ animationDelay: `${delay}s` }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-cng-green/10 rounded-full flex items-center justify-center text-cng-green transition-all duration-300 group-hover:bg-cng-green group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-cng-black group-hover:text-cng-green transition-colors duration-300">{title}</h3>
          <p className="text-cng-gray">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
