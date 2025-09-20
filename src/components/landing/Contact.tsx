// components/Contact.tsx
'use client';

import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا يمكنك ربط الفورم مع backend لإرسال الرسائل
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-4xl mx-auto p-6 mt-12 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        تواصل معنا
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* نموذج البريد */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="الاسم"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4828B7]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4828B7]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="الرسالة"
            rows={5}
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#4828B7] resize-none"
          />
          <button
            type="submit"
            className=" bg-gradient-to-br from-[#4828B7] to-[#6E3AFF] text-white  font-semibold py-3 rounded-lg hover:opacity-60 transition-colors"
          >
            إرسال الرسالة
          </button>
          {submitted && (
            <p className="text-green-600 font-medium">تم إرسال الرسالة بنجاح!</p>
          )}
        </form>

        {/* طرق التواصل الأخرى */}
        <div className="flex flex-col justify-center items-center space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">تواصل عبر</h3>
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition-colors w-full justify-center"
          >
            <FaEnvelope className="text-[#4828B7] text-2xl" />
            البريد الإلكتروني
          </a>
          <a
            href="https://wa.me/1234567890" // ضع رقم الواتساب هنا بصيغة دولية بدون +
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-100 p-4 rounded-lg shadow hover:bg-green-200 transition-colors w-full justify-center"
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            واتساب
          </a>
        </div>  
      </div>
    </section>
  );
}
