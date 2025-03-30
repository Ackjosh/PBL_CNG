
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
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
    <section id="team" ref={sectionRef} className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 reveal-on-scroll">
            <div className="bg-cng-darkgreen/10 border border-cng-green/20 py-1 px-4 rounded-full inline-block">
              <span className="text-cng-darkgreen font-medium text-sm">Our Team</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cng-black reveal-on-scroll">
            Meet Our Team
          </h2>
          <p className="text-cng-gray text-lg max-w-2xl mx-auto reveal-on-scroll">
            The passionate professionals behind our mission to revolutionize CNG refueling
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((index) => (
            <TeamMember 
              key={index}
              name={`PERSON ${index}`}
              role="Team Member"
              delayIndex={index - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ 
  name, 
  role, 
  delayIndex 
}: { 
  name: string; 
  role: string; 
  delayIndex: number;
}) => {
  const delay = 0.2 + (delayIndex * 0.1);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] reveal-on-scroll" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-48 bg-gradient-to-br from-cng-green to-cng-darkgreen flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-4xl font-light">
          {name.charAt(0)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-cng-black">{name}</h3>
        <p className="text-cng-gray text-sm mb-4">{role}</p>
        
        <div className="flex justify-center space-x-4">
          <SocialLink icon={<Twitter size={18} />} />
          <SocialLink icon={<Linkedin size={18} />} />
          <SocialLink icon={<Github size={18} />} />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-cng-gray transition-all duration-300 hover:bg-cng-green hover:text-white hover:scale-110"
  >
    {icon}
  </a>
);

export default TeamSection;
