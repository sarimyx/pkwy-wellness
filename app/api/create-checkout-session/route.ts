import { Identity } from '@/config/identity';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

const packages = {
  '2-classes': {
    name: '2 Classes Package',
    price: 4500, // $45.00 in cents
    description: '2 Pilates sessions with flexible scheduling'
  },
  '4-classes': {
    name: '4 Classes Package',
    price: 8500, // $85.00 in cents
    description: '4 Pilates sessions with progress tracking'
  },
  '7-classes': {
    name: '7 Classes Package',
    price: 12500, // $125.00 in cents
    description: '7 Pilates sessions with priority booking'
  }
};

export async function POST(request: NextRequest) {
  try {
    const { packageId, customAmount, description, customer, paymentFor } = await request.json();

    let packageData: { name: string; price: number; description: string };

    if (customAmount) {
      // Handle custom amount payment
      if (customAmount < 100) { // Minimum $1.00
        return NextResponse.json(
          { error: 'Minimum payment amount is $1.00' },
          { status: 400 }
        );
      }

      packageData = {
        name: `${Identity.companyLegalName}`,
        price: customAmount,
        description: description || `Custom payment of $${(customAmount / 100).toFixed(2)}`
      };
    } else if (packageId && packages[packageId as keyof typeof packages]) {
      // Handle package payment
      packageData = packages[packageId as keyof typeof packages];
    } else {
      return NextResponse.json(
        { error: 'Either packageId or customAmount is required' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: packageData.name,
              description: packageData.description,
              images: ['https://pkwywellness.com/branding/logo-transparent.png'], // Update with your logo URL
            },
            unit_amount: packageData.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/`,
      metadata: {
        packageId: packageId || 'custom-payment',
        packageName: packageData.name,
        customAmount: customAmount ? 'true' : 'false',
        amount: packageData.price.toString(),
        customer: customer || '',
        paymentFor: paymentFor || '',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
