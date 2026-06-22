import { useState } from 'react';
import Reveal from './Reveal';

function Contact({ email, phone, location, lang, t }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: lang === 'id' ? 'Semua kolom wajib diisi!' : 'All fields are required!',
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: lang === 'id' ? 'Format email tidak valid!' : 'Invalid email format!',
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Pesan Baru Portofolio dari ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setIsSubmitting(false);
        setFormStatus({
          type: 'success',
          message: t.contactFormSuccess || 'Pesan Anda berhasil dikirim!',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Gagal mengirim pesan');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setIsSubmitting(false);
      setFormStatus({
        type: 'error',
        message: t.contactFormError || 'Terjadi kesalahan, silakan coba lagi.',
      });
    }
  };

  const contactDetails = [
    {
      label: 'Email',
      value: email,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: lang === 'id' ? 'Telepon' : 'Phone',
      value: phone,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: lang === 'id' ? 'Lokasi' : 'Location',
      value: location,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 10 10 10s10-4.75 10-10a10 10 0 0 0-10-10z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{t.contactHeading}</h2>
        </Reveal>
        <div className="contact-grid">
          {/* Info */}
          <Reveal direction="left" delay={100}>
            <div className="contact-info glass-panel">
              <h3>{lang === 'id' ? 'Mari Berdiskusi' : "Let's Connect"}</h3>
              <p>
                {lang === 'id'
                  ? 'Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk mengirim pesan kepada saya. Saya selalu terbuka untuk kesempatan kerja sama baru.'
                  : 'Have an interesting project or want to collaborate? Feel free to send me a message. I am always open to new opportunities.'}
              </p>
              <div className="contact-details">
                {contactDetails.map(({ label, value, icon }) => (
                  <div key={label} className="contact-detail-item">
                    <div className="contact-icon">{icon}</div>
                    <div>
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={200}>
            <div className="contact-form-wrapper glass-panel">
              <h3>{lang === 'id' ? 'Kirim Pesan' : 'Send Message'}</h3>

              {formStatus.type && (
                <div className={`form-alert alert-${formStatus.type}`} id="form-alert-msg">
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name-input">{t.contactFormName}</label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={lang === 'id' ? 'Nama Anda' : 'Your Name'}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email-input">{t.contactFormEmail}</label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message-input">{t.contactFormMsg}</label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={
                      lang === 'id'
                        ? 'Tuliskan pesan atau ide kolaborasi Anda di sini...'
                        : 'Write your message or collaboration ideas here...'
                    }
                    rows="5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                  id="submit-contact"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" viewBox="0 0 24 24" width="20" height="20">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="30 10" />
                      </svg>
                      {t.contactFormSending}
                    </>
                  ) : (
                    <>
                      {t.contactFormSend}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
