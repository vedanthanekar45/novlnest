export default function LoadingDots () {
    return(
        <div className="flex gap-1 items-center">
        <span className="dot bg-blue-500 w-2 h-2 rounded-full animate-pulse"></span>
        <span className="dot bg-blue-500 w-2 h-2 rounded-full animate-pulse delay-150"></span>
        <span className="dot bg-blue-500 w-2 h-2 rounded-full animate-pulse delay-300"></span>
    </div>
    )
}