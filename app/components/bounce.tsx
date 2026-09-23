type Props={
    className?: string;
}
export default function Bounce({ className }: Props) {
    return (
        <svg
            className={`animate-bounce h-10 w-10 ${className || ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path
                d="M12 5v14M19 12l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}