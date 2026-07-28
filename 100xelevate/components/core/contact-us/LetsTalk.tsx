'use client'

import Image from 'next/image'
import { useState } from 'react'

export const LetsTalk = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="w-full bg-white px-4 md:px-8">
      <div className="max-w-max mx-auto md:pt-[100px] md:pb-5 py-[54px]  flex flex-col gap-5 items-start">

        <h3 className="wmd:text-[24px] wmd:leading-[30px] text-[20px] leading-[24px] font-semibold text-black">
          Ready to start your partnership for growth?
        </h3>

        <h1 className="xl:text-[52px] xl:leading-[58px] md:text-[44px] md:leading-[46px] text-[36px] leading-[39px] font-semibold text-black">
          Let&apos;s talk about<br />your project
        </h1>

        {/* "Hear from our clients" pill — opens video lightbox */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Watch client testimonial video"
          className="min-w-[240px] inline-flex items-center gap-[20px] bg-[#f7f7f7] rounded-full md:px-5 md:py-3.5 p-2.5  hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
        >
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
            <Image
              src="https://100xelevate.com/wp-content/uploads/2025/06/image-44.png"
              alt="Customer testimonial image for 100xelevate"
              width={60}
              height={60}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="md:text-[16px] md:leading-[20px] leading-[18px] text-sm font-medium text-black ">
            Hear from<br />our clients
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
          </svg>
        </button>

        <h3 className="wmd:text-[24px] wmd:leading-[30px] text-[20px] leading-[24px] font-semibold text-black">
          Complete the following form and our team will be in touch asap!
        </h3>

      </div>

      {/* Video lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Client testimonial video"
        >
          <div
            className="relative w-auto max-w-[400px] mx-4 h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button> */}
            <video
              src="https://100xelevate.com/wp-content/uploads/2025/06/My-Video5.mp4"
              poster="https://100xelevate.com/wp-content/uploads/2025/06/image-44.png"
              autoPlay
              controls
              playsInline
              controlsList="nodownload"
              className="w-full "
            />
          </div>
        </div>
      )}

    </section>
  )
}


