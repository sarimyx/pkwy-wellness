import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Payment link token utilities
const SECRET_KEY = process.env.NEXT_PUBLIC_PAYMENT_SECRET || 'default-payment-secret-key';

export interface PaymentParams {
  amount: string;
  customer?: string;
  paymentFor?: string;
}

// Create a secure token that contains all payment data
export function createPaymentToken(params: PaymentParams): string {
  const { amount, customer, paymentFor } = params;

  // Create a data object with all information
  const paymentData = {
    amount,
    customer: customer || '',
    paymentFor: paymentFor || '',
    timestamp: Date.now(), // Add timestamp for uniqueness
  };

  // Convert to JSON and base64 encode
  const jsonString = JSON.stringify(paymentData);
  const base64Data = btoa(jsonString);

  // Add a simple checksum for integrity
  const checksum = createSimpleChecksum(base64Data + SECRET_KEY);

  // Combine data and checksum
  const tokenData = `${base64Data}.${checksum}`;

  // Base64 encode the final token
  return btoa(tokenData);
}

// Decode the payment token and verify integrity
export function decodePaymentToken(token: string): PaymentParams | null {
  try {
    // Base64 decode the token
    const tokenData = atob(token);

    // Split data and checksum
    const [base64Data, checksum] = tokenData.split('.');

    if (!base64Data || !checksum) {
      return null;
    }

    // Verify checksum
    const expectedChecksum = createSimpleChecksum(base64Data + SECRET_KEY);
    if (checksum !== expectedChecksum) {
      return null;
    }

    // Decode the payment data
    const jsonString = atob(base64Data);
    const paymentData = JSON.parse(jsonString);

    return {
      amount: paymentData.amount,
      customer: paymentData.customer || undefined,
      paymentFor: paymentData.paymentFor || undefined,
    };
  } catch (error) {
    console.error('Failed to decode payment token:', error);
    return null;
  }
}

// Simple checksum function for integrity verification
function createSimpleChecksum(data: string): string {
  let checksum = 0;
  for (let i = 0; i < data.length; i++) {
    checksum = ((checksum << 5) - checksum) + data.charCodeAt(i);
    checksum = checksum & checksum;
  }
  return Math.abs(checksum).toString(36).substring(0, 4);
}
