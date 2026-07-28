import React from 'react'
import { LogoMarquee, LogoItem } from '../LogoMarquee'

const logos: LogoItem[] = [
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/schutz-logo-1.png-2-1-e1753988435162.png",
    alt: "Wild logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 129,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Calvin-Klein-logo-1.png-8-1.png",
    alt: "Andrea Maack logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-AriZona-1.png-1-1.png",
    alt: "Blue Ruby logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-Edikted.png-1.png",
    alt: "Fika logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-HillHouseHome-1.png-1-1.png",
    alt: "Crown and Paw logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-Khaite-1.png-1-1.png",
    alt: "Water Boy logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/Logo-Quip.png-1.png",
    alt: "Super7 logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 171,
    height: 80,
  },
  {
    src: "https://100xelevate.com/wp-content/uploads/2025/07/modelez-logo.png-3.png",
    alt: "Peak Chocolate logo – Partnered with 100xelevate for growth-focused design and marketing.",
    width: 151,
    height: 80,
  },
]

export const MarketingAgencyLogoMarquee = () => {
  return (
    <div>
        <LogoMarquee logos={logos} />
    </div>
  )
}
