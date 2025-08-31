export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  classes: number;
  features: string[];
  popular?: boolean;
}

export interface CheckoutRequest {
  packageId: string;
}

export interface CheckoutResponse {
  url: string;
}

export interface StripeWebhookEvent {
  type: string;
  data: {
    object: any;
  };
}
