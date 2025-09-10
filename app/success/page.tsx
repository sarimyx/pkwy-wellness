'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, User, Receipt, MapPin, Building, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Identity } from '@/config/identity';
import Link from 'next/link';

interface CustomerDetails {
  email: string;
  name?: string;
  amount: string;
  packageName: string;
  packageId: string;
  paymentDate: string;
}

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string>('');
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get session ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get('session_id');
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
      fetchCustomerDetails(sessionIdParam);
    }
  }, []);

  const fetchCustomerDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/get-session-details?session_id=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setCustomerDetails(data);
      }
    } catch (error) {
      console.error('Failed to fetch customer details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Success Icon */}
          <div className="mb-4">
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-500 mx-auto" />
          </div>

          {/* Success Message */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Thank you for choosing PKWY Wellness!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Details */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-500" />
              Payment Details
            </h2>
            {loading ? (
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ) : customerDetails ? (
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{customerDetails.email}</span>
                </div>
                {customerDetails.name && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium text-gray-900">{customerDetails.name}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-medium text-gray-900">{customerDetails.packageName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium text-gray-900">${customerDetails.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-900">{new Date(customerDetails.paymentDate).toLocaleDateString()}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">Payment details will be sent to your email.</p>
            )}
          </div>

          {/* What's Next */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              What&apos;s Next?
            </h2>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-start gap-3">
                <Receipt className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  You’re in! A confirmation email with your receipt has been sent. As soon as we hit 19 amazing women signed up, we’ll send out the full class details. We can’t wait to share this series with you!
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Classes held in an upstairs space at the community center. Participants need to be able to climb two flights of stairs to access the workout area.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Timer className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Classes are planned for Sundays at 10:00 AM and will run for 45 minutes. We can’t wait to move, breathe, and flow with you in this series!
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Our address is <strong>{Identity.address.complete}</strong> (Google Maps: <a href={Identity.address.googleMaps} target="_blank" className="text-blue-500">Link</a>, Apple Maps: <a href={Identity.address.appleMaps} target="_blank" className="text-blue-500">Link</a>)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto mb-6">
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 text-sm sm:text-base">
              Return Home
            </Button>
          </Link>
          <a href={Identity.social.instagram} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full px-6 sm:px-8 py-3 text-sm sm:text-base">
              Contact Us
            </Button>
          </a>
        </div>

        {/* Session ID for reference */}
        {sessionId && (
          <p className="text-xs sm:text-sm text-gray-500 text-center break-all px-4">
            Reference: {sessionId}
          </p>
        )}
      </div>
    </div>
  );
}
