import { mockCreditData, mockRentalData, mockAggregates } from './mock-data';
import { CreditApplication, RentalListing } from './types';

const IS_DEMO = process.env.NEXT_PUBLIC_MODE === 'demo' || true; // default to true for now since backend is not up

export async function getCreditData(): Promise<CreditApplication[]> {
  if (IS_DEMO) {
    return mockCreditData;
  }
  return [];
}

export async function getRentalData(): Promise<RentalListing[]> {
  if (IS_DEMO) {
    return mockRentalData;
  }
  return [];
}

export async function getAggregates() {
  if (IS_DEMO) {
    return mockAggregates;
  }
  return mockAggregates;
}
