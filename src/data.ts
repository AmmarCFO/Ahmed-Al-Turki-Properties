import { OwnerProfile, BranchDetails, OperatingReport } from './types';

export const logoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

export const ownerProfile: OwnerProfile = {
  salutation: {
    ar: "السيد المحترم",
    en: "Esteemed Owner"
  },
  name: {
    ar: "أحمد التركي",
    en: "Ahmed Al Turki"
  },
  ownerCode: "OWNER-TRK-2026-088",
  email: "a.alturki@turkigroup.sa",
  phone: "+966 50 541 9820",
  contractDate: "2024-01-15",
  totalBranches: 3,
  totalUnits: 78,
  cumulativeEarnings: 4280225 // SAR total net payouts
};

export const branchesList: BranchDetails[] = [
  {
    id: "malqa-5",
    branchNumber: "5",
    fullCode: "MTH-MLQ-05",
    name: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    location: {
      ar: "الرياض - حي الملقا - طريق أنس بن مالك",
      en: "Riyadh - Al Malqa District - Anas Ibn Malik Rd"
    },
    district: {
      ar: "حي الملقا، شمال الرياض",
      en: "Al Malqa District, North Riyadh"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "طريق أنس بن مالك تقاطع الملك فهد، الملقا، الرياض",
      en: "Anas Ibn Malik Rd / King Fahd Intersection, Al Malqa, Riyadh"
    },
    photos: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/9fa044f16_DSC04139.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/05d9da676_DSC04140.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/f1ca3b5ac_DSC04141.jpg"
    ],
    totalUnits: 33,
    unitBreakdown: [
      { type: { ar: "استوديو تنفيذية فاخرة", en: "Executive Studios" }, count: 13, avgMonthlyRate: "5,200 SAR" },
      { type: { ar: "شقق غرفة وصالة فاخرة", en: "1-Bedroom Luxury Apartments" }, count: 20, avgMonthlyRate: "6,500 SAR" }
    ],
    contactPhone: "+966 56 208 9171"
  },
  {
    id: "sulaimaniyah-18",
    branchNumber: "18",
    fullCode: "MTH-SLM-18",
    name: {
      ar: "مثوى ١٨: السليمانية",
      en: "Mathwaa 18: Al Sulaimaniyah"
    },
    location: {
      ar: "الرياض - حي السليمانية - طريق الملك عبد العزيز",
      en: "Riyadh - Al Sulaimaniyah - King Abdulaziz Rd"
    },
    district: {
      ar: "حي السليمانية، وسط الرياض",
      en: "Al Sulaimaniyah District, Central Riyadh"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "شارع الأميرة مضاوي تقاطع طريق الملك عبد العزيز، السليمانية",
      en: "Princess Madawi St / King Abdulaziz Rd, Al Sulaimaniyah"
    },
    photos: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/9fa044f16_DSC04139.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/05d9da676_DSC04140.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/f1ca3b5ac_DSC04141.jpg"
    ],
    totalUnits: 20,
    unitBreakdown: [
      { type: { ar: "شقق غرفتين وصالة VIP", en: "2BR Executive VIP Apartments" }, count: 20, avgMonthlyRate: "8,200 SAR" }
    ],
    contactPhone: "+966 56 208 9173"
  },
  {
    id: "yasmin-25",
    branchNumber: "25",
    fullCode: "MTH-YSM-25",
    name: {
      ar: "مثوى ٢٥: الياسمين",
      en: "Mathwaa 25: Al Yasmin"
    },
    location: {
      ar: "الرياض - حي الياسمين - طريق الثمامة",
      en: "Riyadh - Al Yasmin District - Al Thumamah Rd"
    },
    district: {
      ar: "حي الياسمين، شمال الرياض",
      en: "Al Yasmin District, North Riyadh"
    },
    city: {
      ar: "الرياض",
      en: "Riyadh"
    },
    address: {
      ar: "طريق الثمامة بالقرب من طريق التخصصي، الياسمين، الرياض",
      en: "Al Thumamah Rd near Takhassusi, Al Yasmin, Riyadh"
    },
    photos: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/b05e0b8d2_AWA-1.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5302a9274_AWA-2.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5dc99f682_AWA-3.jpg",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69add2ecc765bc8a92d7458f/5df9b6fc7_AWA-4.jpg"
    ],
    totalUnits: 25,
    unitBreakdown: [
      { type: { ar: "استوديو مؤثث", en: "Furnished Studio" }, count: 10, avgMonthlyRate: "4,800 SAR" },
      { type: { ar: "شقة غرفة وصالة", en: "1BR Apartment" }, count: 15, avgMonthlyRate: "5,900 SAR" }
    ],
    contactPhone: "+966 56 208 9172"
  }
];

export const initialOperatingReports: OperatingReport[] = [
  {
    id: "REP-2026-08",
    reportNumber: "REP-2026-08",
    periodKey: "2026-08",
    periodName: {
      ar: "أغسطس 2026",
      en: "August 2026"
    },
    quarter: "Q3 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 97.2,
    totalRevenue: 258000,
    operatorSharePercentage: 15,
    operatorShareAmount: 38700,
    netToOwner: 219300,
    totalUnits: 33,
    occupiedUnits: 32,
    adr: 325,
    revPar: 316,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 210000, percentage: 81.4 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 38000, percentage: 14.7 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 10000, percentage: 3.9 }
    ],
    maintenanceCostsCovered: 8400,
    utilitiesCostCovered: 12100,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260802-9981",
    payoutDate: "2026-08-02",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "تم تجديد عقد الإيجار المؤسسي مع وفد هيئة تطوير الرياض لـ 12 وحدة إضافية لمدة سنة كاملة. تم إجراء الفحص الدوري الشامل لأنظمة التكييف والمصاعد، وحالة المبنى ممتازة بدون أي أعطال أو شكاوى.",
      en: "Successfully renewed annual corporate lease agreement for 12 units with the Riyadh Development Authority delegation. Complete HVAC and elevator preventive maintenance executed with zero tenant complaints."
    },
    additionalRemarks: [
      {
        id: "rem-101",
        author: "إدارة التشغيل (مثوى)",
        role: "operator",
        date: "2026-08-01",
        content: "تم تحويل صافي المستحقات لحساب المالك المعتمد لدى مصرف الراجحي بنجاح."
      }
    ]
  },
  {
    id: "REP-2026-07",
    reportNumber: "REP-2026-07",
    periodKey: "2026-07",
    periodName: {
      ar: "يوليو 2026",
      en: "July 2026"
    },
    quarter: "Q3 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 95.8,
    totalRevenue: 248500,
    operatorSharePercentage: 15,
    operatorShareAmount: 37275,
    netToOwner: 211225,
    totalUnits: 33,
    occupiedUnits: 31,
    adr: 318,
    revPar: 304,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 205000, percentage: 82.5 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 34500, percentage: 13.9 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 9000, percentage: 3.6 }
    ],
    maintenanceCostsCovered: 7200,
    utilitiesCostCovered: 11800,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260703-8821",
    payoutDate: "2026-07-03",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "ارتفعت نسبة الإشغال خلال شهر يوليو بالتزامن مع موسم التدريب الصيفي للشركات الكبرى بالرياض. تم الانتهاء من صيانة واجهة المبنى وإضافة نباتات زينة جديدة للمدخل.",
      en: "Occupancy rate climbed to 95.8% driven by summer corporate onboarding cycles in Riyadh. Facade refresh and main entrance landscaping enhancements completed."
    }
  },
  {
    id: "REP-2026-06",
    reportNumber: "REP-2026-06",
    periodKey: "2026-06",
    periodName: {
      ar: "يونيو 2026",
      en: "June 2026"
    },
    quarter: "Q2 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 93.4,
    totalRevenue: 239000,
    operatorSharePercentage: 15,
    operatorShareAmount: 35850,
    netToOwner: 203150,
    totalUnits: 33,
    occupiedUnits: 30,
    adr: 310,
    revPar: 289,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 198000, percentage: 82.8 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 33000, percentage: 13.8 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 8000, percentage: 3.4 }
    ],
    maintenanceCostsCovered: 6500,
    utilitiesCostCovered: 11200,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260602-7712",
    payoutDate: "2026-06-02",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "تم سداد الفواتير الحكومية والصيانة الدورية بواسطة المشغل دون أي استقطاع من حصة المالك.",
      en: "All utility overheads and technical routines handled seamlessly by operator."
    }
  },
  {
    id: "REP-2026-Q2",
    reportNumber: "REP-2026-Q2",
    periodKey: "2026-Q2",
    periodName: {
      ar: "التقرير الربع سنوي - Q2 2026",
      en: "Quarterly Summary - Q2 2026"
    },
    quarter: "Q2 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 94.8,
    totalRevenue: 735000,
    operatorSharePercentage: 15,
    operatorShareAmount: 110250,
    netToOwner: 624750,
    totalUnits: 33,
    occupiedUnits: 31,
    adr: 315,
    revPar: 298,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 610000, percentage: 83.0 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 100000, percentage: 13.6 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 25000, percentage: 3.4 }
    ],
    maintenanceCostsCovered: 21000,
    utilitiesCostCovered: 34000,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260701-Q2SUM",
    payoutDate: "2026-07-01",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "ملخص الأداء التشغيلي للربع الثاني لعام 2026. بلغت الأرباح الموزعة للمالك 624,750 ريال بنسبة نمو 8.5% مقارنة بالربع السابق.",
      en: "Comprehensive Q2 2026 performance statement. Total net dividend to owner reached 624,750 SAR, showing an 8.5% quarter-on-quarter yield growth."
    }
  },
  {
    id: "REP-2026-05",
    reportNumber: "REP-2026-05",
    periodKey: "2026-05",
    periodName: {
      ar: "مايو 2026",
      en: "May 2026"
    },
    quarter: "Q2 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 92.1,
    totalRevenue: 232000,
    operatorSharePercentage: 15,
    operatorShareAmount: 34800,
    netToOwner: 197200,
    totalUnits: 33,
    occupiedUnits: 30,
    adr: 308,
    revPar: 283,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 192000, percentage: 82.7 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 32000, percentage: 13.8 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 8000, percentage: 3.5 }
    ],
    maintenanceCostsCovered: 5800,
    utilitiesCostCovered: 10900,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260502-6102",
    payoutDate: "2026-05-02",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "تم استبدال المفارش والسجاد لـ 5 وحدات سكنية في الدور الثاني ضمن خطة التجديد الدورية للفرع.",
      en: "Linens and floorings updated across 5 units on the second floor as part of the scheduled quality assurance cycle."
    }
  },
  {
    id: "REP-2026-04",
    reportNumber: "REP-2026-04",
    periodKey: "2026-04",
    periodName: {
      ar: "أبريل 2026",
      en: "April 2026"
    },
    quarter: "Q2 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 98.8,
    totalRevenue: 264000,
    operatorSharePercentage: 15,
    operatorShareAmount: 39600,
    netToOwner: 224400,
    totalUnits: 33,
    occupiedUnits: 33,
    adr: 332,
    revPar: 328,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 218000, percentage: 82.5 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 36000, percentage: 13.6 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 10000, percentage: 3.9 }
    ],
    maintenanceCostsCovered: 8900,
    utilitiesCostCovered: 12500,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260403-5190",
    payoutDate: "2026-04-03",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "حقق شهر أبريل نسبة إشغال كاملة (100% تقريباً) مدفوعة بطلب متزايد خلال فترة فعاليات ومؤتمرات الرياض التنفيذية.",
      en: "April recorded peak near 100% full occupancy fueled by high executive movement and corporate conference stays in Riyadh."
    }
  },
  {
    id: "REP-2026-Q1",
    reportNumber: "REP-2026-Q1",
    periodKey: "2026-Q1",
    periodName: {
      ar: "التقرير الربع سنوي - Q1 2026",
      en: "Quarterly Summary - Q1 2026"
    },
    quarter: "Q1 2026",
    year: 2026,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 95.1,
    totalRevenue: 742000,
    operatorSharePercentage: 15,
    operatorShareAmount: 111300,
    netToOwner: 630700,
    totalUnits: 33,
    occupiedUnits: 31,
    adr: 319,
    revPar: 303,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 615000, percentage: 82.8 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 102000, percentage: 13.7 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 25000, percentage: 3.5 }
    ],
    maintenanceCostsCovered: 22000,
    utilitiesCostCovered: 33500,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260401-Q1SUM",
    payoutDate: "2026-04-01",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "تقرير الربع الأول لعام 2026. استقرار عالي في التدفقات النقدية مع استكمال سداد جميع الالتزامات التشغيلية وحسابات المالك بانتظام.",
      en: "Q1 2026 consolidated executive performance report. Robust cashflow stability and 100% on-time owner distributions."
    }
  },
  {
    id: "REP-2025-FY",
    reportNumber: "REP-2025-FY",
    periodKey: "2025-FY",
    periodName: {
      ar: "التقرير السنوي الختامي لعام 2025",
      en: "Annual Operating Report - FY 2025"
    },
    quarter: "FY 2025",
    year: 2025,
    branchId: "malqa-5",
    branchName: {
      ar: "مثوى ٥: الملقا",
      en: "Mathwaa 5: Al Malqa"
    },
    occupancyRate: 93.8,
    totalRevenue: 2820000,
    operatorSharePercentage: 15,
    operatorShareAmount: 423000,
    netToOwner: 2397000,
    totalUnits: 33,
    occupiedUnits: 31,
    adr: 312,
    revPar: 292,
    revenueBreakdown: [
      { category: { ar: "عقود الإيجار السكني للشركات", en: "Corporate B2B Leases" }, amount: 2340000, percentage: 83.0 },
      { category: { ar: "الإقامات التنفيذية قصيرة المدى", en: "Short-Term Executive Stays" }, amount: 380000, percentage: 13.5 },
      { category: { ar: "خدمات الضيافة والخدمات المضافة", en: "Auxiliary Hospitality Services" }, amount: 100000, percentage: 3.5 }
    ],
    maintenanceCostsCovered: 85000,
    utilitiesCostCovered: 132000,
    payoutStatus: "transferred",
    payoutRef: "TXN-20260105-ANN2025",
    payoutDate: "2026-01-05",
    bankAccount: "مصرف الراجحي - SA41 8000 0000 1289 **** 4821",
    notes: {
      ar: "التقرير السنوي الشامل لعام 2025 لمثوى 5: الملقا. أظهر العقار متانة مالية ونسبة إشغال تجاوزت المستهدف السنوي (90%) مع تحسين مستمر للقيمة السوقية للعقار.",
      en: "Consolidated annual operating reference for FY 2025. Property demonstrated outstanding yield outperforming annual occupancy targets by 3.8%."
    }
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
