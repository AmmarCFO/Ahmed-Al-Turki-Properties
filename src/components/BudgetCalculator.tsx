import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ShieldCheck, Sparkles } from 'lucide-react';
import { ownerProfile } from '../data';

interface BudgetCalculatorProps {
  isAr: boolean;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({ isAr }) => {
  const [totalUnits, setTotalUnits] = useState<number>(33);
  const [avgMonthlyRate, setAvgMonthlyRate] = useState<number>(6000);
  const [targetOccupancy, setTargetOccupancy] = useState<number>(95);
  const [operatorSharePct, setOperatorSharePct] = useState<number>(15);

  const totalPossibleMonthlyRevenue = totalUnits * avgMonthlyRate;
  const projectedMonthlyRevenue = Math.round((totalPossibleMonthlyRevenue * targetOccupancy) / 100);
  const operatorFeeMonthly = Math.round((projectedMonthlyRevenue * operatorSharePct) / 100);
  const netMonthlyPayoutToOwner = projectedMonthlyRevenue - operatorFeeMonthly;

  const projectedAnnualNet = netMonthlyPayoutToOwner * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EDE5DC] shadow-xs max-w-5xl mx-auto space-y-8 my-6"
    >
      {/* Header */}
      <div className="border-b border-[#EDE5DC] pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#8B6F47] uppercase tracking-wider bg-[#B8865F]/15 px-3 py-0.5 rounded-full border border-[#C89565]/30 flex items-center gap-1 w-fit">
            <Sparkles className="w-3 h-3 text-[#B8865F] animate-pulse" />
            {isAr ? 'حاسبة المحاكاة والتوقعات' : 'Yield Projection Calculator'}
          </span>
          <h2 className="text-2xl font-extrabold text-[#1d1d1f] mt-1">
            {isAr ? 'حاسبة توقعات الأرباح والتوزيعات للمالك' : 'Owner Yield Calculator'}
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            {isAr
              ? `محاكاة تفاعلية مخصصة لـ ${ownerProfile.name.ar} لتوقع العوائد الشهرية والسنوية.`
              : `Interactive yield calculator tailored for ${ownerProfile.name.en}.`}
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EDE5DC] flex items-center gap-2 shadow-2xs"
        >
          <ShieldCheck className="w-5 h-5 text-[#B8865F]" />
          <span className="text-xs font-bold text-[#1d1d1f]">
            {isAr ? 'نموذج تشغيل مثوى 100%' : 'Mathwaa Managed Model'}
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6 bg-[#FAF7F2] p-6 rounded-3xl border border-[#EDE5DC]">
          <h3 className="text-sm font-extrabold text-[#1d1d1f] uppercase tracking-wider flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#B8865F]" />
            <span>{isAr ? 'مدخلات الفرع والعقار' : 'Simulation Parameters'}</span>
          </h3>

          {/* Units Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#8B6F47]">{isAr ? 'عدد الوحدات السكنية' : 'Number of Units'}</span>
              <span className="text-[#1d1d1f] font-black text-sm bg-white px-3 py-1 rounded-xl border border-[#EDE5DC]">
                {totalUnits} {isAr ? 'وحدة' : 'units'}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={totalUnits}
              onChange={(e) => setTotalUnits(parseInt(e.target.value))}
              className="w-full accent-[#B8865F] cursor-pointer"
            />
          </div>

          {/* Average Monthly Rate Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#8B6F47]">{isAr ? 'متوسط إيجار الوحدة الشهري (ريال)' : 'Avg Monthly Unit Rate (SAR)'}</span>
              <span className="text-[#1d1d1f] font-black text-sm bg-white px-3 py-1 rounded-xl border border-[#EDE5DC]">
                {avgMonthlyRate.toLocaleString()} SAR
              </span>
            </div>
            <input
              type="range"
              min="3000"
              max="12000"
              step="250"
              value={avgMonthlyRate}
              onChange={(e) => setAvgMonthlyRate(parseInt(e.target.value))}
              className="w-full accent-[#B8865F] cursor-pointer"
            />
          </div>

          {/* Target Occupancy Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#8B6F47]">{isAr ? 'مستهدف نسبة الإشغال (%)' : 'Target Occupancy (%)'}</span>
              <span className="text-emerald-700 font-black text-sm bg-white px-3 py-1 rounded-xl border border-emerald-200">
                {targetOccupancy}%
              </span>
            </div>
            <input
              type="range"
              min="60"
              max="100"
              step="1"
              value={targetOccupancy}
              onChange={(e) => setTargetOccupancy(parseInt(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Operator Share Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#8B6F47]">{isAr ? 'حصة المشغل الإدارية (%)' : 'Operator Fee Share (%)'}</span>
              <span className="text-stone-800 font-black text-sm bg-white px-3 py-1 rounded-xl border border-[#EDE5DC]">
                {operatorSharePct}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="25"
              step="1"
              value={operatorSharePct}
              onChange={(e) => setOperatorSharePct(parseInt(e.target.value))}
              className="w-full accent-stone-700 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Display Column */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            key={`${netMonthlyPayoutToOwner}-${projectedAnnualNet}`}
            initial={{ scale: 0.98, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#1d1d1f] via-[#2a2622] to-[#1a1714] text-white p-6 sm:p-8 rounded-3xl border border-[#B8865F]/40 shadow-lg space-y-6 relative overflow-hidden"
          >
            <motion.div
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C89565]/20 to-transparent pointer-events-none"
            />

            <div className="relative z-10">
              <span className="text-xs font-bold text-[#E0C9B1] uppercase tracking-widest block">
                {isAr ? 'صافي أرباح المالك المتوقعة شهرياً' : 'Projected Monthly Net to Owner'}
              </span>
              <p className="text-3xl sm:text-4xl font-black text-[#F3E5D8] mt-1">
                {netMonthlyPayoutToOwner.toLocaleString()} <span className="text-sm font-normal text-[#C89565]">{isAr ? 'ريال / شهرياً' : 'SAR / mo'}</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-700 text-xs relative z-10">
              <div>
                <span className="text-stone-400 block">{isAr ? 'إجمالي الإيرادات الشهري' : 'Gross Monthly Revenue'}</span>
                <span className="font-extrabold text-white text-base mt-0.5 block">{projectedMonthlyRevenue.toLocaleString()} SAR</span>
              </div>
              <div>
                <span className="text-stone-400 block">{isAr ? 'حصة المشغل الشهري' : 'Operator Monthly Fee'}</span>
                <span className="font-bold text-stone-300 text-base mt-0.5 block">{operatorFeeMonthly.toLocaleString()} SAR</span>
              </div>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl border border-white/15 relative z-10">
              <span className="text-xs font-bold text-[#E0C9B1] block">
                {isAr ? 'التوقع السنوي التراكمي' : 'Projected Annual Net Payout'}
              </span>
              <p className="text-2xl font-black text-white mt-1">
                {projectedAnnualNet.toLocaleString()} <span className="text-xs font-normal text-[#C89565]">{isAr ? 'ريال سنوياً' : 'SAR / year'}</span>
              </p>
              <p className="text-[11px] text-stone-300 mt-1">
                {isAr ? 'يشمل التزام مثوى بتغطية الصيانة والتسويق والإدارة بشكل كامل.' : 'Includes full maintenance and operations management.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
