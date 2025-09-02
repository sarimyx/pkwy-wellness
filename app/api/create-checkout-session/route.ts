import { Identity } from '@/config/identity';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripePackageById, PackageMetadata } from '@/config/packages';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { packageId, packageData: fullPackageData, customAmount, description, customer, paymentFor } = await request.json();

    let sessionData: {
      name: string;
      price: number;
      description: string;
      metadata: Record<string, string>;
    };

    if (customAmount) {
      // Handle custom amount payment
      if (customAmount < 100) { // Minimum $1.00
        return NextResponse.json(
          { error: 'Minimum payment amount is $1.00' },
          { status: 400 }
        );
      }

      sessionData = {
        name: `${Identity.companyLegalName}`,
        price: customAmount,
        description: description || `Custom payment of $${(customAmount / 100).toFixed(2)}`,
        metadata: {
          packageId: 'custom-payment',
          packageName: `${Identity.companyLegalName}`,
          customAmount: 'true',
          amount: customAmount.toString(),
          customer: customer || '',
          paymentFor: paymentFor || '',
        }
      };
    } else if (packageId && fullPackageData) {
      // Handle package payment with full metadata
      const packageMetadata = fullPackageData as PackageMetadata;

      // Create rich description from package features
      const featuresText = packageMetadata.features
        .slice(0, 3) // Limit to first 3 features for description
        .join(' • ');

      sessionData = {
        name: packageMetadata.subtitle || packageMetadata.displayName,
        price: packageMetadata.price,
        description: `${packageMetadata.classes}-class package • ${featuresText}`,
        metadata: {
          packageId: packageMetadata.id,
          packageName: packageMetadata.subtitle || packageMetadata.displayName,
          category: packageMetadata.category,
          classes: packageMetadata.classes.toString(),
          tag: packageMetadata.tag || '',
          customAmount: 'false',
          amount: packageMetadata.price.toString(),
          previousPrice: packageMetadata.previousPrice?.toString() || '',
          customer: customer || '',
          paymentFor: paymentFor || '',
        }
      };
    } else if (packageId) {
      // Fallback to basic package data if full metadata not provided
      const stripePackage = getStripePackageById(packageId);
      if (!stripePackage) {
        return NextResponse.json(
          { error: `Package not found: ${packageId}` },
          { status: 400 }
        );
      }

      sessionData = {
        name: stripePackage.name,
        price: stripePackage.price,
        description: stripePackage.description,
        metadata: {
          packageId: packageId,
          packageName: stripePackage.name,
          customAmount: 'false',
          amount: stripePackage.price.toString(),
          customer: customer || '',
          paymentFor: paymentFor || '',
        }
      };
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
              name: sessionData.name,
              description: sessionData.description,
              images: ['https://pkwywellness.com/branding/logo.png'], // Update with your logo URL
            },
            unit_amount: sessionData.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/`,
      metadata: sessionData.metadata,
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
