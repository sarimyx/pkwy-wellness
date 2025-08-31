export function FloatingBubbles() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-pink-100/10 via-transparent to-purple-100/10 rounded-full blur-3xl"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-pink-300/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-16 w-4 h-4 bg-purple-300/50 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        </div>
    );
}