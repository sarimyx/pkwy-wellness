'use client';

import { Button } from '@/components/ui/button';
import { Fonts } from '@/config/fonts';
import { useState } from 'react';

interface CheckoutButtonProps {
  packageId: string;
  disabled?: boolean;
  popular?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function CheckoutButton({ packageId, disabled, popular, className, children }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (isLoading) return; // Prevent multiple clicks
    
    setIsLoading(true);
    
    // Use setTimeout to ensure the loading state renders before starting the process
    setTimeout(async () => {
      try {
        const fakeDelay = Math.random() * 1000 + 1000; // Random delay between 1-2 seconds
        await new Promise(resolve => setTimeout(resolve, fakeDelay));

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
        setIsLoading(false); // Re-enable button on error
      }
    }, 0);
  };

  const isButtonDisabled = disabled || isLoading;

  return (
    <Button
      onClick={handleCheckout}
      disabled={isButtonDisabled}
      className={className || `w-full mt-6 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${Fonts.poppins.className} ${
        isButtonDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : popular
            ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-pink-200/50'
            : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-gray-300/30'
      }`}
    >
      {disabled ? (
        'Coming Soon'
      ) : isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </div>
      ) : (
        children || 'Purchase'
      )}
    </Button>
  );
}
