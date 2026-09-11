export interface CreditApplication {
  id: string;
  applicant_name: string;
  age: number;
  gender: 'Female' | 'Male' | 'Other';
  marital_status: 'Single' | 'Married' | 'Widowed' | 'Divorced';
  cibil_score: number;
  monthly_income: number;
  loan_amount: number;
  state: string;
  approved: boolean;
}

export interface RentalListing {
  id: string;
  applicant_name: string;
  gender: 'Female' | 'Male' | 'Other';
  marital_status: 'Single' | 'Married' | 'Widowed' | 'Divorced';
  co_applicant: 'None' | 'Male' | 'Female';
  state: string;
  response_received: boolean;
}

export interface BiasMetrics {
  disparate_impact_ratio: number;
  statistical_parity_difference: number;
  equalized_odds_difference: number;
}
