
import React, { useEffect, useRef } from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 reveal-on-scroll">
            <div className="bg-cng-darkgreen/10 border border-cng-green/20 py-1 px-4 rounded-full inline-block">
              <span className="text-cng-darkgreen font-medium text-sm">Operator Support</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cng-black reveal-on-scroll">
            Need <span className="text-cng-green">Assistance?</span>
          </h2>
          <p className="text-cng-gray text-lg max-w-2xl mx-auto reveal-on-scroll">
            Our dedicated support team is available to help you with any questions or technical issues
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <ContactCard 
                icon={<Phone size={24} className="animate-pulse" />}
                title="24/7 Technical Support"
                content="Our technical team is available round-the-clock to assist with any operational issues."
                contact="+91 98765 43210"
                delayIndex={0}
              />
              
              <ContactCard 
                icon={<Mail size={24} />}
                title="Email Support"
                content="Send us your queries, and we'll respond within 2 hours during business hours."
                contact="support@cngoperator.com"
                delayIndex={1}
              />
              
              <ContactCard 
                icon={<MessageSquare size={24} />}
                title="Live Chat"
                content="Get instant answers to your questions through our live chat support."
                contact="Available 8 AM - 8 PM"
                delayIndex={2}
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 reveal-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-cng-black">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cng-gray mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cng-green focus:ring-2 focus:ring-cng-green/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cng-gray mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cng-green focus:ring-2 focus:ring-cng-green/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-cng-gray mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cng-green focus:ring-2 focus:ring-cng-green/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cng-gray mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-cng-green focus:ring-2 focus:ring-cng-green/20 focus:outline-none transition-all duration-300"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-cng-green text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-cng-darkgreen hover:shadow-lg hover:scale-105 flex items-center justify-center group"
                >
                  Send Message <Send className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ 
  icon, 
  title, 
  content, 
  contact,
  delayIndex 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  contact: string;
  delayIndex: number;
}) => {
  const delay = 0.2 + (delayIndex * 0.1);
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] reveal-on-scroll group" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-cng-green/10 rounded-full flex items-center justify-center text-cng-green transition-all duration-300 group-hover:bg-cng-green group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-cng-black group-hover:text-cng-green transition-colors duration-300">{title}</h3>
          <p className="text-cng-gray mb-3">{content}</p>
          <p className="font-medium text-cng-darkgreen">{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
