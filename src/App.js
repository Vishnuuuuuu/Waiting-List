// App.js
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './App.css';

// Initialize Supabase client
// NOTE: Replace with your actual Supabase URL and anon key when deploying
const supabaseUrl = 'https://fazetcwiymkonjnfyvhx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhemV0Y3dpeW1rb25qbmZ5dmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5Nzc2MDcsImV4cCI6MjA1ODU1MzYwN30.LYdhLIuzWBQpmCB15sfGElNVg8putAwEWWPW4HjusvI';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    role: '',
    useCase: 'training',
    dataVolume: 'medium',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          { 
            company_name: formData.companyName,
            email: formData.email,
            role: formData.role,
            use_case: formData.useCase,
            data_volume: formData.dataVolume,
            created_at: new Date()
          }
        ]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({
        companyName: '',
        email: '',
        role: '',
        useCase: 'training',
        dataVolume: 'medium',
      });
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Oryx AI
            </motion.div>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#waitlist">Join Waitlist</a>
          </div>
        </nav>

        <motion.div 
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Forge the Future of AI with Superior Synthetic Data</h1>
          <p>
            Oryx AI empowers developers and data scientists with high-quality
            synthetic data generation at scale—providing free access to our company's LLM
            while delivering synthetic datasets that are 5 times cheaper than alternatives.
          </p>
          <motion.a 
            href="#waitlist" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Waitlist
          </motion.a>
        </motion.div>
      </header>

      <section id="features" className="features">
        <h2>Why Choose Oryx AI?</h2>
        <div className="feature-grid">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
              </svg>
            </div>
            <h3>Data Quality Analyzer</h3>
            <p>Our platform automatically evaluates and scores your training data, ensuring optimal performance for your AI models.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3>Free LLM Access</h3>
            <p>Access our company's powerful language model for free while getting high-quality synthetic data at costs 5 times lower than competitors.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Credit-Based System</h3>
            <p>Our flexible credit system allows you to optimize costs based on your usage, with up to 40% discount when contributing to our open-source datasets.</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Our Mission</h2>
            <p>
              Named after the resilient desert antelope known for its adaptability in challenging environments, 
              Oryx AI is building the next generation platform for synthetic data generation with complimentary access to our company's LLM.
            </p>
            <p>
              We believe that high-quality public data, properly vetted and processed, is the key to creating 
              more accessible AI capabilities while addressing concerns about data privacy and availability.
            </p>
            <p>
              Our platform leverages advanced techniques to deliver:
            </p>
            <ul>
              <li>Free access to our powerful language model</li>
              <li>Synthetic data that's 5 times cheaper than alternatives</li>
              <li>Automatic quality verification for all training data</li>
              <li>Optimized use of publicly available datasets</li>
              <li>Accessible AI tools for developers and data scientists at all levels</li>
            </ul>
            <p>
              By creating a community-driven platform where users can contribute to and benefit from 
              shared datasets, we're fostering an ecosystem of innovation that will drive the future 
              of AI development while keeping costs under control.
            </p>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="waitlist" className="waitlist">
        <motion.div 
          className="waitlist-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Join the Oryx AI Waitlist</h2>
          <p>
            Be among the first to experience free access to our powerful LLM and high-quality synthetic data at a fraction of the cost.
            Reserve your spot now and receive early access when we launch.
          </p>

          <form onSubmit={handleSubmit} className="waitlist-form">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Business Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Your Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="useCase">Primary Use Case</label>
              <select
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
              >
                <option value="training">Training custom models</option>
                <option value="augmentation">Data augmentation</option>
                <option value="testing">Testing and validation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dataVolume">Typical Data Volume</label>
              <select
                id="dataVolume"
                name="dataVolume"
                value={formData.dataVolume}
                onChange={handleChange}
                required
              >
                <option value="small">Small (under 10MB)</option>
                <option value="medium">Medium (10-50MB)</option>
                <option value="large">Large (50-100MB)</option>
                <option value="xlarge">Extra Large (100MB+)</option>
              </select>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Reserve My Spot'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                <p>🎉 You're on the list! We'll be in touch soon with early access details.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                <p>Something went wrong. Please try again or contact support.</p>
              </div>
            )}
          </form>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Oryx AI</div>
          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#waitlist">Join Waitlist</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-social">
            {/* <a href="#" className="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a> */}
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Oryx AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;