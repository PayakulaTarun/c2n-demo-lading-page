import React, { useState, useEffect } from 'react';
import { 
  Server, Shield, Cloud, Code, Database, TrendingUp, 
  CheckCircle, Clock, Lock, Zap, ArrowRight,
  MessageSquare, ChevronRight, Menu, MapPin, Phone, Mail,
  Twitter, Linkedin, Github, Hexagon, Quote
} from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo">
            <Hexagon className="nav-logo-icon" size={32} />
            C2N
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">Why Us</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
          </div>
          <div className="nav-actions">
            <button className="btn btn-secondary">Login</button>
            <button className="btn btn-primary">Book Demo</button>
            <Menu className="mobile-menu-btn" style={{display: 'none'}} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape-1"></div>
          <div className="hero-shape-2"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Trusted Source in <span className="text-gradient">IT Services & Support</span>
            </h1>
            <p className="hero-desc">
              C2N is a privately owned IT business formed in 2016. We boast a strong team of IT engineers who thrive on rolling up their sleeves, solving your IT problems, and meeting your business needs.
            </p>
            <div className="hero-cta">
              <button className="btn btn-glow">
                Book a Free Consultation
                <ArrowRight size={20} style={{marginLeft: '8px'}} />
              </button>
              <button className="btn btn-secondary">
                View Services
              </button>
            </div>
            
            <div className="trust-badges animate-fade-up delay-200">
              <p>Trusted by 100+ innovative businesses</p>
              <div className="trust-logos">
                <Shield size={32} />
                <Server size={32} />
                <Cloud size={32} />
                <Database size={32} />
                <Lock size={32} />
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="glass-dashboard">
              <div className="dash-header">
                <div className="dash-dots">
                  <div className="dash-dot"></div>
                  <div className="dash-dot"></div>
                  <div className="dash-dot"></div>
                </div>
                <div style={{fontSize: '12px', fontWeight: 600, color: '#3B82F6'}}>Live Metrics</div>
              </div>
              
              <div className="dash-stats">
                <div className="dash-stat-card">
                  <div style={{color: '#64748B', fontSize: '13px'}}>System Uptime</div>
                  <div style={{fontSize: '24px', fontWeight: 800, color: '#0A2540'}}>99.99%</div>
                  <div style={{color: '#10B981', fontSize: '12px', marginTop: '4px'}}>+0.05% vs last month</div>
                </div>
                <div className="dash-stat-card">
                  <div style={{color: '#64748B', fontSize: '13px'}}>Active Nodes</div>
                  <div style={{fontSize: '24px', fontWeight: 800, color: '#0A2540'}}>1,024</div>
                  <div style={{color: '#10B981', fontSize: '12px', marginTop: '4px'}}>+12 new today</div>
                </div>
              </div>
              
              <div className="dash-chart">
                 <div className="chart-bar" style={{height: '30%'}}></div>
                 <div className="chart-bar" style={{height: '50%'}}></div>
                 <div className="chart-bar" style={{height: '40%'}}></div>
                 <div className="chart-bar" style={{height: '70%'}}></div>
                 <div className="chart-bar" style={{height: '60%'}}></div>
                 <div className="chart-bar" style={{height: '90%'}}></div>
                 <div className="chart-bar" style={{height: '100%', background: '#8B5CF6'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">Comprehensive technology solutions designed to scale your operations securely.</p>
          </div>
          
          <div className="services-grid">
            {[
              { icon: <Code size={32} />, title: 'Mobile App Development', desc: 'Building high-performance, engaging mobile experiences for your users.' },
              { icon: <TrendingUp size={32} />, title: 'Digital Marketing', desc: 'Data-driven strategies to elevate your brand and drive targeted growth.' },
              { icon: <CheckCircle size={32} />, title: 'Testing & QA', desc: 'Ensuring zero-defect delivery and maintaining high quality standards.' },
              { icon: <Server size={32} />, title: 'IT Staffing', desc: 'Bridging the talent gap with evolving technological advancements and trends.' },
              { icon: <Database size={32} />, title: 'Data & Analytics', desc: 'Streamline your data environment to discover future business opportunities.' },
              { icon: <Cloud size={32} />, title: 'Salesforce Development', desc: 'End-to-end salesforce development services customized for your needs.' }
            ].map((srv, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon-wrapper">
                  {srv.icon}
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="section why-us">
        <div className="container">
          <div className="why-split">
            <div className="why-content">
               <h2 className="section-title" style={{textAlign: 'left', marginBottom: '16px'}}>Why Partner With <span className="text-gradient">C2N</span>?</h2>
               <p className="section-subtitle" style={{textAlign: 'left', margin: '0 0 32px 0'}}>
                 Our vertical solutions expertise allows your business to streamline workflow and increase productivity. C2N has you covered with industry-compliant solutions.
               </p>
               
               <div className="why-list">
                 <div className="why-item">
                   <div className="why-icon"><Clock size={24} /></div>
                   <div>
                     <h4>24/7 Monitoring & Support</h4>
                     <p>Continuous oversight of your systems to prevent issues before they occur.</p>
                   </div>
                 </div>
                 <div className="why-item">
                   <div className="why-icon"><TrendingUp size={24} /></div>
                   <div>
                     <h4>Scalable Solutions</h4>
                     <p>Architecture that grows seamlessly alongside your business expansion.</p>
                   </div>
                 </div>
                 <div className="why-item">
                   <div className="why-icon"><Lock size={24} /></div>
                   <div>
                     <h4>Enterprise-Grade Security</h4>
                     <p>Bank-level encryption and zero-trust security protocols implemented natively.</p>
                   </div>
                 </div>
                 <div className="why-item">
                   <div className="why-icon"><Zap size={24} /></div>
                   <div>
                     <h4>Cost Optimization</h4>
                     <p>Reduce overhead by streamlining tech stacks and leveraging efficient cloud models.</p>
                   </div>
                 </div>
               </div>
            </div>
            <div className="why-visual">
              <div className="why-image-cont">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Server Room / Technology" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section process">
        <div className="container">
           <div className="section-header">
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">A proven methodology to deliver reliable and secure technology frameworks.</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-line"></div>
            
            {[
              { num: '01', title: 'Discover', desc: 'We analyze your current infrastructure and business goals.' },
              { num: '02', title: 'Plan', desc: 'Crafting a strategic roadmap and architecture design.' },
              { num: '03', title: 'Build', desc: 'Agile implementation with zero disruption to daily ops.' },
              { num: '04', title: 'Support', desc: 'Ongoing maintenance, scaling, and 24/7 proactive monitoring.' }
            ].map((step, idx) => (
               <div className="process-step" key={idx}>
                 <div className="step-number">{step.num}</div>
                 <h4>{step.title}</h4>
                 <p>{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="section results">
        <div className="container">
           <div className="section-header">
            <h2 className="section-title">Real Results</h2>
            <p className="section-subtitle">Metrics that matter. See how we've transformed operations for our clients.</p>
          </div>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-metric text-gradient">70%</div>
              <h4>Reduced Downtime</h4>
              <p>Implemented proactive cloud monitoring, significantly reducing system outages for a logistics enterprise.</p>
            </div>
            <div className="result-card">
              <div className="result-metric text-gradient">3x</div>
              <h4>Infrastructure Capacity</h4>
              <p>Scaled cloud architecture flawlessly to support Black Friday traffic surges for an e-commerce giant.</p>
            </div>
            <div className="result-card">
              <div className="result-metric text-gradient">Zero</div>
              <h4>Data Breaches</h4>
              <p>Achieved perfect compliance and security track records for demanding fintech clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
           <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">Don't just take our word for it.</p>
          </div>
          
          <div className="test-grid">
             {[
               { text: "C2N completely overhauled our archaic on-prem servers into a sleek, efficient cloud environment. Our remote team productivity has skyrocketed.", name: "Sarah Jenkins", role: "CTO, TechFlow Inc.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
               { text: "The cybersecurity audit revealed vulnerabilities we didn't even know existed. Their prompt remediation literally saved our business from compliance fines.", name: "David Chen", role: "Director of IT, Apex Financial", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
               { text: "We needed custom software fast. C2N delivered an MVP in record time without compromising on code quality or architecture scalability.", name: "Emily Rodriguez", role: "Founder, NovaHealth", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }
             ].map((test, idx) => (
                <div className="test-card" key={idx}>
                  <Quote className="test-quote-icon" size={40} />
                  <p className="test-text">"{test.text}"</p>
                  <div className="test-author">
                    <img src={test.img} alt={test.name} className="test-avatar" />
                    <div className="test-author-info">
                      <h5>{test.name}</h5>
                      <p>{test.role}</p>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
           <div className="cta-box">
              <div className="cta-content">
                <h2>Are you ready for a better, more productive business?</h2>
                <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '18px'}}>
                  Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-white">
                    Book a Free Call
                    <ArrowRight size={20} style={{marginLeft: '8px'}} />
                  </button>
                  <button className="btn btn-outline-white">
                    Get Custom Quote
                  </button>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo" style={{fontSize: '28px'}}>
                <Hexagon className="nav-logo-icon" size={32} />
                C2N
              </div>
              <p>COMMITMENT. INNOVATION. REPUTATION. EXCELLENCE.</p>
              <div className="social-links">
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Github size={20} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#results">Case Studies</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Salesforce Dev</a></li>
                <li><a href="#">Mobile App Dev</a></li>
                <li><a href="#">Testing & QA</a></li>
                <li><a href="#">Data & Analytics</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul style={{gap: '20px'}}>
                <li style={{display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#64748B'}}>
                  <MapPin size={20} style={{color: '#3B82F6', flexShrink: 0}} />
                  Plot: 810, SVS Sowdha, 2nd Floor, Ayyappa Society, Madhapur, Hyderabad – 500081
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'center', color: '#64748B'}}>
                  <Phone size={20} style={{color: '#3B82F6', flexShrink: 0}} />
                  040 4006 2299
                </li>
                <li style={{display: 'flex', gap: '12px', alignItems: 'center', color: '#64748B'}}>
                  <Mail size={20} style={{color: '#3B82F6', flexShrink: 0}} />
                  info@c2n.in
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} C2N Technology Solutions. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <button className="btn-primary floating-cta">
        <MessageSquare size={24} />
      </button>

    </div>
  );
}

export default App;
