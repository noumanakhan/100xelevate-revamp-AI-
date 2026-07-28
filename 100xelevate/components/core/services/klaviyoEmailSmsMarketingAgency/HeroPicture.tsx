import React from 'react'
import Image from 'next/image'

export const HeroPicture = () => {
  return (
    <>
      {/* Mobile only (< 768px): image with grayscale filter */}
      <div className="flex md:hidden flex-col w-full min-h-[320px] grayscale overflow-hidden">
        <Image
          src="/images/2025/12/pexels-fauxels-3184291-scaled-1-e1765819074138.webp"
          alt="Hero image of professionals collaborating – 100xelevate"
          width={400}
          height={267}
          priority
          className="w-full h-[320px] max-w-[400px] mx-auto object-cover"
        />
      </div>

      {/* Tablet and above (>= 768px): background image with grayscale filter */}
      <div
        className="hidden md:flex flex-col w-full min-h-[800px] bg-cover bg-center grayscale"
        style={{
          backgroundImage:
            "url('/images/2025/06/pexels-fauxels-3184291-scaled-1-e1763147635786.webp')",
        }}
      >
        <div className="w-full h-full" />
      </div>
    </>
  )
}
