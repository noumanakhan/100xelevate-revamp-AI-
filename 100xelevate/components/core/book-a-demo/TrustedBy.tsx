'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const logos = [
    { src: '/images/2025/09/schutz-logo-1.png-1-1.png', alt: 'Schutz' },
    { src: '/images/2025/09/Fellow-Logo-1.png-1.png', alt: 'Fellow' },
    { src: '/images/2025/09/Logo-AriZona-1.png-1.png', alt: 'AriZona' },
    { src: '/images/2025/09/Logo-Edikted-1.png-1.png', alt: 'Edikted' },
    { src: '/images/2025/09/Logo-HillHouseHome-1.png-1.png', alt: 'Hill House Home' },
    { src: '/images/2025/09/Logo-Khaite-1.png-1.png', alt: 'Khaite' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/Logo-Quip-1.png-1.png', alt: 'Quip' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/LVMH-logo-1.png-1.png', alt: 'LVMH' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/modelez-logo-1.png-1.png', alt: 'Mondelez' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/P448-logo-1.png-1.png', alt: 'P448' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/schutz-logo-1.png-1.png', alt: 'Schutz 2' },
    { src: 'https://100xelevate.com/wp-content/uploads/2025/09/Calvin-Klein-logo-1.png-1.png', alt: 'Calvin Klein' },
]

const testimonials = [
    {
        logo: { src: 'https://100xelevate.com/wp-content/uploads/2025/02/image-68.png', alt: 'Cambie logo', width: 122, height: 28 },
        quote: '"We\'ve Increased Our Revenue By 35-40% By Working With 100xelevate. They can do things with Shopify that even Shopify thinks are impossible."',
        author: '~ David Foley – Cambie',
    },
    {
        logo: { src: 'https://100xelevate.com/wp-content/uploads/2025/02/Mask-group-1.png', alt: 'Andrea Maack logo', width: 116, height: 23 },
        quote: '"100xelevate has led a web refresh for our brand, Andrea maack. Honestly, one of the most technically talented teams I\'ve worked with across the board."',
        author: '~ Andrea Maack – Andrea Maack',
    },
    {
        logo: { src: 'https://100xelevate.com/wp-content/uploads/2025/02/Mask-group-2.png', alt: 'Blue Ruby logo', width: 126, height: 38 },
        quote: '"After 4 Months, We\'ve Got A 49% Increase In Our Sales. I\'d Never Go Back To Not Working with 100xelevate. Our Klaviyo metrics were at their heighest ever."',
        author: '~ Jenny Tangjerd – Blue Ruby',
    },
]

export const TrustedBy = () => {
    const [active, setActive] = useState(0)

    const next = useCallback(() => setActive(a => (a + 1) % testimonials.length), [])
    const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)

    useEffect(() => {
        const timer = setInterval(next, 5000)
        return () => clearInterval(timer)
    }, [next])

    return (
        <section className="w-full bg-white px-4 md:px-8">
            <div className="max-w-max mx-auto md:py-[86px] pb-[54px] flex flex-col xl:gap-16 gap-8">

                {/* Heading */}
                <div className="text-center">
                    <h2 className="lg:text-[32px] wmd:text-[24px] text-[20px] xl:leading-[30px] lg:leading-[22px] wmd:leading-[30px] leading-[24px]  font-semibold text-black">
                        Trusted by over 150 brands, from startups to Fortune 100s
                    </h2>
                </div>

                {/* Desktop logo grid — hidden on mobile */}
                <div className="grid md:grid-cols-6 grid-cols-3 gap-5">
                    {logos.map((logo) => (
                        <div key={`${logo.src}-${logo.alt}`} className="flex items-center justify-center">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={171}
                                height={80}
                                unoptimized
                                className="max-h-[80px]  "
                            />
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}

