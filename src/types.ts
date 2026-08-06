export type Language = 'ar' | 'en';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface OwnerProfile {
  name: LocalizedString;
  salutation: LocalizedString;
  ownerCode: string;
  email: string;
  phone: string;
  contractDate: string;
  totalBranches: number;
  totalUnits: number;
  cumulativeEarnings: number;
}

export interface UnitMixItem {
  type: LocalizedString;
  count: number;
  avgMonthlyRate: string;
}

export interface BranchDetails {
  id: string;
  branchNumber: string;
  name: LocalizedString;
  fullCode: string;
  location: LocalizedString;
  district: LocalizedString;
  city: LocalizedString;
  address: LocalizedString;
  photos: string[];
  totalUnits: number;
  unitBreakdown: UnitMixItem[];
  contactPhone: string;
  mapEmbedUrl?: string;
}

export interface ReportNote {
  id: string;
  author: string;
  role: 'operator' | 'owner';
  date: string;
  content: string;
}

export interface RevenueCategory {
  category: LocalizedString;
  amount: number;
  percentage: number;
}

export interface OperatingReport {
  id: string;
  reportNumber: string; // e.g. "REP-2026-07"
  periodKey: string;    // e.g. "2026-07"
  periodName: LocalizedString; // e.g. "July 2026" / "يوليو 2026"
  quarter: string;      // "Q3 2026"
  year: number;         // 2026
  branchId: string;     // e.g. "malqa-5"
  branchName: LocalizedString; // e.g. "Mathwaa 5: Al Malqa"
  
  // Core Required Metrics
  occupancyRate: number;
  totalRevenue: number;
  operatorSharePercentage: number;
  operatorShareAmount: number;
  netToOwner: number;

  // Rich Breakdown
  totalUnits: number;
  occupiedUnits: number;
  adr: number;
  revPar: number;
  revenueBreakdown: RevenueCategory[];
  maintenanceCostsCovered: number;
  utilitiesCostCovered: number;
  
  // Payout Details
  payoutStatus: 'transferred' | 'pending' | 'processing';
  payoutRef: string;
  payoutDate: string;
  bankAccount: string;

  // Notes Field
  notes: LocalizedString;
  additionalRemarks?: ReportNote[];
}

export type ViewTab = 'board' | 'branches' | 'analytics' | 'calculator';
