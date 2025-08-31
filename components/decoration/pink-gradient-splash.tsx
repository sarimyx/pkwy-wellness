/**
 * PinkGradientSplash - Creates distinctive and blended pink/purple gradient splash effects
 *
 * Features:
 * - Organic, irregular shapes for unique character
 * - Multi-layered gradients for depth and blending
 * - Wave-like flow patterns
 * - Sophisticated color transitions
 * - Perfect balance of distinctiveness and harmony
 */

export function PinkGradientSplash() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Distinctive irregular splash - top right */}
            <div className="absolute -top-32 -right-16 w-[600px] h-[450px] bg-gradient-to-br from-pink-500/20 via-pink-400/12 to-rose-300/8 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-2xl animate-pulse" style={{ animationDelay: '0.3s' }}></div>

            {/* Flowing wave splash - bottom left */}
            <div className="absolute -bottom-24 -left-20 w-[550px] h-[400px] bg-gradient-to-tr from-purple-500/18 via-pink-400/10 to-violet-300/6 rounded-[70%_30%_60%_40%/40%_60%_30%_70%] blur-2xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>

            {/* Central organic blend */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-pink-300/6 via-purple-200/4 to-transparent rounded-[50%_80%_60%_40%/80%_40%_60%_50%] blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>

            {/* Distinctive wave elements */}
            <div className="absolute top-1/6 right-8 w-[350px] h-[180px] bg-gradient-to-l from-pink-400/15 via-rose-300/8 to-transparent rounded-[80%_20%_60%_40%] blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-1/5 left-12 w-[420px] h-[160px] bg-gradient-to-r from-purple-400/12 via-pink-300/6 to-transparent rounded-[40%_60%_80%_20%] blur-xl animate-pulse" style={{ animationDelay: '0.9s' }}></div>

            {/* Unique accent shapes */}
            <div className="absolute top-16 right-1/3 w-28 h-20 bg-pink-500/25 rounded-[60%_40%] blur-lg animate-bounce" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-32 h-24 bg-purple-500/20 rounded-[40%_60%] blur-lg animate-bounce" style={{ animationDelay: '1.6s' }}></div>
            <div className="absolute top-3/4 right-20 w-20 h-16 bg-rose-400/30 rounded-[70%_30%] blur-md animate-bounce" style={{ animationDelay: '2.1s' }}></div>

            {/* Blending edge elements */}
            <div className="absolute top-0 right-0 w-64 h-48 bg-gradient-to-bl from-pink-200/15 via-pink-100/8 to-transparent rounded-bl-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-52 bg-gradient-to-tr from-purple-200/12 via-purple-100/6 to-transparent rounded-tr-full blur-xl"></div>
        </div>
    );
}
