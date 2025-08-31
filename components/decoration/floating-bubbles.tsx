export function FloatingBubbles() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            {/* Large background bubbles - fewer on mobile */}
            <div className="absolute -top-16 -right-16 sm:-top-32 sm:-right-32 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-300/15 via-pink-200/10 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-16 -left-16 sm:-bottom-32 sm:-left-32 w-56 h-56 sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-purple-300/12 via-purple-200/8 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="hidden sm:block absolute top-1/4 -right-16 w-72 h-72 bg-gradient-to-bl from-rose-300/18 via-pink-200/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="hidden sm:block absolute bottom-1/5 -left-20 w-80 h-80 bg-gradient-to-tr from-violet-300/14 via-purple-200/9 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>

            {/* Central gradient cloud - smaller on mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-64 sm:w-[700px] sm:h-[500px] bg-gradient-to-br from-pink-200/8 via-purple-100/5 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>

            {/* Medium floating bubbles - fewer and smaller on mobile */}
            <div className="absolute top-12 right-1/4 sm:top-16 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400/40 rounded-full blur-md sm:blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 sm:top-2/3 sm:left-1/3 w-5 h-5 sm:w-8 sm:h-8 bg-purple-400/35 rounded-full blur-md sm:blur-lg animate-bounce" style={{ animationDelay: '2.5s' }}></div>
            <div className="hidden sm:block absolute bottom-20 right-1/3 w-5 h-5 bg-rose-400/45 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="hidden sm:block absolute bottom-1/3 left-1/4 w-7 h-7 bg-violet-400/30 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3.2s' }}></div>

            {/* Small accent dots - fewer on mobile */}
            <div className="absolute top-1/3 right-8 sm:right-16 w-2 h-2 sm:w-3 sm:h-3 bg-pink-300/60 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }}></div>
            <div className="hidden sm:block absolute top-3/4 left-20 w-4 h-4 bg-purple-300/50 rounded-full animate-bounce" style={{ animationDelay: '2.8s' }}></div>
            <div className="absolute bottom-1/3 right-8 sm:bottom-2/3 sm:right-20 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-400/55 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="hidden sm:block absolute bottom-1/4 left-1/2 w-3.5 h-3.5 bg-purple-400/45 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>

            {/* Edge blending elements - smaller on mobile */}
            <div className="absolute top-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-200/15 via-pink-100/8 to-transparent rounded-br-full blur-xl sm:blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-52 sm:h-52 bg-gradient-to-tl from-purple-200/12 via-purple-100/6 to-transparent rounded-tl-full blur-xl sm:blur-2xl"></div>
        </div>
    );
}