// components/ServicesGrid.tsx

'use client';

import React from 'react';

const services = [
  { 
    title: 'ادارة المعلومات', 
    desc: 'تنظيم وتخزين بيانات العملاء بشكل آمن مع سهولة الوصول إليها في أي وقت.' 
  },
  { 
    title: 'حماية الخصوصية', 
    desc: 'تأمين بياناتك باستخدام أحدث تقنيات التشفير وضمان سرية المعلومات.' 
  },
  { 
    title: 'خدمة عملاء', 
    desc: 'تقديم دعم سريع وفعال لعملائك عبر قنوات متعددة لرفع مستوى رضاهم.' 
  },
];


export default function Services() {
  return (
    <section dir="rtl" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* header */}
        <header className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            خدمات نظام شات سنتر
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
            “شات سنتر هو عبارة عن نظام ادارة عملاء متكامل و مرن يحتوي على العديد من الخدمات
            التي تساعدك في ادارة عملائك و تحسين تجربتهم معك.”    
          </p>
        </header>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="relative min-h-[50vh] rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-[#4828B7] to-[#6E3AFF] flex items-center justify-center text-center"
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* centered content */}
              <div className="relative z-10 p-6">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/90 text-base md:text-lg">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
