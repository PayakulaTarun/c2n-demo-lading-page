import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Network, Code2, LineChart, TestTube, Users, Database, CloudFog,
  HeartPulse, ShoppingCart, Film, Factory, Landmark, UsersRound,
  ArrowRight, ShieldCheck, Cpu, HeadphonesIcon, Settings,
  MapPin, Phone, Mail, Twitter, Linkedin, Github, Sun, Moon
} from 'lucide-react';
import './App.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      <div className="grid-bg"></div>
      <div className="glow-orb glow-blue"></div>
      <div className="glow-orb glow-purple"></div>

      {/* NAVBAR */}
      <nav className="premium-nav">
        <div className="nav-glass">
          <a href="#" className="nav-logo">
            <Network size={28} color="#3b82f6" />
            <span style={{letterSpacing: '1px'}}>C2N</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)', cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={18} color="var(--c-primary)" /> : <Moon size={18} color="var(--c-primary)" />}
            </button>
            <button className="btn-primary" style={{padding: '8px 20px', fontSize: '14px'}}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Floating background elements */}
        <div className="floating-element" style={{top: '20%', left: '15%', animationDelay: '0s'}}>
          <Database size={32} color="var(--c-accent)" />
        </div>
        <div className="floating-element" style={{top: '60%', right: '15%', animationDelay: '2s'}}>
          <Cpu size={32} color="var(--c-neon)" />
        </div>
        <div className="floating-element" style={{top: '70%', left: '25%', animationDelay: '4s'}}>
          <CloudFog size={32} color="var(--c-primary)" />
        </div>

        <motion.div 
          className="hero-content"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="pill-badge" style={{marginBottom: '32px'}}>
            Premium Technology Partner
          </motion.div>
          <motion.h1 variants={fadeIn} className="hero-title">
            Every Device.<br/>
            <span className="text-gradient">Managed IT Solutions.</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            Make IT stress-free with a trusted technology partner dedicated to scaling your business effortlessly.
          </motion.p>
          <motion.div variants={fadeIn} className="hero-ctas">
            <button className="btn-primary">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="btn-outline">
              Explore Services
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <div className="bg-surface">
        <section id="services" className="section services-section container">
          <motion.div 
            className="section-header"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="pill-badge">Expertise</div>
          <h2 className="section-title">Our Cutting-Edge <span className="text-gradient-accent">Services</span></h2>
          <p className="section-subtitle">We deploy sophisticated IT models and frameworks to drive unprecedented growth for your enterprise.</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {[
            { icon: <Code2 size={24} />, title: 'Mobile App Development', desc: 'Custom iOS and Android solutions engineered for extreme performance and user engagement.' },
            { icon: <LineChart size={24} />, title: 'Digital Marketing', desc: 'Data-driven campaigns to skyrocket your brand visibility and precise target audience acquisition.' },
            { icon: <TestTube size={24} />, title: 'Testing & QA', desc: 'Rigorous automated and manual testing to guarantee flawless software delivery and zero downtime.' },
            { icon: <Users size={24} />, title: 'IT Staffing', desc: 'Augment your teams with elite industry professionals equipped with the latest technological prowess.' },
            { icon: <Database size={24} />, title: 'Data & Analytics', desc: 'Unlock powerful insights through advanced data engineering and predictive analytics models.' },
            { icon: <CloudFog size={24} />, title: 'Salesforce Development', desc: 'Tailored CRM architecture to automate workflows and aggressively optimize your sales pipeline.' }
          ].map((srv, idx) => (
            <motion.div key={idx} variants={fadeIn} className="glass-panel service-card">
              <div className="service-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href="#" className="service-link">Learn More <ArrowRight size={16} /></a>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="section container">
        <div className="about-grid">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="pill-badge">About Us</motion.div>
            <motion.h2 variants={fadeIn} className="about-highlight">
              C2N is a trusted IT services company delivering business value with <span className="text-gradient">cutting-edge technology</span>.
            </motion.h2>
            <motion.p variants={fadeIn} style={{color: 'var(--c-text-muted)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.7'}}>
              We bridge the gap between complex technological challenges and streamlined business operations. At C2N, we believe technology should be an enabler, not a bottleneck. For years we've partnered with startups to tech-enterprises across the globe, transforming legacy architecture into scalable, secure powerhouses. Our core focus is the relentless delivery of long-term business value through precise strategy and execution.
            </motion.p>
            
            <motion.div variants={fadeIn} className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">250+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stats-divider"></div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Clients</div>
              </div>
              <div className="stats-divider"></div>
              <div className="stat-card">
                <div className="stat-number">75+</div>
                <div className="stat-label">Engineers</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Tech Environment" />
            <div className="floating-element" style={{bottom: '30px', left: '30px', animation: 'float 5s ease-in-out infinite reverse'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--c-text-main)', fontWeight: 'bold'}}>
                <ShieldCheck size={24} color="var(--c-neon)" /> Secure Infrastructure
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <div className="bg-surface">
        <section id="industries" className="section container">
          <motion.div 
            className="section-header"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="pill-badge">Sectors</div>
          <h2 className="section-title">Industries We <span className="text-gradient">Transform</span></h2>
        </motion.div>

        <motion.div 
          className="industries-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {[
            { icon: <HeartPulse size={30} />, name: 'Healthcare' },
            { icon: <ShoppingCart size={30} />, name: 'Retail' },
            { icon: <Film size={30} />, name: 'Media' },
            { icon: <Factory size={30} />, name: 'Manufacturing' },
            { icon: <Landmark size={30} />, name: 'Finance' },
            { icon: <UsersRound size={30} />, name: 'Non-Profit' },
          ].map((ind, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn} 
              className="industry-card"
              whileHover={{ scale: 1.05, y: -10, boxShadow: '0 0 25px rgba(59, 130, 246, 0.4)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="industry-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {ind.icon}
              </motion.div>
              <h4 style={{fontSize: '1.2rem'}}>{ind.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </div>

      {/* WHY CHOOSE US */}
      <section className="section container">
        <motion.div 
          className="section-header"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div className="pill-badge">Why Us</div>
          <h2 className="section-title">The C2N <span className="text-gradient-accent">Advantage</span></h2>
        </motion.div>

        <motion.div 
          className="features-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {[
            { icon: <Network size={28} />, title: 'Scalable Solutions', desc: 'Architectures designed to effortlessly grow alongside your ambitious business objectives.' },
            { icon: <Cpu size={28} />, title: 'Expert Engineers', desc: 'A dedicated team of top-tier talent providing innovative perspectives to complex issues.' },
            { icon: <HeadphonesIcon size={28} />, title: '24/7 Support', desc: 'Always-on monitoring and immediate remediation to prevent operational bottlenecks.' },
            { icon: <Settings size={28} />, title: 'Industry Customization', desc: 'Bespoke frameworks molded specifically to the regulatory and functional demands of your sector.' },
          ].map((feat, i) => (
            <motion.div key={i} variants={fadeIn} className="glass-panel feature-block">
              <div className="feature-icon">{feat.icon}</div>
              <div>
                <h3 style={{fontSize: '1.4rem', marginBottom: '8px'}}>{feat.title}</h3>
                <p style={{color: 'var(--c-text-muted)'}}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className="clients-section">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="client-logo-wrapper"><Network size={28} /> APEX CORP</div>
                <div className="client-logo-wrapper"><CloudFog size={28} /> CLOUD SYNC</div>
                <div className="client-logo-wrapper"><Database size={28} /> DATA FLOW</div>
                <div className="client-logo-wrapper"><ShieldCheck size={28} /> SECURE IT</div>
                <div className="client-logo-wrapper"><Cpu size={28} /> NEURAL NET</div>
                <div className="client-logo-wrapper"><Code2 size={28} /> LOGIC LABS</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section container" style={{paddingTop: '60px', paddingBottom: '60px'}}>
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-bg"></div>
          <div className="cta-content">
            <h2 className="cta-title">
              Stop worrying about technology.<br/>
              <span className="text-gradient">Focus on your business.</span>
            </h2>
            <button className="btn-primary" style={{margin: '0 auto', fontSize: '1.1rem', padding: '16px 32px'}}>
              Let’s Get Started <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-brand">
              <a href="#" className="nav-logo">
                <Network size={28} color="#3b82f6" />
                <span style={{letterSpacing: '1px'}}>C2N</span>
              </a>
              <p>Delivering premium IT solutions, digital transformation, and business value through cutting-edge architecture design.</p>
              <div className="footer-socials">
                <a href="#"><Twitter size={18} /></a>
                <a href="#"><Linkedin size={18} /></a>
                <a href="#"><Github size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#">Mobile App Dev</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Testing & QA</a></li>
                <li><a href="#">IT Staffing</a></li>
                <li><a href="#">Salesforce</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Industries</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <li style={{display: 'flex', gap: '12px', color: 'var(--c-text-muted)', alignItems: 'flex-start'}}>
                  <MapPin size={20} color="#3b82f6" style={{flexShrink: 0}} />
                  <span>Suite 810, Tech Hub,<br/>Innovation District</span>
                </li>
                <li style={{display: 'flex', gap: '12px', color: 'var(--c-text-muted)', alignItems: 'center'}}>
                  <Phone size={20} color="#3b82f6" style={{flexShrink: 0}} />
                  <span>+1 (800) 555-0199</span>
                </li>
                <li style={{display: 'flex', gap: '12px', color: 'var(--c-text-muted)', alignItems: 'center'}}>
                  <Mail size={20} color="#3b82f6" style={{flexShrink: 0}} />
                  <span>hello@c2n.com</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} C2N Technology Solutions. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
