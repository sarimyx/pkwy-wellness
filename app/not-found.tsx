"use client";

import { Button } from "@/components/ui/button";
import { Identity } from "@/config/identity";
import { useRouter } from "next/navigation";
import { Separator } from '@/components/decoration/separator';

export default function Page() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="space-y-4 pt-4">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden">
          {/* Background decorative elements matching site theme */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-yellow-200/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <span className="text-8xl md:text-9xl font-bold text-amber-900 mb-6">
              404
            </span>
            <h1 className="max-w-md text-3xl md:text-4xl font-light text-amber-800 mb-6 leading-tight">
              Page Not Found
            </h1>
            <p className="text-lg text-amber-700/80 mb-8 max-w-md">
              The page you're looking for doesn't exist. Let's get you back to your wellness journey with {Identity.companyName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGoHome}
                className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-200/50"
              >
                Return Home
              </Button>
              <a href={`mailto:${Identity.email}`}>
                <Button
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 hover:border-amber-700 px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
