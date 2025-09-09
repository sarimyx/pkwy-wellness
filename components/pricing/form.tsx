'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Instagram } from 'lucide-react';
import { Fonts } from '@/config/fonts';
import { getAllPackageMetadata } from '@/config/packages';
import { Identity } from '@/config/identity';
import { Separator } from '../decoration/separator';
import Image from 'next/image';
import { Amex, Applepay, Discover, Mastercard, Visa } from 'react-pay-icons';

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
        <main id="pricing" >
            <div className={`flex bg-orange-200/100 min-h-screen items-center justify-center p-5 ${Fonts.crimsonText.className}`}>
                <div className="rounded-3xl md:max-w-2xl max-w-md py-2 space-y-12">
                    <div className="text-center space-y-12">
                        <header className="space-y-4">
                            <h2 className={`text-lg font-light tracking-widest text-amber-900 ${Fonts.quicksand.className}`}>
                                PKWY Wellness x Pittsburgh Pilates
                            </h2>
                            <div className="space-y-2">
                                <h1 className='text-5xl text-amber-900 font-bold tracking-widest'>
                                    6 WEEK FLOW
                                </h1>
                                <h2 className={`text-4xl font-light tracking-widest text-amber-900 ${Fonts.quicksand.className}`}>
                                    For EveryBODY
                                </h2>
                            </div>
                            <h3 className='text-xl text-pink-600 tracking-widest'>
                                Women&apos;s series
                            </h3>
                            <p className='text-amber-900 font-semibold text-lg'>
                                This 6-week series is designed to build strength, balance, and confidence in a supportive space
                                where women can grow, connect, and feel stronger from the inside out.
                            </p>

                            <section className="bg-orange-300/30 rounded-2xl p-6 shadow-md space-y-6">
                                <h3 className="text-2xl font-semibold text-amber-900">
                                    Instructors
                                </h3>

                                <div className="flex flex-col md:flex-row items-stretch gap-6">
                                    {/* Samantha */}
                                    <div className="flex flex-col items-center text-center flex-1">
                                        <Image
                                            src="/instructors/samantha.png"
                                            alt="Samantha Syed"
                                            width={128}
                                            height={128}
                                            className="w-32 h-32 rounded-full object-cover object-top shadow-lg"
                                        />
                                        <span className="mt-2 font-semibold text-amber-900 text-lg">Samantha Syed</span>

                                        <a href={Identity.social.instagram} target="_blank">
                                            <Button
                                                variant="outline"
                                                className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 brightness-105 text-sm"
                                            >
                                                <Instagram className="w-4 h-4 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
                                                @pkwypilates
                                            </Button>
                                        </a>

                                        <p className="mt-2 text-gray-600 text-sm">
                                            Dedicated gym enthusiast since 2011 whose journey into self-knowledge and spiritual growth led her to obtaining her Pilates certification and holistic wellness.
                                        </p>
                                    </div>

                                    {/* Tabytha */}
                                    <div className="flex flex-col items-center text-center flex-1">
                                        <Image
                                            src="/instructors/tabytha.png"
                                            alt="Tabytha Camille Bates"
                                            width={128}
                                            height={128}
                                            className="w-32 h-32 rounded-full object-cover object-bottom shadow-lg"
                                        />

                                        <span className="mt-2 font-semibold text-amber-900 text-lg">Tabytha Camille Bates</span>

                                        <a href="https://instagram.com/pittsburghpilates" target="_blank">
                                            <Button
                                                variant="outline"
                                                className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full border-2 border-pink-300 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 brightness-105 text-sm"
                                            >
                                                <Instagram className="w-4 h-4 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
                                                @pittsburghpilates
                                            </Button>
                                        </a>

                                        <p className="mt-2 text-gray-600 text-sm">
                                            A seasoned instructor with over 15 years of experience blending dance, education, and Pilates.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Assessment Section */}
                            <section className="bg-orange-300/30 rounded-2xl p-6 shadow-md space-y-4">
                                <h3 className="text-2xl font-semibold text-amber-900">
                                    Body Assessment
                                </h3>

                                <p className='text-gray-600 font-light'>
                                    We&apos;ll begin with a Body Assessment designed to give you a clear picture of where you&apos;re starting and a way to celebrate your progress at the end. The assessment highlights four key areas:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-amber-900/10 border border-amber-900 shadow-lg rounded-lg p-3">
                                        <h4 className="font-semibold text-amber-900 mb-1">Balance</h4>
                                        <p className="text-gray-700 text-sm">how steady and grounded you feel</p>
                                    </div>

                                    <div className="bg-amber-900/10 border border-amber-900 shadow-lg rounded-lg p-3">
                                        <h4 className="font-semibold text-amber-900 mb-1">Core strength</h4>
                                        <p className="text-gray-700 text-sm">how deeply your core engages with control</p>
                                    </div>

                                    <div className="bg-amber-900/10 border border-amber-900 shadow-lg rounded-lg p-3">
                                        <h4 className="font-semibold text-amber-900 mb-1">Flexibility</h4>
                                        <p className="text-gray-700 text-sm">length and ease of movement, especially in the hamstrings</p>
                                    </div>

                                    <div className="bg-amber-900/10 border border-amber-900 shadow-lg rounded-lg p-3">
                                        <h4 className="font-semibold text-amber-900 mb-1">Mobility</h4>
                                        <p className="text-gray-700 text-sm">the freedom and comfort of your shoulder movement</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 italic">
                                    This is not about judgment or numbers - it&apos;s about awareness, growth, and feeling stronger in your own body. We&apos;ll repeat the assessment in Week 6 so you can see and feel how far you&apos;ve come.
                                </p>
                            </section>
                            <Separator />
                            <div className="space-y-2 text-center">
                                <h1 className={`text-4xl text-gray-500 font-ultralight tracking-widest ${Fonts.quicksand.className}`}>
                                    JOIN US NOW
                                </h1>
                                <p className="text-gray-600 text-lg">
                                    Your journey to balance, confidence, and empowerment starts today.
                                </p>
                            </div>
                        </header>

                        <div className="flex justify-center">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl place-items-stretch">
                                {packages.map((pkg) => (
                                    <article
                                        key={pkg.id}
                                        className={`relative bg-amber-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col w-full max-w-sm h-full ${pkg.id === '6-week-early-bird' ? 'ring-2 ring-amber-500' : ''
                                            }`}
                                    >
                                        {pkg.tag && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <span className={`${pkg.tagColor || 'bg-amber-500'} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                                    {pkg.tag}
                                                </span>
                                            </div>
                                        )}

                                        <header className="text-center space-y-2">
                                            <h3 className="text-3xl font-bold text-amber-900">{pkg.subtitle || pkg.displayName}</h3>
                                            <div className={`text-lg font-semibold ${Fonts.poppins.className}`}>
                                                {pkg.previousPrice && (
                                                    <span className="text-amber-900/70 line-through mr-2">
                                                        {formatPrice(pkg.previousPrice)}
                                                    </span>
                                                )}
                                                <span className="text-amber-900/70">
                                                    {formatPrice(pkg.price)}
                                                </span>
                                            </div>
                                        </header>

                                        <ul className="space-y-2 flex-grow">
                                            {pkg.features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-3 text-left">
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-8">
                                            <Button
                                                onClick={() => handleCheckout(pkg.id)}
                                                className={`${Fonts.poppins.className} hover:brightness-110 w-full font-semibold ${pkg.id === '6-week-early-bird'
                                                    ? 'bg-gradient-to-r from-amber-900 to-amber-700'
                                                    : 'bg-gradient-to-r from-amber-800 to-amber-900'
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

                    {/* Please Note Section */}
                    <div className="text-center mt-6 px-20">
                        <p className='text-lg font-semibold text-amber-900'>Please Note</p>
                        <div className="space-y-2">
                            <p className="text-gray-600 text-sm">
                                <strong>Classes will be held in an upstairs space at the community center.</strong> {" "} Participants need to be able to climb two flights of stairs to access the workout area.
                            </p>
                            <p className="text-gray-600 text-sm">
                                Our address is <strong>{Identity.address.complete}</strong> (Google Maps: <a href={Identity.address.googleMaps} target="_blank" className="text-blue-500">Link</a>, Apple Maps: <a href={Identity.address.appleMaps} target="_blank" className="text-blue-500">Link</a>)
                            </p>
                        </div>
                    </div>

                    {/* Payment Methods Section */}
                    <div className="text-center space-y-2">
                        <div className="flex justify-center items-center space-x-2">
                            <Applepay className="w-10 h-10" />
                            <Visa className="w-10 h-10" />
                            <Mastercard className="w-10 h-10" />
                            <Discover className="w-10 h-10" />
                            <Amex className="w-10 h-10" />
                        </div>
                        <p className="text-gray-600 text-sm">
                            All payments securely processed by <span className="font-semibold text-gray-800">Stripe</span>.
                        </p>
                    </div>

                    <Separator />

                    {/* Questions/Contact Section */}
                    <div className="text-center">
                        <div className="mx-auto space-y-2">
                            <div>
                                <h3 className={`text-2xl font-semibold text-amber-800`}>
                                    Questions?
                                </h3>
                                <p className="text-gray-600">
                                    Have questions or need help choosing the right option for you?
                                </p>
                            </div>
                            <a
                                href={Identity.social.instagram}
                            >
                                <Button className={Fonts.quicksand.className}>
                                    Contact
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    );
}