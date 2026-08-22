import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import './index.css';
import { Zap, Target, Globe, Sparkles, Award, Phone, Mail, MapPin, CheckCircle, Star, Send, X, ChevronRight, BarChart3, TrendingUp, Users, Rocket } from 'lucide-react';

async function submitToMailer(data) {
  try {
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json.ok;
  } catch (err) {
    console.error('Mailer error:', err);
    return false;
  }
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', brand: '', phone: '', email: '', vin: '', damage: '' });
  const [heroForm, setHeroForm] = useState({ name: '', brand: '', phone: '', email: '', vin: '', damage: '' });
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroLoading, setHeroLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  return (
    <div className="site">

      {/* TOP BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><Phone size={13} /> (902) 233-8587</span>
            <span><Mail size={30} /> infinityautoglass1@gmail.com</span>
          </div>

        </div>
      </div>

      {/* NAVBAR */}  
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#" className="logo">
            <img src="/logo.png" alt="Infinity Auto Glass" className="logo-img" />
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            Get Free Audit
          </button>
        </div>
      </nav>

      {/* HERO - SPIDER-MAN THEMED */}
      <section id="hero" className="hero-spidey">
        <div className="container spidey-inner">
          <div className="spidey-left">
            <div className="spidey-logo">
              <a href="#" className="logo">
                <img src="/logo.png" alt="Infinity Auto Glass" className="logo-img" />
              </a>
            </div>
            <div className="spidey-headline">
              <p className="hero-eyebrow-tag"><i className="fa-solid fa-car"></i> Mobile Auto Glass — HRM Region & Surrounding Areas</p>
              <h1>
                <span className="spidey-word-lg">We Come</span><span className="spidey-word-sm"> to You.</span>
                <br />
                <span className="spidey-word-lg spidey-orange">You Drive Away</span>
                <br />
                <span className="spidey-word-lg">With Confidence.</span>
              </h1>
              <p className="spidey-sub">From windshield chips and cracks to complete glass replacement, <strong>Infinity Auto Glass</strong> delivers professional mobile auto glass services wherever you need us — serving Halifax, Dartmouth, and surrounding HRM areas.</p>
              <div className="hero-badges">
                <span><i className="fa-solid fa-calendar-check"></i> Same-Day Appointments</span>
                <span><i className="fa-solid fa-location-dot"></i> Mobile Service</span>
                <span><i className="fa-solid fa-shield-halved"></i> Insurance Assistance</span>
                <span><i className="fa-solid fa-car"></i> All Makes & Models</span>
              </div>
            </div>
          </div>

          {/* QUOTE FORM CARD */}
          <div id="quote-form" className="hero-quote-card">
            <h3 className="quote-card-title">Get Your Free Quote</h3>
            <p className="quote-card-sub">We'll call you back within the hour with a price.</p>
            {heroSubmitted ? (
              <div className="success-box" style={{padding:'2rem 0'}}>
                <div className="success-icon"><CheckCircle size={36} /></div>
                <h3 style={{fontFamily:'var(--font)',fontWeight:800,fontSize:'1.4rem',color:'#111',marginBottom:'0.5rem'}}>Quote Requested!</h3>
                <p style={{color:'#6B7280',fontSize:'0.9rem'}}>Thank you <strong>{heroForm.name}</strong>! We'll call you within the hour.</p>
              </div>
            ) : (
            <form onSubmit={async e => { e.preventDefault(); setHeroLoading(true); const ok = await submitToMailer(heroForm); setHeroLoading(false); if(ok) setHeroSubmitted(true); else alert('Something went wrong. Please try again or call us directly.'); }} className="quote-form">
              <div className="qf-group">
                <label>Full Name <span className="qf-req">*</span></label>
                <input type="text" required placeholder="Your full name" value={heroForm.name} onChange={e => setHeroForm({ ...heroForm, name: e.target.value })} />
              </div>
              <div className="qf-group">
                <label>Phone Number <span className="qf-req">*</span></label>
                <input type="tel" required placeholder="e.g. (902) 233-8587" value={heroForm.phone} onChange={e => setHeroForm({ ...heroForm, phone: e.target.value })} />
              </div>
              <div className="qf-group">
                <label>Email Address <span className="qf-req">*</span></label>
                <input type="email" required placeholder="your@email.com" value={heroForm.email} onChange={e => setHeroForm({ ...heroForm, email: e.target.value })} />
              </div>
              <div className="qf-group">
                <label>Vehicle Year, Make &amp; Model <span className="qf-req">*</span></label>
                <input type="text" required placeholder="e.g. 2020 Honda Civic" value={heroForm.brand} onChange={e => setHeroForm({ ...heroForm, brand: e.target.value })} />
              </div>
              <div className="qf-group">
                <label>VIN <span className="qf-optional">(optional)</span></label>
                <input type="text" placeholder="e.g. 1HGBH41JXMN109186" value={heroForm.vin} onChange={e => setHeroForm({ ...heroForm, vin: e.target.value })} />
              </div>
              <div className="qf-group">
                <label>Describe the Damage <span className="qf-optional">(optional)</span></label>
                <textarea rows={2} placeholder="e.g. Stone chip on driver side..." value={heroForm.damage} onChange={e => setHeroForm({ ...heroForm, damage: e.target.value })}></textarea>
              </div>
              <button type="submit" className="qf-submit" disabled={heroLoading}>{heroLoading ? 'Sending...' : 'Get My Free Quote →'}</button>
              <p className="qf-note"><i className="fa-solid fa-lock"></i> No obligation · We call you within the hour</p>
              <div className="qf-divider"><span>— or —</span></div>
              <a href="tel:+19023995445" className="qf-call"><Phone size={15} /> Call (902) 233-8587</a>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="services-strip">
        <div className="container">
          <div className="strip-grid">
            {[
              [Zap, 'Windshield Repair'],
              [CheckCircle, 'Windshield Replacement'],
              [Star, 'Rear Window Glass'],
              [Target, 'Side Window Replacement'],
              [Award, 'Truck & Bus Glass'],
              [MapPin, 'ADAS Calibration'],
            ].map(([Icon, label]) => (
              <div key={label} className="strip-item">
                <Icon size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">What We Do</p>
            <h2>Complete Auto Glass Services</h2>
            <p>From windshield repairs to complete glass replacement, Infinity Auto Glass provides professional auto glass solutions for cars, trucks, buses, vans, and commercial vehicles.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: 'fa-solid fa-car-burst', title: 'Windshield Replacement', desc: 'Professional windshield replacement using OEM-quality glass and precision installation for a secure fit, clear visibility, and dependable performance.' },
              { icon: 'fa-solid fa-screwdriver-wrench', title: 'Windshield Repair', desc: "Don't let a small chip become a major crack. Our repair service restores damaged glass and prevents further spreading, saving you time and money." },
              { icon: 'fa-solid fa-window-restore', title: 'Rear Window Replacement', desc: 'Professional rear window replacement including proper installation of integrated defrosters, antennas, and other components.' },
              { icon: 'fa-solid fa-car-side', title: 'Side Window Replacement', desc: 'Fast and reliable replacement using quality automotive glass designed for a proper fit and secure installation.' },
              { icon: 'fa-solid fa-truck', title: 'Truck & Bus Glass', desc: 'Dependable glass repair and replacement for trucks, buses, vans, and commercial vehicles with professional installation.' },
              { icon: 'fa-solid fa-satellite-dish', title: 'ADAS Calibration', desc: 'After windshield replacement, our ADAS calibration ensures cameras and sensors are accurately aligned and operating as intended.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="svc-card">
                <div className="svc-body">
                  <div className="svc-icon-wrap"><i className={icon}></i></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#contact" className="svc-link">Learn More <ChevronRight size={14} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="serve-section">
        <div className="container">
          <div className="section-head" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="serve-eyebrow">WE SERVICE</p>
            <h2 className="serve-title">Auto Glass for Every Vehicle</h2>
            <p style={{ color: '#9CA3AF', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>Whether you drive a family car, work truck, commercial vehicle, or fleet, Infinity Auto Glass provides professional glass repair and replacement solutions for a wide range of vehicles.</p>
          </div>
          <div className="serve-grid">
            {[
              { icon: 'fa-solid fa-car', label: 'Cars & SUVs', desc: 'Professional windshield, side window, and rear glass services for everyday cars, SUVs, and family vehicles.' },
              { icon: 'fa-solid fa-truck-pickup', label: 'Trucks & Vans', desc: 'Reliable auto glass repair and replacement for pickup trucks, vans, and utility vehicles of all makes and models.' },
              { icon: 'fa-solid fa-bus', label: 'Buses & Commercial Vehicles', desc: 'Professional glass repair and replacement services for buses and commercial vehicles.' },
              { icon: 'fa-solid fa-truck-moving', label: 'Commercial Fleets', desc: 'Efficient auto glass solutions for commercial fleets, minimizing downtime and keeping vehicles working.' },
              { icon: 'fa-solid fa-circle-check', label: 'All Makes & Models', desc: 'Quality auto glass solutions tailored to your vehicle, from everyday cars to larger commercial vehicles.' },
              { icon: 'fa-solid fa-shield-halved', label: 'Safety-Equipped Vehicles', desc: 'ADAS calibration after windshield replacement to ensure your safety systems function properly.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="serve-card">
                <div className="serve-card-top">
                  <div className="serve-icon-wrap"><i className={icon}></i></div>
                  <span className="serve-label">{label}</span>
                </div>
                <p className="serve-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="hiw-section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">Our Process</p>
            <h2>Your Auto Glass Service in 3 Easy Steps</h2>
            <p>Getting your windshield or auto glass repaired or replaced is simple with Infinity Auto Glass. We make the process quick, convenient, and hassle-free from your first call to getting safely back on the road.</p>
          </div>
          <div className="hiw-grid">
            {[
              { step: '01', title: 'Get in Touch', desc: 'Call Infinity Auto Glass or request a quote online. Tell us your vehicle\'s make and model, the type of glass you need, and the damage you\'re experiencing. Our team will help you choose the right service and provide clear, competitive pricing.' },
              { step: '02', title: 'Schedule Your Service', desc: 'Choose a convenient time for your auto glass service. Our experienced technicians will arrange the service around your schedule and provide professional installation using quality automotive glass and proven techniques.' },
              { step: '03', title: 'Get Back on the Road', desc: 'Our technicians complete the repair or replacement with precision and attention to detail. We make sure everything is properly installed before you get back on the road, giving you confidence in the safety and quality of the work.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="hiw-card">
                <div className="hiw-step">{step}</div>
                <h3 className="hiw-title">{title}</h3>
                <p className="hiw-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2>The Infinity Auto Glass Difference</h2>
            <p>We're not just another auto glass shop. Here's why HRM region & surrounding area drivers trust us.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: 'fa-solid fa-bolt', title: 'Same-Day Service', desc: 'We offer same-day appointments so you\'re never left waiting. Your time matters — we show up fast and get the job done right.' },
              { icon: 'fa-solid fa-location-dot', title: 'We Come to You', desc: 'No need to visit a shop. Our mobile technicians come to your home, office, or wherever is most convenient for you.' },
              { icon: 'fa-solid fa-shield-halved', title: 'Insurance Assistance', desc: 'We help you navigate the insurance process from start to finish, making your claim as smooth and stress-free as possible.' },
              { icon: 'fa-solid fa-award', title: 'OEM-Quality Glass', desc: 'We use only OEM-quality glass that meets or exceeds manufacturer standards for a perfect fit and lasting durability.' },
              { icon: 'fa-solid fa-user-check', title: 'Certified Technicians', desc: 'Our experienced, certified technicians bring precision and professionalism to every job — big or small.' },
              { icon: 'fa-solid fa-tag', title: 'Competitive Pricing', desc: 'Transparent, upfront pricing with no hidden fees. You get premium service at a fair and honest price, every time.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-icon-wrap"><i className={icon}></i></div>
                <h3 className="why-title">{title}</h3>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">What Our Customers Say</p>
            <h2>Trusted Auto Glass Service</h2>
            <p>Our customers choose Infinity Auto Glass for professional workmanship, reliable service, competitive pricing, and a hassle-free auto glass experience.</p>
          </div>
          <div className="reviews-grid">
            {[
              { init: 'H', name: 'Halifax, NS', role: '5-Star Verified Customer', text: 'Fast, professional, and reliable service. The entire process was smooth from start to finish, and the quality of the windshield installation was excellent. Highly recommended!' },
              { init: 'D', name: 'Dartmouth, NS', role: '5-Star Verified Customer', text: 'Great experience with Infinity Auto Glass. The team was friendly, knowledgeable, and completed the job quickly. Everything was handled professionally, and I was back on the road with confidence.' },
              { init: 'H', name: 'HRM, Nova Scotia', role: '5-Star Verified Customer', text: 'Excellent service and competitive pricing. The installation was done carefully and professionally, and the team made the whole process easy and hassle-free. I would definitely recommend Infinity Auto Glass.' },
            ].map(({ init, name, role, text }) => (
              <div key={name} className="review-card">
                <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
                <p className="review-text">"{text}"</p>
                <div className="review-author">
                  <div className="review-avatar">{init}</div>
                  <div>
                    <div className="reviewer-name">{name}</div>
                    <div className="reviewer-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contact" className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Book Your Auto Glass Service?</h2>
            <p>Call us or get a free quote online. Same-day appointments available in HRM region & surrounding areas.</p>
          </div>
          <div className="cta-actions">
            <button className="btn-white" onClick={() => setIsModalOpen(true)}>Get Free Quote</button>
            <a href="tel:+19022338587" className="btn-ghost-white"><Phone size={16} /> Call (902) 233-8587</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-simple">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/logo.png" alt="Infinity Auto Glass" className="logo-img" />
            </a>
            <p className="footer-desc">Infinity Auto Glass — Professional mobile auto glass services in Halifax, Dartmouth, and surrounding HRM areas.</p>
          </div>
          <div className="footer-contact-block">
            <h4>Contact Us</h4>
            <div className="footer-contact-items">
              <div><Phone size={14} /> (902) 233-8587</div>
              <div><Mail size={14} /> infinityautoglass1@gmail.com</div>
              <div><MapPin size={14} /> Mumbai, India</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">© {new Date().getFullYear()} Infinity Auto Glass. All rights reserved.</div>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="mobile-sticky-bar">
        <a href="#quote-form" className="mobile-sticky-quote">
          <i className="fa-solid fa-file-lines"></i> Free Quote
        </a>
        <a href="tel:+19023995445" className="mobile-sticky-call">
          <Phone size={15} color="#F97316" /> Call Now
        </a>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}><X size={16} /></button>
            {!isSubmitted ? (
              <>
                <p className="modal-eyebrow"><i className="fa-solid fa-car"></i> Free Auto Glass Quote</p>
                <h3 className="modal-title">Get Your Free Quote</h3>
                <p className="modal-sub">Fill in your details and we'll call you back within the hour with a price.</p>
                <form onSubmit={async e => { e.preventDefault(); setModalLoading(true); const ok = await submitToMailer(form); setModalLoading(false); if(ok) setIsSubmitted(true); else alert('Something went wrong. Please try again or call us directly.'); }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" required className="form-input" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-row">
                    <div>
                      <label className="form-label">Phone *</label>
                      <input type="tel" required className="form-input" placeholder="e.g. (902) 233-8587" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Vehicle Year, Make & Model *</label>
                    <input type="text" required className="form-input" placeholder="e.g. 2020 Honda Civic" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">VIN <span style={{fontWeight:400,textTransform:'none',color:'#9CA3AF'}}>(optional)</span></label>
                    <input type="text" className="form-input" placeholder="e.g. 1HGBH41JXMN109186" value={form.vin} onChange={e => setForm({ ...form, vin: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Describe the Damage <span style={{fontWeight:400,textTransform:'none',color:'#9CA3AF'}}>(optional)</span></label>
                    <textarea className="form-input" rows={2} placeholder="e.g. Stone chip on driver side, crack 6 inches long..." style={{resize:'vertical'}} value={form.damage} onChange={e => setForm({ ...form, damage: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-primary" disabled={modalLoading} style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                    {modalLoading ? 'Sending...' : 'Get My Free Quote →'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-box">
                <div className="success-icon"><CheckCircle size={36} /></div>
                <h3 className="modal-title">Quote Requested!</h3>
                <p>Thank you, <strong>{form.name || 'there'}</strong>! We'll call you back within the hour with a price for your <strong>{form.brand || 'vehicle'}</strong>.</p>
                <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => { setIsModalOpen(false); setIsSubmitted(false); }}>Back to Website</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
