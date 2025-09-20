// components/CRMComparison.tsx
'use client';

const comparisonData = [
  {
    feature: 'إدارة العملاء',
    yourCRM: 'متقدمة: تنظيم وتخزين بيانات العملاء، متابعة المحادثات، تنبيهات فورية.',
    miniAccountingCRM: 'محدودة: تخزين بيانات أساسية فقط، متابعة أقل دقة.'
  },
  {
    feature: 'حماية البيانات',
    yourCRM: 'تشفير متقدم وضمان سرية المعلومات، موثوقية عالية.',
    miniAccountingCRM: 'مستوى أمان متوسط، يعتمد غالباً على حماية المحاسبة الأساسية.'
  },
  {
    feature: 'خدمة العملاء',
    yourCRM: 'دعم سريع, تحسين رضا العملاء بشكل كبير.',
    miniAccountingCRM: 'خدمة عملاء أساسية،  تقارير عادية.'
  },
  {
    feature: 'تقارير وتحليلات',
    yourCRM: 'تقارير تفصيلية ,إمكانية اتخاذ قرارات استراتيجية.',
    miniAccountingCRM: 'تقارير محاسبية محدودة، تحليل العملاء ضعيف.'
  },
  {
    feature: 'سهولة الاستخدام',
    yourCRM: 'واجهة حديثة وسهلة الاستخدام، يمكن لفريقك العمل بدون تدريب طويل.',
    miniAccountingCRM: 'واجهة أساسية، تحتاج تدريب قليل لكنها محدودة بالوظائف.'
  },
];

export default function CRMComparison() {
  return (
    <section className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-2xl shadow-lg mt-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
        مقارنة بين شات سينتر وبرنامج  CRM عادي
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className=" bg-gradient-to-br from-[#4828B7] to-[#6E3AFF] text-white">
            <tr>
              <th className="p-4 text-right">الميزة</th>
              <th className="p-4 text-right"> شات سينتر</th>
              <th className="p-4 text-right">نظام crm عادي </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                <td className="p-4 text-gray-700">{row.yourCRM}</td>
                <td className="p-4 text-gray-700">{row.miniAccountingCRM}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
