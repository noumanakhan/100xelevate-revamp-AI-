import Image from 'next/image'
import React from 'react'

const AUDIT_IMAGES = [
  { src: "/images/2025/10/audit-5_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-4_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-8_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-7_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-6_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-1_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-9_1024x1024.webp", alt: "Lander" },
];

const ShopifyPlusVerticalSlider = ({
    mainContainerWidthClass = "",
} : {
    mainContainerWidthClass?: string
}) => {
  return (
    <div className={`md:mt-0 mt-12 ${mainContainerWidthClass} relative border-[#0000001A] border  bg-[#f5f5f5]`}>
              {/* Vertical auto-scrolling audit screenshots */}
              <div className=" w-full mx-auto max-w-[75%] overflow-hidden md:max-h-[500px] max-h-[390px]">
                <div className="animate-[scroll-up_40s_linear_infinite] flex flex-col  ">
                  {[...AUDIT_IMAGES, ...AUDIT_IMAGES].map((img, i) => (
                    <Image
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      width={1024}
                      height={943}
                      className="w-full h-auto"
                      priority={i < 2}
                    />
                  ))}
                </div>
              </div>
    
              {/* speed-1: main performance chart */}
              <div className="absolute md:-bottom-[50px] bottom-[40px] wmd:-left-[60px] md:-left-[30px] -left-[10px] xl:w-[212px] lg:w-[180px] wmd:w-[150px] md:w-[180px] w-[100px]">
                <Image
                  src="/images/2025/10/speed-1_1024x1024.webp"
                  alt="Shopify store speed performance chart showing 49 percent desktop improvement score"
                  width={420}
                  height={552}
                  className="w-full h-auto "
                  priority
                />
              </div>
    
              {/* speed-2: comparison bar graph */}
              <div className="absolute wmd:-right-[100px] md:-right-[30px] -right-[10px] -top-[40px] xl:w-[190px] lg:w-[150px] wmd:w-[120px] md:w-[180px] w-[120px] ">
                <Image
                  src="/images/2025/10/speed-2_1024x1024.webp"
                  alt="Comparison bar graph showing Shopify desktop performance improvement from previous to current scores"
                  width={384}
                  height={344}
                  className="w-full h-auto"
                />
              </div>
    
              {/* speed-3: narrow vertical accent */}
              <div className="absolute wmd:top-[145px] top-[100px] -translate-y-1/2 md:-left-[26px] -left-[10px] xl:w-[85px] lg:w-[80px] wmd:w-[70px] md:w-[85px] w-[50px] z-50">
                <Image
                  src="/images/2025/10/speed-3_1024x1024.avif"
                  alt=""
                  width={160}
                  height={431}
                  className="w-full h-auto"
                />
              </div>
    
              {/* Badge */}
              <div className="absolute -bottom-[50px] md:-right-[50px] -right-[16px] lg:w-[160px] wmd:w-[120px] md:w-[160px] w-[98px]">
                <Image
                  src="/images/2025/10/Frame-1000003010.png"
                  alt="100xelevate Shopify Plus experts five star rated agency badge logo"
                  width={511}
                  height={569}
                  className="w-full h-auto"
                />
              </div>
            </div>
  )
}

export default ShopifyPlusVerticalSlider