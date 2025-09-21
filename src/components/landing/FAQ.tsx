// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'كيف يساعد النظام في إدارة المعلومات؟',
    answer: 'النظام يوفر تنظيم وتخزين بيانات العملاء بشكل آمن مع إمكانية الوصول إليها بسهولة في أي وقت، مما يجعل إدارة العملاء أكثر فعالية ويقلل من ضياع المعلومات.'
  },
  {
    question: 'هل بياناتي محمية في النظام؟',
    answer: 'باستخدام أحدث تقنيات التشفير، يضمن النظام سرية المعلومات وحمايتها من أي اختراق، ما يعزز ثقة العملاء بالنظام والمؤسسة.'
  },
  {
    question: 'كيف يحسن النظام تجربة العملاء؟',
    answer: 'يتيح النظام تقديم دعم سريع وفعال عبر قنوات متعددة، مع تنبيهات فورية، ما يرفع مستوى رضا العملاء ويحسن من تواصلهم مع المؤسسة.'
  },
  {
    question: 'هل هناك أمثلة على نجاح النظام؟',
    answer: 'تجارب المؤسسات مثل بيت اكس وشركة المستقبل أظهرت تحسنًا كبيرًا في إدارة العملاء، تنظيم المحادثات، وتقارير تفصيلية توفر وقت وجهد الفريق.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleIndex(index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
