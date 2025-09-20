// components/WhyChoose.tsx
// Next.js (App Router or Pages) React component styled with Tailwind CSS
// Usage: import WhyChoose from '@/components/WhyChoose' and place <WhyChoose /> in a page

'use client';

import React from 'react';

const reasons = [
  { 
    title: 'إدارة متكاملة للمعلومات', 
    desc: 'النظام يوفر تنظيم وتخزين بيانات العملاء بشكل آمن مع إمكانية الوصول إليها بسهولة في أي وقت، مما يجعل إدارة العملاء أكثر فعالية ويقلل من ضياع المعلومات.' 
  },
  { 
    title: 'حماية خصوصية البيانات', 
    desc: 'باستخدام أحدث تقنيات التشفير، يضمن النظام سرية المعلومات وحمايتها من أي اختراق، ما يعزز ثقة العملاء بالنظام والمؤسسة.' 
  },
  { 
    title: 'تحسين تجربة العملاء', 
    desc: 'يتيح النظام تقديم دعم سريع وفعال عبر قنوات متعددة، مع تنبيهات فورية، ما يرفع مستوى رضا العملاء ويحسن من تواصلهم مع المؤسسة.' 
  },
  { 
    title: 'موثوقية وفعالية مثبتة', 
    desc: 'تجارب المؤسسات مثل بيت اكس وشركة المستقبل أظهرت تحسنًا كبيرًا في إدارة العملاء، تنظيم المحادثات، وتقارير تفصيلية توفر وقت وجهد الفريق.' 
  },
];

export default function WhyChoose() {
  return (
    <section dir="rtl" className="py-16  bg-gradient-to-br from-[#4828B7] to-[#6E3AFF]">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">لماذا تختار شات سينتر</h2>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, idx) => (
            <article
              key={idx}
              className="relative rounded-lg shadow-lg bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center h-56 p-6"
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 mb-4"></div>
              <h3 className="text-lg font-medium text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/90">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}