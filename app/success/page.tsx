'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  const [packageName, setPackageName] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Get session ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdParam = urlParams.get('session_id');
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for choosing PKWY Wellness! Your Pilates classes have been confirmed.
        </p>

        {/* Package Details */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What's Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                You'll receive a confirmation email with your class details
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                Classes are held at our Pittsburgh studio
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                Contact us to schedule your first class
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              Return Home
            </Button>
          </Link>
          <a href="mailto:hello@pkwywellness.com">
            <Button variant="outline" className="px-8 py-3">
              Contact Us
            </Button>
          </a>
        </div>

        {/* Session ID for reference */}
        {sessionId && (
          <p className="text-sm text-gray-500 mt-8">
            Reference: {sessionId}
          </p>
        )}
      </div>
    </div>
  );
}
