import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactViewProps {
  initialSubject?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ initialSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Hire for Senior Engineering / Leadership Role');
  const [subject, setSubject] = useState(initialSubject || '');
  const [message, setMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'whatsapp' | 'both'>('email');

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFullInquiry, setCopiedFullInquiry] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    phone: string;
    inquiryType: string;
    subject: string;
    message: string;
    mailtoUrl: string;
    whatsappUrl: string;
  } | null>(null);

  const [validationError, setValidationError] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  };

  const generatePayloads = () => {
    const fullSubject = subject.trim()
      ? `[Portfolio Inquiry] ${subject} - from ${name}`
      : `[${inquiryType}] Project Inquiry from ${name}`;

    const emailBody = `--- JITENDRA MAHANTY PORTFOLIO INQUIRY ---
From: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || 'Not provided'}
Inquiry Type: ${inquiryType}
Subject: ${subject || inquiryType}

Project Scope / Message:
${message}

-------------------------------------------
Sent via Jitendra Mahanty Studio Portfolio
Direct Contact: ${PERSONAL_INFO.email} | +91 7760078622`;

    const whatsappText = `Hello Jitendra, I am contacting you from your portfolio website:
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Inquiry Type:* ${inquiryType}
*Subject:* ${subject || 'Direct Inquiry'}

*Message / Requirements:*
${message}`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(emailBody)}`;
    const whatsappUrl = `https://wa.me/917760078622?text=${encodeURIComponent(whatsappText)}`;

    return { fullSubject, emailBody, whatsappText, mailtoUrl, whatsappUrl };
  };

  const handleSendViaEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    const { mailtoUrl, whatsappUrl } = generatePayloads();

    setSubmittedData({
      name,
      email,
      phone,
      inquiryType,
      subject,
      message,
      mailtoUrl,
      whatsappUrl
    });

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  const handleSendViaWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    const { mailtoUrl, whatsappUrl } = generatePayloads();

    setSubmittedData({
      name,
      email,
      phone,
      inquiryType,
      subject,
      message,
      mailtoUrl,
      whatsappUrl
    });

    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const validateForm = () => {
    setValidationError('');
    if (!name.trim()) {
      setValidationError('Please enter your full name.');
      return false;
    }
    if (!email.trim() || !email.includes('@')) {
      setValidationError('Please enter a valid email address.');
      return false;
    }
    if (!message.trim() || message.trim().length < 10) {
      setValidationError('Please enter a message or scope outline of at least 10 characters.');
      return false;
    }
    return true;
  };

  const handleCopyFormattedInquiry = async () => {
    if (!submittedData) return;
    const { emailBody } = generatePayloads();
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopiedFullInquiry(true);
      setTimeout(() => setCopiedFullInquiry(false), 3000);
    } catch {
      setCopiedFullInquiry(true);
      setTimeout(() => setCopiedFullInquiry(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2fd9f4] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]" />
          <span>DIRECT CONTACT &middot; END-TO-END DELIVERY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#dce2f8] mb-4">
          Send an Inquiry, Hire, or Build
        </h1>
        <p className="text-base sm:text-lg text-[#c2c6d6] leading-relaxed">
          Inquiries are received directly on my personal inbox (<strong className="text-[#adc6ff]">{PERSONAL_INFO.email}</strong>) and WhatsApp (<strong className="text-[#2fd9f4]">+91 7760078622</strong>). No lost contact forms or middlemen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Channels & Verified Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Direct Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#2fd9f4] uppercase tracking-wider">
                WHATSAPP DIRECT CHAT
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2fd9f4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2fd9f4]" />
              </span>
            </div>
            
            <div className="font-mono text-2xl font-bold text-[#dce2f8] mb-2">
              +91 7760078622
            </div>
            <p className="text-xs text-[#8c909f] mb-5 leading-relaxed">
              Instant mobile messaging for project timelines, emergency architecture audits, or direct role discussions.
            </p>

            <a
              href="https://wa.me/917760078622?text=Hello%20Jitendra,%20I%20am%20contacting%20you%20from%20your%20portfolio%20website%20regarding%20an%20engineering%20opportunity%20or%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-11 px-5 rounded-full bg-[#2fd9f4] hover:bg-[#a2eeff] text-[#002f36] text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp &rarr;</span>
            </a>
          </div>

          {/* Email Direct Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 shadow-xl">
            <span className="font-mono text-xs text-[#adc6ff] uppercase tracking-wider block mb-2">
              PRIMARY EMAIL INBOX
            </span>
            <div className="font-mono text-lg sm:text-xl font-bold text-[#dce2f8] break-all mb-3">
              {PERSONAL_INFO.email}
            </div>
            <p className="text-xs text-[#8c909f] mb-5">
              Ideal for formal RFP proposals, architectural scope outlines, or leadership position specifications.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Engineering%20Inquiry%20-%20Jitendra%20Mahanty`}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#4d8eff] hover:bg-[#3b82f6] text-white text-xs font-mono font-medium transition-colors shadow-md"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Compose Mail</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#191f2f] hover:bg-[#232a3a] border border-[#424754]/40 text-[#c2c6d6] text-xs font-mono transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <span className="text-[#2fd9f4] font-bold">&check;</span>
                    <span className="text-[#2fd9f4]">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-[#8c909f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#151b2b] border border-[#424754]/40 shadow-xl">
            <span className="font-mono text-xs text-[#bdc2ff] uppercase tracking-wider block mb-2">
              PROFESSIONAL NETWORK
            </span>
            <div className="text-xl font-bold text-[#dce2f8] mb-1">
              LinkedIn Network
            </div>
            <p className="text-xs text-[#8c909f] mb-4">
              Verified career endorsements, recommendations, and leadership history.
            </p>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#adc6ff] hover:text-[#dce2f8] transition-colors"
            >
              <span>linkedin.com/in/jitendra-mahanty</span>
              <span>&nearr;</span>
            </a>
          </div>
        </div>

        {/* Right Column: Complete Interactive Inquiry Generator */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#151b2b] border border-[#424754]/40 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-[#dce2f8] mb-2">
              Inquiry / Product Development / Hire
            </h3>
            <p className="text-xs sm:text-sm text-[#8c909f] mb-6 leading-relaxed">
              Fill in your requirements below to instantly generate and route your inquiry directly to my email or WhatsApp.
            </p>

            {validationError && (
              <div className="mb-6 p-3 rounded-xl bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs font-mono">
                {validationError}
              </div>
            )}

            {/* CONFIRMATION / DELIVERY HUB */}
            {submittedData ? (
              <div className="p-6 rounded-2xl bg-[#070e1d] border border-[#2fd9f4]/40 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2fd9f4]/20 text-[#2fd9f4] flex items-center justify-center font-bold text-lg">
                    &check;
                  </div>
                  <div>
                    <h4 className="font-bold text-[#dce2f8] text-base">
                      Inquiry Generated &amp; Prepared
                    </h4>
                    <p className="text-xs text-[#8c909f]">
                      Choose your preferred delivery channel below to dispatch directly to Jitendra:
                    </p>
                  </div>
                </div>

                {/* Structured Payload Preview */}
                <div className="p-4 bg-[#151b2b] rounded-xl text-xs font-mono text-[#c2c6d6] space-y-1.5 border border-[#424754]/30">
                  <div><strong className="text-[#8c909f]">Recipient:</strong> {PERSONAL_INFO.email} &middot; +91 7760078622</div>
                  <div><strong className="text-[#8c909f]">From:</strong> {submittedData.name} ({submittedData.email})</div>
                  {submittedData.phone && <div><strong className="text-[#8c909f]">Phone:</strong> {submittedData.phone}</div>}
                  <div><strong className="text-[#8c909f]">Category:</strong> {submittedData.inquiryType}</div>
                  <div className="pt-2 border-t border-[#424754]/20 mt-2 text-[#dce2f8] whitespace-pre-wrap">
                    {submittedData.message}
                  </div>
                </div>

                {/* Direct Action Hub */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={submittedData.mailtoUrl}
                    className="flex-1 h-11 px-5 rounded-full bg-[#4d8eff] hover:bg-[#3b82f6] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send via Email Client</span>
                  </a>

                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-11 px-5 rounded-full bg-[#2fd9f4] hover:bg-[#a2eeff] text-[#002f36] text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#424754]/30">
                  <button
                    type="button"
                    onClick={handleCopyFormattedInquiry}
                    className="text-xs font-mono text-[#adc6ff] hover:underline flex items-center gap-1.5"
                  >
                    <span>{copiedFullInquiry ? 'Full text copied to clipboard!' : 'Copy full inquiry text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setMessage('');
                      setSubject('');
                    }}
                    className="text-xs font-mono text-[#8c909f] hover:text-[#dce2f8]"
                  >
                    Reset &amp; New Message
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Mitchell"
                      className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. david@enterprise.com"
                      className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Inquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
                    >
                      <option value="Hire for Senior Engineering / Leadership Role">
                        Hire Jitendra &middot; Staff / Lead Role
                      </option>
                      <option value="Product Development & Software Build">
                        Product Development &amp; Software Build
                      </option>
                      <option value="Technical Architecture & Cloud Consulting">
                        Technical Architecture &amp; Cloud Consulting
                      </option>
                      <option value="AWS Cloud & Infrastructure Optimization">
                        AWS Cloud Optimization (-30% Proven Cost Cut)
                      </option>
                      <option value="Applied Generative AI Integration">
                        Applied AI &amp; Generative Intelligence
                      </option>
                      <option value="Advertisement & Collaboration">
                        Advertisement, Sponsorship &amp; Collaboration
                      </option>
                      <option value="General Engineering Inquiry">
                        General Engineering Inquiry
                      </option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Technical Architect Engagement for Q3"
                    className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block font-mono text-xs text-[#8c909f] uppercase mb-1">
                    Project Scope / Role Requirements *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, team requirements, cloud architecture challenges, or hiring timeline..."
                    className="w-full bg-[#070e1d] border border-[#424754]/40 rounded-xl px-4 py-2.5 text-xs text-[#dce2f8] focus:border-[#4d8eff] focus:outline-none resize-none"
                  />
                </div>

                {/* Dual-Channel Dispatch Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="flex-1 h-12 px-6 rounded-full bg-[#4d8eff] hover:bg-[#3b82f6] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="flex-1 h-12 px-6 rounded-full bg-[#2fd9f4] hover:bg-[#a2eeff] text-[#002f36] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>Send via WhatsApp (+91 7760078622)</span>
                  </button>
                </div>

                <div className="pt-2 font-mono text-[11px] text-[#8c909f] flex items-center justify-between">
                  <span>Direct to Jitendra &bull; Zero spam intermediaries</span>
                  <span>Typical response &lt; 24h</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
