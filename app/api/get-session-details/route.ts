import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'payment_intent'],
    });

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Extract customer details
    const customerDetails = {
      email: session.customer_details?.email || '',
      name: session.customer_details?.name || undefined,
      amount: (session.amount_total! / 100).toFixed(0), // Convert from cents to dollars
      packageName: session.metadata?.packageName || 'Package',
      packageId: session.metadata?.packageId || '',
      paymentDate: new Date(session.created * 1000).toISOString(),
    };

    return NextResponse.json(customerDetails);
  } catch (error) {
    console.error('Error retrieving session details:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve session details' },
      { status: 500 }
    );
  }
}
