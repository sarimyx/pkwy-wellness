'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Fonts } from '@/config/fonts';
import { getAllPackageMetadata } from '@/config/packages';

export function Pricing() {
    const packages = getAllPackageMetadata();

    // Helper function to format price from cents
    const formatPrice = (priceInCents: number): string => {
        return `$${(priceInCents / 100).toFixed(0)}`;
    };

    const handleCheckout = async (packageId: string) => {
        // Get the complete package metadata
        const packageData = packages.find(pkg => pkg.id === packageId);

        if (!packageData) {
            alert('Package not found. Please try again.');
            return;
        }

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    packageId,
                    packageData, // Send complete package metadata
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { url } = await response.json();
            window.location.href = url;
        } catch (error) {
            console.error('Error creating checkout session:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <main id="pricing" className={`bg-orange-200/100 min-h-screen flex items-center justify-center p-5 ${Fonts.crimsonText.className}`}>
            <div className="bg-orange-200/100 rounded-3xl w-full max-w-7xl p-8">
                <div className="text-center space-y-8">
                    <header className="space-y-4">
                        <div>
                            <h1 className='text-5xl text-gray-600 tracking-widest'>
                                6 WEEK FLOW
                            </h1>
                            <h2 className={`text-4xl font-light tracking-widest text-gray-900 ${Fonts.dancingScript.className}`}>
                                For EveryBODY
                            </h2>
                        </div>
                        <h3 className='text-xl text-orange-600 tracking-widest'>
                            Women&apos;s series
                        </h3>
                    </header>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl place-items-stretch">
                            {packages.map((pkg) => (
                                <article
                                    key={pkg.id}
                                    className={`relative bg-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col w-full max-w-sm h-full ${pkg.id === '6-week-early-bird' ? 'ring-2 ring-red-500' : ''
                                        }`}
                                >
                                    {pkg.tag && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className={`${pkg.tagColor || 'bg-red-500'} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                                {pkg.tag}
                                            </span>
                                        </div>
                                    )}

                                    <header className="text-center space-y-2">
                                        <h3 className="text-3xl font-bold text-orange-500">{pkg.subtitle || pkg.displayName}</h3>
                                        <div className={`text-lg font-semibold ${Fonts.poppins.className}`}>
                                            {pkg.previousPrice && (
                                                <span className="text-gray-400 line-through mr-2">
                                                    {formatPrice(pkg.previousPrice)}
                                                </span>
                                            )}
                                            <span className="text-gray-900">
                                                {formatPrice(pkg.price)}
                                            </span>
                                        </div>
                                    </header>

                                    <ul className="space-y-2 flex-grow mt-6 mb-6">
                                        {pkg.features.map((feature, index) => (
                                            <li key={index} className="flex items-center space-x-3">
                                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <Button
                                            onClick={() => handleCheckout(pkg.id)}
                                            className={`w-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${Fonts.poppins.className} ${pkg.id === '6-week-early-bird'
                                                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-200/50'
                                                : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-gray-300/30'
                                                }`}
                                        >
                                            Purchase
                                        </Button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}