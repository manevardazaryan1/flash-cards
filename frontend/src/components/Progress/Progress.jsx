const Progress = ({ progress, className, ...props }) => (
    <div
        className={`h-2 bg-blue-500 transition-all duration-500 ease-out rounded-full ${className}`}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
        {...props}
    />
)

export default Progress
