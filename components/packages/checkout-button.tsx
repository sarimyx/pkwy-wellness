'use client';

import { Button } from '@/components/ui/button';
import { Fonts } from '@/config/fonts';

interface CheckoutButtonProps {
  packageId: string;
  disabled?: boolean;
  popular?: boolean;
}

export function CheckoutButton({ packageId, disabled, popular }: CheckoutButtonProps) {
  const handleCheckout = async () => {
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
    <Button
      onClick={handleCheckout}
      disabled={disabled}
      className={`w-full mt-6 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${Fonts.poppins.className} ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : popular
            ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-pink-200/50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-gray-300/30'
      }`}
    >
      {disabled ? 'Coming Soon' : 'Purchase'}
    </Button>
  );
}
