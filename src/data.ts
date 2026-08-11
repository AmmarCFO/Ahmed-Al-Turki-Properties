import { OwnerProfile, BranchDetails, OperatingReport } from './types';

export const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

export const ownerProfile: OwnerProfile = {
  salutation: {
    ar: "السيد",
    en: "Mr."
  },
  name: {
    ar: "ميسون إبراهيم",
    en: "Maisoon Ibrahim"
  },
  ownerCode: "OWNER-MIB-2026-057",
  email: "m.ibrahim@mathwaa.com",
  phone: "+966 50 123 4567",
  contractDate: "2026-04-25",
  totalBranches: 1,
  totalUnits: 3,
  cumulativeEarnings: 14441.67
};

export const branchesList: BranchDetails[] = [
  {
    id: "sahman-57",
    branchNumber: "57",
    fullCode: "MTH-SHM-57",
    name: {
      ar: "مثوى ٥٧: حي السهمان",
      en: "Mathwaa 57: Al-Sahman District"
    },
    location: {
      ar: "الرياض - حي السهمان",
      en: "Riyadh - Al-Sahman District"
    },
    district: {
      ar: "حي السهمان، الرياض",
      en: "Al-Sahman District, Riyadh"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "حي السهمان، الرياض، المملكة العربية السعودية",
      en: "Al-Sahman District, Riyadh, Kingdom of Saudi Arabia"
    },
    photos: [
      "/branch-1.jpg",
      "/branch-2.jpg",
      "/branch-3.jpg",
      "/branch-4.jpg",
      "/branch-5.jpg"
    ],
    totalUnits: 3,
    unitBreakdown: [
      { type: { ar: "شقق سكنية مفروشة فاخرة", en: "Luxury Furnished Residential Units" }, count: 3, avgMonthlyRate: "7,026.27 SAR" }
    ],
    contactPhone: "+966 56 208 9171"
  }
];

export const initialOperatingReports: OperatingReport[] = [
  {
    id: "REP-57-01",
    reportNumber: "1",
    periodKey: "2026-Q2-Q3",
    periodName: {
      ar: "٢٥ أبريل ٢٠٢٦ - ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    periodDates: {
      ar: "من ٢٥ أبريل ٢٠٢٦ إلى ٣١ يوليو ٢٠٢٦",
      en: "25 Apr 2026 to 31 Jul 2026"
    },
    quarter: "25 Apr 2026 - 31 Jul 2026",
    year: 2026,
    branchId: "sahman-57",
    branchName: {
      ar: "مثوى ٥٧: حي السهمان",
      en: "Mathwaa 57 — Al-Sahman District"
    },
    tagline: {
      ar: "بيتك، راحتك وطمأنينتك",
      en: "Your home, comfort and peace of mind"
    },
    clientName: {
      ar: "السيد ميسون إبراهيم",
      en: "Mr. Maisoon Ibrahim"
    },
    
    // Core Required Metrics from User Prompt
    occupancyRate: 38,
    totalContracts: 20225.91,
    totalRevenue: 22484.09,
    avgMonthlyReturn: 7026.27,
    directExpenses: 727.76,
    capitalExpenses: 0.00,
    operatorSharePercentage: 25,
    operatorShareAmount: 5056.47,
    netToOwner: 14441.67,

    totalUnits: 3,
    occupiedUnits: 1,
    adr: 242,
    revPar: 92,
    revenueBreakdown: [
      { category: { ar: "إجمالي قيمة العقود الإيجارية المبرمة", en: "Total Rental Contracts" }, amount: 20225.91, percentage: 89.95 },
      { category: { ar: "إيرادات مضافة وتمديدات إقامة", en: "Additional Extensions & Revenue" }, amount: 2258.18, percentage: 10.05 }
    ],
    maintenanceCostsCovered: 727.76,
    utilitiesCostCovered: 0,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260731-MTH57",
    payoutDate: "2026-07-31",
    bankAccount: "",
    notes: {
      ar: "تضم المنشأة 3 وحدات سكنية سجلت نسبة إشغال 38% خلال الفترة من 25 أبريل 2026 إلى 31 يوليو 2026. بلغ إجمالي العقود 20,225.91 ريال، مع إجمالي إيراد للفترة قدره 22,484.09 ريال، بمتوسط عائد شهري 7,026.27 ريال. بلغت المصاريف المباشرة 727.76 ريال وبدون مصاريف رأسمالية. بلغت حصة المشغل (25%) مبلغ 5,056.47 ريال، ليتبقى صافي عائد للمالك قدره 14,441.67 ريال.",
      en: "The property comprises 3 units, which recorded an occupancy rate of 38% over the period from 25 Apr 2026 to 31 Jul 2026. Total contracts amounted to SAR 20,225.91, with total revenue for the period of SAR 22,484.09, giving an average monthly return of SAR 7,026.27. Against this, direct expenses were SAR 727.76 and capital expenses were nil. The operator's share, calculated at 25%, came to SAR 5,056.47. This leaves a net return to the client of SAR 14,441.67."
    },
    additionalRemarks: [
      {
        id: "rem-57-101",
        author: "إدارة التشغيل (مثوى)",
        role: "operator",
        date: "2026-07-31",
        content: "تم اعتماد المستند المالي رقم 1 وتحويل صافي العائد النهائي 14,441.67 ريال إلى السيد ميسون إبراهيم."
      }
    ]
  }
];

export const mathwaaBrandInfo = {
  hqAddress: {
    ar: "الصحافة، الرياض، المملكة العربية السعودية",
    en: "Al Sahafah District, Riyadh, Kingdom of Saudi Arabia"
  },
  phoneDirect: "+966 56 208 9171",
  phoneTollFree: "+966 9200 15627",
  email: "owners@mathwaa.com",
  website: "www.mathwaa.com"
};
