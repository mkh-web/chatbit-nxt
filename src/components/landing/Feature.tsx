'use client';

import React from 'react';
import Image from 'next/image';

export default function Feature() {
  return (
    <>
      {/* SECTION 1: Text on Left, Image on Right */}
      <section dir="rtl" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                إدارة علاقات عملاء فعّالة
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                مركز موحد لبيانات عملائك، من اللحظة الأولى للتواصل وحتى إتمام الصفقة وما بعدها. حسّن مبيعاتك وخدمة عملائك.              </p>
              <ul className="text-gray-800 text-lg space-y-3 mb-8">
                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>تتبع المحادثات .</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>تصنيف الرسائل وتوجيهها إلى القسم المعني.</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>أرشفة سجلات المحادثات للرجوع إليها مستقبلاً.</span>
                </li>

              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
              >
                اكتشف المزيد
                <svg
                  className="ms-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Right Side: Image/Visual */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/Frame_108.png"
                  alt="Chat management system dashboard"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Image on Left, Text on Right */}
      <section dir="rtl" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            {/* Left Side: Image/Visual */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
              <div className="relative w-full max-w-lg h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/Frame_109.png"
                  alt="Data analysis dashboard"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-right ">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                إدارة مشاريع متكاملة
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                خطط، نفّذ، وتتبع مشاريعك بكفاءة. استخدم لوحات الكانبان، التقاويم المشتركة، وحدد المهام بوضوح لضمان إنجاز العمل.              </p>
              <ul className="text-gray-800 text-lg space-y-3 mb-8">

                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>تحديد الاتجاهات ونقاط الألم لدى العملاء.</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>إنشاء تقارير .</span>
                </li>

              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
              >
                شاهد كيف
                <svg
                  className="ms-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Text on Left, Image on Right */}
      <section dir="rtl" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2 text-center lg:text-right mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                تخطيط وتنظيم المحتوى
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                نظّم تقويم النشر، أدر حملاتك التسويقية، تتبع أداء المحتوى، وتعاون مع فريقك لإنتاج محتوى جذاب ومنظم.              </p>
              <ul className="text-gray-800 text-lg space-y-3 mb-8">
              
          
                <li className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-purple-500 text-2xl">✓</span>
                  <span>تحسين أوقات الاستجابة والكفاءة.</span>
                </li>

              </ul>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
              >
                اكتشف المزيد
                <svg
                  className="ms-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Right Side: Image/Visual */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/Frame_110.png"
                  alt="Team collaboration dashboard"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
