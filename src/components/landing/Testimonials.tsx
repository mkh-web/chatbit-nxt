// components/Testimonials.tsx
// Next.js React component styled with Tailwind CSS
// Usage: import Testimonials from '@/components/Testimonials' and place <Testimonials /> in a page

'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  { 
    name: 'بيت اكس', 
    location: 'اليمن', 
    text: 'النظام ساعدنا في متابعة عملائنا بشكل أسرع وتنظيم المحادثات في مكان واحد، التجربة ممتازة جداً.', 
    rating: 5 
  },
  { 
    name: 'مؤسسة التقنية الحديثة', 
    location: 'السعودية', 
    text: 'سهولة الاستخدام والتقارير التفصيلية وفرت لنا وقت وجهد كبير في إدارة الفريق.', 
    rating: 4 
  },
  { 
    name: 'شركة المستقبل', 
    location: 'الإمارات', 
    text: 'خدمة العملاء أصبحت أفضل بفضل التنبيهات الفورية، ما نضيع أي رسالة من العملاء الآن.', 
    rating: 5 
  },
  { 
    name: 'حلول الغد', 
    location: 'الكويت', 
    text: 'نظام موثوق وآمن، حسّنا من تجربة عملائنا ورفعنا مستوى رضاهم بشكل ملحوظ.', 
    rating: 4 
  },
];


export default function Testimonials() {
  return (
    <section dir="rtl" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center justify-center gap-2">
            <span>اراء عملائنا</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={idx}
              className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col justify-between h-56"
            >
              <div>
                {/* Rating */}
                <div className="flex justify-end mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ml-1 ${i <= t.rating ? 'text-orange-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-700 mb-4">{t.text}</p>
              </div>

              <div className="border-t border-gray-300 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
                <div className="w-8 h-8 rounded-md bg-white border border-gray-300"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
