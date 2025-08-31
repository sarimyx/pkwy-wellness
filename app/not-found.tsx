"use client";

import { Button } from "@/components/ui/button";
import { Identity } from "@/config/identity";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-pink-100/10 via-transparent to-purple-100/10 rounded-full blur-3xl"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-pink-300/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-purple-300/50 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="flex flex-col items-center text-center relative z-10">
        <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 animate-pulse">
          404
        </span>
        <span className="max-w-md text-3xl md:text-4xl font-light bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8 leading-tight">
          Oops! We couldn&apos;t find what you were looking for.
        </span>
        <p className="text-lg text-gray-600 mb-8 max-w-sm">
          Don&apos;t worry, let&apos;s get you back to creating your perfect Pilates journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleGoHome}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-200/50"
          >
            Home
          </Button>
          <a href={`mailto:${Identity.email}`}>
            <Button
              variant="outline"
              className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400 px-8 py-3 rounded-full transition-all duration-300 font-semibold"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
