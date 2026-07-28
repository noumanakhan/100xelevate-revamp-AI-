import React from "react";

type ChevronProps = {
    className?: string;
    stroke?: string;
    size?: number;
};

function Chevron({ className, stroke = "#000000", size = 16 }: ChevronProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width={size}
            height={size}
            className={className}
            aria-hidden
        >
            <path
                d="M32 48 L64 80 L96 48"
                fill="none"
                stroke={stroke}
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Chevron;
