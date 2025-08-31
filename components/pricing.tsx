'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Fonts } from '@/config/fonts';

interface PricingPackage {
    id: string;
    name: string;
    price: number;
    classes: number;
    features: string[];
    popular?: boolean;
}

const packages: PricingPackage[] = [
    {
        id: '2-classes',
        name: '2 Classes',
        price: 45,
        classes: 2,
        features: [
            '2 Pilates sessions',
            'Flexible scheduling',
            'Expert instruction',
            'Studio access'
        ]
    },
    {
        id: '4-classes',
        name: '4 Classes',
        price: 85,
        classes: 4,
        features: [
            '4 Pilates sessions',
            'Flexible scheduling',
            'Expert instruction',
            'Studio access',
            'Progress tracking'
        ]
    },
    {
        id: '7-classes',
        name: '7 Classes',
        price: 125,
        classes: 7,
        features: [
            '7 Pilates sessions',
            'Flexible scheduling',
            'Expert instruction',
            'Studio access',
            'Progress tracking',
            'Priority booking'
        ],
        popular: true
    }
];

export function Pricing() {
    const handleCheckout = async (packageId: string) => {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    packageId,
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
        <main id="pricing" className={`${Fonts.crimsonText.className}`}>
            <section>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <header className="text-center space-y-4 px-4">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Choose Your Pilates Package
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Start your Pilates journey with flexible packages designed to fit your schedule and goals.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <article
                                key={pkg.id}
                                className={`relative bg-pink-200/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col ${pkg.popular ? 'ring-2 ring-pink-500' : ''
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <header className="text-center space-y-2">
                                    <h3 className="text-3xl font-bold text-pink-500">{pkg.name}</h3>
                                    <div className={`text-2xl font-semibold text-gray-900 ${Fonts.poppins.className}`}>
                                        ${pkg.price}
                                    </div>
                                </header>

                                <ul className="space-y-2 flex-grow mt-6">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    onClick={() => handleCheckout(pkg.id)}
                                    className={`w-full mt-6 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${Fonts.poppins.className} ${
                                        pkg.popular
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-pink-200/50'
                                            : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-gray-300/30'
                                    }`}
                                >
                                    Purchase
                                </Button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
