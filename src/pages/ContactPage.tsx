import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
 Phone, 
 Mail, 
 MapPin, 
 Clock, 
 Send, 
 PhoneCall, 
 Building2,
 ShieldCheck,
 CheckCircle2,
 ArrowRight,
 MessageSquare,
 Globe2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
 const [formData, setFormData] = useState({
 name: '',
 organization: '',
 email: '',
 phone: '',
 subject: '',
 message: '',
 });
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
 setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Build WhatsApp message with form data
 const text = encodeURIComponent(
 `Hello Phexal Healthcare,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
 );
 window.open(`https://wa.me/918070008050?text=${text}`, '_blank');
 setIsSubmitted(true);
 };

 return (
 <div className="min-h-screen">
 
 {/* ── Hero Section ── */}
 <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-phexal-navy to-slate-900 text-white overflow-hidden">
 <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/40 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
 <MessageSquare className="w-4 h-4" />
 <span>Get In Touch With Our Team</span>
 </div>

 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
 Contact{' '}
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">
 Phexal Healthcare
 </span>
 </h1>
 <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
 Our B2B procurement specialists are available for institutional inquiries, bulk RFQs, and compliance support.
 </p>
 </div>
 </section>

 {/* ── Contact Info Cards + Form ── */}
 <section className="py-16 sm:py-20 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
 
 {/* Left Column: Contact Info Cards */}
 <div className="lg:col-span-2 space-y-5">
 
 {/* Quick WhatsApp CTA */}
 <a
 href="https://wa.me/918070008050?text=Hello%20Phexal%20Healthcare,%20I%20have%20an%20inquiry%20regarding%20medical%20equipment%20procurement."
 target="_blank"
 rel="noopener noreferrer"
 className="block p-5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-500 hover:to-emerald-600 transition-all shadow-lg group"
 >
 <div className="flex items-center gap-3 mb-2">
 <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
 <PhoneCall className="w-5 h-5" />
 </div>
 <div>
 <div className="text-sm font-extrabold">WhatsApp B2B Desk</div>
 <div className="text-xs text-emerald-100">Instant response • </div>
 </div>
 </div>
 <div className="text-xs text-emerald-100 mt-2 flex items-center gap-1">
 <span>Click to start a conversation</span>
 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
 </div>
 </a>

 {/* Office Address */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
 <div className="flex items-start gap-3">
 <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
 <MapPin className="w-5 h-5" />
 </div>
 <div>
 <h3 className="text-sm font-extrabold text-slate-900 mb-1">Headquarters & Dispatch</h3>
 <p className="text-xs text-slate-500 leading-relaxed">
 762 Makanpur, Nyay Khand I,<br />
 Indirapuram, Ghaziabad,<br />
 Delhi NCR, India – 201014
 </p>
 </div>
 </div>
 </div>

 {/* Phone */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
 <div className="flex items-start gap-3">
 <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
 <Phone className="w-5 h-5" />
 </div>
 <div>
 <h3 className="text-sm font-extrabold text-slate-900 mb-1">Phone Numbers</h3>
 <div className="space-y-1 text-xs text-slate-500">
 <p>Procurement: <a href="tel:+918070008050" className="text-brand-600 font-bold hover:underline">+91 80700 08050</a></p>
 <p>Quality Desk: <a href="tel:+918070008050" className="text-brand-600 font-bold hover:underline">+91 80700 08050</a></p>
 </div>
 </div>
 </div>
 </div>

 {/* Email */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
 <div className="flex items-start gap-3">
 <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
 <Mail className="w-5 h-5" />
 </div>
 <div>
 <h3 className="text-sm font-extrabold text-slate-900 mb-1">Email</h3>
 <div className="space-y-1 text-xs text-slate-500">
 <p>General: <span className="text-slate-900 font-semibold">Phexalhealthcare@gmail.com</span></p>
 <p>Quality: <span className="text-slate-900 font-semibold">Phexalhealthcare@gmail.com</span></p>
 </div>
 </div>
 </div>
 </div>

 {/* Business Hours */}
 <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
 <div className="flex items-start gap-3">
 <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
 <Clock className="w-5 h-5" />
 </div>
 <div>
 <h3 className="text-sm font-extrabold text-slate-900 mb-1">Business Hours</h3>
 <div className="space-y-1 text-xs text-slate-500">
 <p>Mon – Sat: <span className="font-semibold text-slate-700">9:00 AM – 7:00 PM IST</span></p>
 <p>Emergency Line: <span className="font-semibold text-emerald-600"> Available</span></p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Right Column: Contact Form */}
 <div className="lg:col-span-3">
 <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
 <h2 className="text-lg font-extrabold text-slate-900 mb-1">Send Us an Inquiry</h2>
 <p className="text-xs text-slate-500 mb-6">
 Fill out the form below and your inquiry will be routed directly to our WhatsApp B2B desk for immediate response.
 </p>

 {isSubmitted ? (
 <div className="py-16 text-center">
 <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
 <CheckCircle2 className="w-8 h-8" />
 </div>
 <h3 className="text-lg font-extrabold text-slate-900 mb-2">Inquiry Sent!</h3>
 <p className="text-sm text-slate-500 mb-6">
 Your message has been sent via WhatsApp. Our team will respond shortly.
 </p>
 <button
 onClick={() => { setIsSubmitted(false); setFormData({ name: '', organization: '', email: '', phone: '', subject: '', message: '' }); }}
 className="text-sm font-bold text-brand-600 hover:text-brand-700"
 >
 Send Another Inquiry
 </button>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
 <input
 type="text"
 name="name"
 required
 value={formData.name}
 onChange={handleChange}
 className="w-full h-11 px-4 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
 placeholder="Dr. Rajesh Kumar"
 />
 </div>
 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Organization *</label>
 <input
 type="text"
 name="organization"
 required
 value={formData.organization}
 onChange={handleChange}
 className="w-full h-11 px-4 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
 placeholder="City Hospital, New Delhi"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Email</label>
 <input
 type="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 className="w-full h-11 px-4 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
 placeholder="procurement@hospital.com"
 />
 </div>
 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
 <input
 type="tel"
 name="phone"
 required
 value={formData.phone}
 onChange={handleChange}
 className="w-full h-11 px-4 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
 placeholder="+91 98765 43210"
 />
 </div>
 </div>

 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject</label>
 <select
 name="subject"
 value={formData.subject}
 onChange={handleChange}
 className="w-full h-11 px-4 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
 >
 <option value="">Select inquiry type...</option>
 <option value="Bulk RFQ / Quotation">Bulk RFQ / Quotation</option>
 <option value="Hospital Tender Support">Hospital Tender Support</option>
 <option value="Product Information">Product Information</option>
 <option value="Compliance Documentation">Compliance Documentation</option>
 <option value="After-Sales / Service">After-Sales / Service</option>
 <option value="Partnership / Dealership">Partnership / Dealership</option>
 <option value="Other">Other</option>
 </select>
 </div>

 <div>
 <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message *</label>
 <textarea
 name="message"
 required
 rows={5}
 value={formData.message}
 onChange={handleChange}
 className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition resize-none"
 placeholder="Please describe your equipment requirements, quantities, and any compliance documentation needed..."
 />
 </div>

 <button
 type="submit"
 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-sm transition-colors shadow-md active:scale-95"
 >
 <Send className="w-4 h-4" />
 <span>Send via WhatsApp</span>
 </button>

 <p className="text-[10px] text-slate-400 flex items-start gap-1.5">
 <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
 <span>Your information is sent securely via WhatsApp and is never stored on our servers.</span>
 </p>
 </form>
 )}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ── Quick Links CTA ── */}
 <section className="py-12 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link
 to="/catalog"
 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm transition-colors"
 >
 <span>Browse Equipment Catalog</span>
 <ArrowRight className="w-4 h-4" />
 </Link>
 <Link
 to="/quality"
 className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
 >
 <ShieldCheck className="w-4 h-4" />
 <span>View Quality Certifications</span>
 </Link>
 </div>
 </div>
 </section>

 </div>
 );
};
