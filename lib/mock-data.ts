import { CreditApplication, RentalListing } from './types';

export const generateCreditData = (): CreditApplication[] => {
  const data: CreditApplication[] = [];
  
  // 5000 records
  for(let i=0; i<5000; i++) {
    const isWidowed = i < 1000; // 20% widowed
    const isMarried = i >= 1000 && i < 3000; // 40% married
    
    let approved = false;
    if (isWidowed) {
      approved = (i % 100) < 34; // 34% approval
    } else if (isMarried) {
      approved = (i % 100) < 71; // 71% approval
    } else {
      approved = (i % 100) < 50;
    }

    data.push({
      id: `CR-${i}`,
      applicant_name: `Applicant ${i}`,
      age: 30 + (i % 20),
      gender: 'Female',
      marital_status: isWidowed ? 'Widowed' : isMarried ? 'Married' : 'Single',
      cibil_score: 750 + (i % 50),
      monthly_income: 50000 + (i % 10000),
      loan_amount: 500000 + (i % 100000),
      state: (i % 3 === 0) ? 'Uttar Pradesh' : (i % 3 === 1) ? 'Rajasthan' : 'Kerala',
      approved
    });
  }
  return data;
};

export const generateRentalData = (): RentalListing[] => {
  const data: RentalListing[] = [];
  
  // 3000 records
  for(let i=0; i<3000; i++) {
    const isSingle = i < 1500;
    const hasMaleCoApplicant = isSingle && (i % 2 === 0);
    const isCouple = !isSingle;

    let response_received = false;
    if (isSingle && !hasMaleCoApplicant) {
      response_received = (i % 100) < 18; // 18%
    } else if (isSingle && hasMaleCoApplicant) {
      response_received = (i % 100) < 64; // 64% lift
    } else if (isCouple) {
      response_received = (i % 100) < 67; // 67%
    }

    data.push({
      id: `RN-${i}`,
      applicant_name: `Applicant ${i}`,
      gender: 'Female',
      marital_status: isSingle ? 'Single' : 'Married',
      co_applicant: hasMaleCoApplicant ? 'Male' : (isCouple ? 'Male' : 'None'),
      state: 'Maharashtra',
      response_received
    });
  }
  return data;
}

export const mockCreditData = generateCreditData();
export const mockRentalData = generateRentalData();

export const mockAggregates = {
  credit: {
    widowedApproval: 34,
    marriedApproval: 71
  },
  rental: {
    singleResponse: 18,
    coupleResponse: 67,
    maleCoApplicantResponse: 64
  },
  regionalMultipliers: {
    'Uttar Pradesh': 1.6,
    'Rajasthan': 1.5,
    'Kerala': 0.7
  }
};
