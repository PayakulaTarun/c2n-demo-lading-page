import React from 'react';
import { 
  ArrowRight, Shield, CloudLightning, Database, 
  Hexagon, Heart, MonitorPlay, Settings, Users, MessageSquare, 
  Twitter, Linkedin, Github, Activity, Search, Code, Smartphone
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      
      {/* Background Ambience */}
      <div className="mesh-bg"></div>
      
      {/* Premium Floating Nav */}
      <nav className="premium-nav">
        <div className="glass-panel">
          <a href="/" className="nav-logo">
            <Hexagon size={28} color="#3B82F6" />
            <span style={{letterSpacing: '1px'}}>C2N</span>
          </a>
          <div className="nav-links">
            <a href="#company">Company</a>
            <a href="#services">IT Services</a>
            <a href="#industries">Industries</a>
            <a href="#resources">Resources</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="glass-btn" style={{fontSize: '13px', padding: '10px 20px'}}>
            Request Consultation <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* Hero Epic */}
      <main className="hero-premium">
        <div className="mesh-glow" style={{top: '20%', left: '30%'}}></div>
        <div className="container hero-content">
          <div className="pill-badge" style={{marginBottom: '32px'}}>Your Trusted IT Partner</div>
          <h1>focus <br/><span className="text-gradient">business</span></h1>
          <p>Stop worrying about technology problems. Let us provide the support and solutions you deserve to scale effectively.</p>
          <div className="hero-ctas">
            <button className="primary-btn">
              Discover what sets us apart <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>

      {/* Bento Box About */}
      <section id="company" className="section">
        <div className="container">
          <div className="text-center" style={{marginBottom: '80px'}}>
            <div className="pill-badge">Our Company</div>
            <h2 style={{fontSize: '40px'}}>C2N is your trusted source<br/>in IT services and support</h2>
          </div>

          <div className="bento-grid">
            <div className="glass-panel bento-card bento-large">
              <div style={{color: '#3B82F6', marginBottom: '16px'}}><Shield size={32} /></div>
              <h2>Built for Scale, Designed for Security.</h2>
              <p>C2N is a privately owned IT Support and IT Services business formed in 2016. Today we're proud to boast a strong team of IT engineers who thrive on rolling up their sleeves, solving your complex IT problems, and meeting your precise business needs head-on.</p>
              <div className="bento-img-area"></div>
            </div>
            
            <div className="glass-panel bento-card">
              <h3 className="text-gradient">How we can help</h3>
              <p>Architecting custom, industry-compliant solutions tailored for your growth trajectory.</p>
            </div>
            
            <div className="glass-panel bento-card">
              <h3 className="text-gradient">Why partner with us</h3>
              <p>Vertical expertise that streamlines your workflow and aggressively increases net productivity.</p>
            </div>
            
            <div className="glass-panel bento-card">
              <h3 className="text-gradient">Client success stories</h3>
              <p>Find a solution that's proven to work. Explore how we transformed our clients' operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Premium Layout */}
      <section id="services" className="section services-premium">
        <div className="container">
          <div className="text-center">
            <div className="pill-badge">Core Services</div>
            <h2 style={{fontSize: '48px'}}>Stay Up, Stay Running,<br/>Stay <span className="text-gradient">Protected</span></h2>
          </div>

          <div className="grid-3">
            <div className="glass-panel service-premium-card">
              <div className="sp-icon"><Users size={32} /></div>
              <h3>IT Staffing</h3>
              <p>Close the gap between extreme market demands and new technological trends by augmenting your workforce with top-tier talent.</p>
              <a href="#" className="sp-link">Learn More <ArrowRight size={16} /></a>
            </div>
            <div className="glass-panel service-premium-card">
              <div className="sp-icon"><Database size={32} /></div>
              <h3>Data & Analytics</h3>
              <p>Imagine, design, and streamline your data environment. Complete data-driven analytics to easily discover business opportunities.</p>
              <a href="#" className="sp-link">Learn More <ArrowRight size={16} /></a>
            </div>
            <div className="glass-panel service-premium-card">
              <div className="sp-icon"><CloudLightning size={32} /></div>
              <h3>Salesforce Development</h3>
              <p>Our experts provide end-to-end salesforce development services and customize solutions as per your precise business needs.</p>
              <a href="#" className="sp-link">Learn More <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <div className="brands-marquee">
        <div className="marquee-content">
          <Hexagon size={48} /> <Activity size={48} /> <Code size={48} /> <Search size={48} />
          <CloudLightning size={48} /> <Smartphone size={48} /> <Shield size={48} /> 
          <Hexagon size={48} /> <Activity size={48} /> <Code size={48} /> <Search size={48} />
          <CloudLightning size={48} /> <Smartphone size={48} /> <Shield size={48} />
        </div>
      </div>

      {/* Industries Layout */}
      <section id="industries" className="section">
        <div className="container text-center">
          <div className="pill-badge">Industries</div>
          <h2 style={{fontSize: '40px', marginBottom: '24px'}}>Managed IT services customized<br/>for your industry</h2>
          <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>Our vertical solutions expertise allows your business to streamline workflow, and increase productivity.</p>

          <div className="ind-premium-grid">
            <div className="glass-panel ind-pill"><Heart size={20} color="#3B82F6" /> Healthcare</div>
            <div className="glass-panel ind-pill"><MonitorPlay size={20} color="#3B82F6" /> Media</div>
            <div className="glass-panel ind-pill"><Settings size={20} color="#3B82F6" /> Manufacturing</div>
            <div className="glass-panel ind-pill"><Users size={20} color="#3B82F6" /> Non Profit</div>
            <div className="glass-panel ind-pill"><MessageSquare size={20} color="#3B82F6" /> Communications</div>
          </div>
        </div>
      </section>

      {/* Dynamic Blog Section */}
      <section id="resources" className="section">
        <div className="container">
          <div className="text-center">
            <div className="pill-badge">Resources</div>
            <h2 style={{fontSize: '40px'}}>More articles from library</h2>
          </div>

          <div className="blog-dynamic">
            <div className="glass-panel blog-main-card">
              <div className="bm-img"></div>
              <div className="bm-body">
                <div style={{color: '#3B82F6', fontSize: '13px', fontWeight: 600, marginBottom: '8px', letterSpacing: '1px'}}>MAY 8, 2018</div>
                <h3>5 Lightning Navigation Tips for Salesforce Users</h3>
                <p style={{color: 'var(--text-secondary)', marginBottom: '24px'}}>Salesforce Lightning has truly brought a lot of power into the hands of both Admins & Users. Meaning that the UI has fundamentally accelerated daily tasks.</p>
                <button className="glass-btn" style={{border: 'none', background: 'rgba(59,130,246,0.1)', color: '#3B82F6'}}>Read full article <ArrowRight size={16}/></button>
              </div>
            </div>

            <div className="blog-list-vert">
              <div className="glass-panel bl-item">
                <div>
                  <div className="bl-date">MAY 8, 2018</div>
                  <h4>What Does a Salesforce Admin Do?</h4>
                  <a href="#" style={{color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: '500'}}>Read more <ArrowRight size={14}/></a>
                </div>
              </div>
              <div className="glass-panel bl-item">
                <div>
                  <div className="bl-date">MAY 8, 2018</div>
                  <h4>Tips to make Lightning Web Component Performance at front line</h4>
                  <a href="#" style={{color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: '500'}}>Read more <ArrowRight size={14}/></a>
                </div>
              </div>
              <div className="glass-panel bl-item">
                <div>
                  <div className="bl-date">MAY 8, 2018</div>
                  <h4>Scan & index manager delivers productivity at beaumont hospital</h4>
                  <a href="#" style={{color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: '500'}}>Read more <ArrowRight size={14}/></a>
                </div>
              </div>
              <div className="glass-panel bl-item">
                <div>
                  <div className="bl-date">MAY 8, 2018</div>
                  <h4>Partnering with IT provider helps erie manufacturing company thrive</h4>
                  <a href="#" style={{color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px', fontWeight: '500'}}>Read more <ArrowRight size={14}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Parallax Typography */}
      <section className="epic-values">
        <div className="epic-overlay"></div>
        <div className="epic-content container">
          <p>OUR VALUES</p>
          <h2>REPUTATION</h2>
          <p>A LONG HISTORY OF PROVIDING SUCCESS WITHIN THE INDUSTRY</p>
        </div>
      </section>

      {/* Footer & CTA */}
      <footer className="premium-footer">
        
        <div className="footer-cta container">
          <div className="footer-cta-box">
            <h2>Are you ready for a better,<br/>more productive business?</h2>
            <p>Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.</p>
            <button className="btn-dark">
              Contact Us Now <ArrowRight size={18} style={{marginLeft: '8px', display: 'inline-block', verticalAlign: 'middle'}}/>
            </button>
          </div>
        </div>

        <div className="container f-grid">
          <div>
            <div className="f-logo">
              <Hexagon size={32} color="#3B82F6" /> C2N
            </div>
            <div className="f-contact">
              Plot: 810, SVS Sowdha, 2nd Floor, Ayyappa Society,<br/>
              Madhapur, Hyderabad – 500081<br/><br/>
              P: 040 4006 2299<br/>
              M: info@c2n.in
            </div>
            <div className="f-social">
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Github size={18} /></a>
            </div>
          </div>

          <div className="f-col">
            <h4 className="text-gradient">IT Services</h4>
            <ul>
              <li><a href="#">Salesforce Dev</a></li>
              <li><a href="#">Mobile App Dev</a></li>
              <li><a href="#">Testing & QA</a></li>
              <li><a href="#">Data & Analytics</a></li>
              <li><a href="#">IT Staffing</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h4 className="text-gradient">Industries</h4>
            <ul>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Non Profit</a></li>
              <li><a href="#">Financial Services</a></li>
              <li><a href="#">Communications</a></li>
              <li><a href="#">Manufacturing</a></li>
            </ul>
          </div>

          <div className="f-col">
            <h4 className="text-gradient">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Leadership Team</a></li>
              <li><a href="#">IT Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="f-bottom">
          &copy; {new Date().getFullYear()} C2N Technology Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
