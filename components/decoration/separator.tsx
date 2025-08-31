export function Separator() {
    return (
        <div className="relative w-full py-8 my-8">
            {/* Main decorative line */}
            <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-300/50 to-transparent"></div>
            </div>

            {/* Central decorative element */}
            <div className="relative flex justify-center">
                <div className="flex items-center space-x-4">
                    {/* Left decorative dots */}
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="w-1 h-1 bg-rose-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Central ornament */}
                    <div className="relative">
                        <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                        <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                    </div>

                    {/* Right decorative dots */}
                    <div className="flex space-x-2">
                        <div className="w-1 h-1 bg-rose-400/50 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        <div className="w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                        <div className="w-2 h-2 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                    </div>
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-8 bg-gradient-to-r from-pink-200/10 via-purple-200/5 to-pink-200/10 rounded-full blur-xl"></div>
            </div>
        </div>
    );
}
