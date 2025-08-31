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
    const { packageId } = await request.json();

    if (!packageId || !packages[packageId as keyof typeof packages]) {
      return NextResponse.json(
        { error: 'Invalid package ID' },
        { status: 400 }
      );
    }

    const packageData = packages[packageId as keyof typeof packages];

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
        packageId,
        packageName: packageData.name,
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
