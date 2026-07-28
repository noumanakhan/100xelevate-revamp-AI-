import Image from "next/image";

import { ButtonLink } from "@/components/shared/ButtonLink";

const migrationServices = [
  {
    title: "Smooth B2B Platform Migration",
    description:
      "Ensure a seamless migration of your B2B business to Shopify, including comprehensive transitions of product catalogs, customer data, and specialized functionalities.",
    icon: (
      <svg
        aria-hidden="true"
        className="size-8 shrink-0"
        fill="none"
        viewBox="0 0 36 36"
      >
        <path
          fill="#1A1A1A"
          d="M4 21.71C4.265 21.71 4.52 21.605 4.707 21.417A1 1 0 0 0 5 20.71v-3.09c0-.164.065-.322.182-.438A.62.62 0 0 1 5.62 17H15v1.38A2.62 2.62 0 0 0 17.62 21H19v9.38a.62.62 0 0 1-.62.62H5.62c-.12 0-.24-.2-.34-.47a1 1 0 0 0-1.7-.53 1.1 1.1 0 0 0-.42 1.29A2.62 2.62 0 0 0 5.62 33h12.76A2.62 2.62 0 0 0 21 30.38V21h9.38A2.62 2.62 0 0 0 33 18.38V5.62A2.62 2.62 0 0 0 30.38 3H17.62A2.62 2.62 0 0 0 15 5.62V15H5.62A2.62 2.62 0 0 0 3 17.62v3.09a1 1 0 0 0 1 1ZM17 5.62a.62.62 0 0 1 .62-.62h12.76a.62.62 0 0 1 .62.62v12.76a.62.62 0 0 1-.62.62H17.62a.62.62 0 0 1-.62-.62V5.62Z"
        />
        <path
          fill="#DFB757"
          d="M31.71 24.08a1 1 0 0 0-1.8-.86 14.44 14.44 0 0 1-6.61 6.65 1.32 1.32 0 0 0-.75 1.34c.03.265.143.514.322.712.18.197.417.333.678.388l2.15.51a1 1 0 0 0 1.05-.4 1.02 1.02 0 0 0-.59-1.55l-.34-.08a15.62 15.62 0 0 0 5.89-6.71ZM4.51 11.44a1 1 0 0 0 1.74.92 14.44 14.44 0 0 1 6.53-6.28 1.32 1.32 0 0 0 .75-1.28 1.3 1.3 0 0 0-1-1.09l-2.4-.52a1 1 0 1 0-.41 1.96l.36.08a15.65 15.65 0 0 0-5.57 6.21Z"
        />
      </svg>
    ),
  },
  {
    title: "Reliable B2B Data Migration & Integration",
    description:
      "Safely transfer critical business data to Shopify and integrate seamlessly with existing business systems for continued operational excellence.",
    icon: (
      <svg
        aria-hidden="true"
        className="size-8 shrink-0"
        fill="none"
        viewBox="0 0 36 36"
      >
        <path
          fill="#1A1A1A"
          d="M13.663 18.726H2.18A2.182 2.182 0 0 0 0 20.905v8.625a2.182 2.182 0 0 0 2.18 2.179h2.824v2.742h-.657a.773.773 0 1 0 0 1.547h7.148a.773.773 0 1 0 0-1.547h-.656v-2.742h2.824a2.182 2.182 0 0 0 2.18-2.18v-8.624a2.182 2.182 0 0 0-2.18-2.18ZM9.292 34.45H6.55V31.71h2.742v2.742Zm5.004-4.921a.633.633 0 0 1-.633.633H2.18a.633.633 0 0 1-.633-.633v-1.394h12.75v1.394Zm0-2.941H1.546v-5.683c0-.349.284-.633.633-.633h11.483c.35 0 .633.284.633.633v5.683ZM33.82 18.726H22.337a2.182 2.182 0 0 0-2.18 2.179v8.625a2.182 2.182 0 0 0 2.18 2.179h2.824v2.742h-.657a.773.773 0 1 0 0 1.547h7.148a.773.773 0 1 0 0-1.547h-.656v-2.742h2.824A2.182 2.182 0 0 0 36 29.53v-8.625a2.182 2.182 0 0 0-2.18-2.18ZM29.45 34.45h-2.742V31.71h2.742v2.742Zm5.004-4.921a.633.633 0 0 1-.633.633H22.337a.633.633 0 0 1-.633-.633v-1.394h12.75v1.394Zm0-2.941h-12.75v-5.683c0-.349.284-.633.633-.633H33.82c.35 0 .633.284.633.633v5.683ZM3.704 15.126a.773.773 0 0 0 .773-.773v-3.516h3.516a.773.773 0 1 0 0-1.547H3.704a.773.773 0 0 0-.774.774v4.289c0 .427.347.773.774.773ZM28.007 10.837h3.516v3.516a.773.773 0 1 0 1.547 0v-4.29a.773.773 0 0 0-.774-.773h-4.289a.773.773 0 1 0 0 1.547Z"
        />
        <path
          fill="#DFB757"
          d="M24.747 1.494c-4.477-1.99-9.017-1.99-13.494 0a.773.773 0 0 0-.46.707v4.397c0 4.582 2.706 8.745 6.893 10.606a.774.774 0 0 0 .628 0c4.187-1.861 6.893-6.024 6.893-10.606V2.201a.773.773 0 0 0-.46-.707Zm-1.087 5.104c0 3.855-2.21 7.369-5.66 9.046-3.449-1.677-5.66-5.19-5.66-9.046V2.712c3.759-1.543 7.562-1.543 11.32 0v3.886Z"
        />
        <path
          fill="#DFB757"
          d="M16.273 8.087a.773.773 0 0 0-1.094 1.094l1.516 1.517a.773.773 0 0 0 1.094 0l3.032-3.033a.773.773 0 1 0-1.093-1.094L17.242 9.057l-.97-.97Z"
        />
      </svg>
    ),
  },
];

export const BtoBMigrationService = () => {
  return (
    <section className="bg-[#F7F7F7] px-4 py-8 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col-reverse md:flex-col wmd:flex-row-reverse">
        <div className="w-full bg-white wmd:w-1/2 wxl:p-20 md:py-[60px] md:px-10 p-5 flex flex-col gap-5">
          <h2 className="text-[32px] font-semibold leading-[38px] md:text-[40px] md:leading-[46px] wmd:text-[48px] wmd:leading-[58px]">
            B2B Migration Services
          </h2>

          <div className="flex flex-col gap-5">
            {migrationServices.map((service) => (
              <article
                className="flex items-start gap-4 border-b border-[#0000001A] py-7 md:gap-5"
                key={service.title}
              >
                <div className="pt-[5px]">{service.icon}</div>
                <div>
                  <h3 className="mb-2 xl:text-[20px] text-[16px] font-medium leading-[1.2] md:mb-3 mt-2">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[22px] text-[#707070] md:text-base wxl:leading-[27px]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <ButtonLink
            className="mt-0 h-[43px]  w-fit md:mt-4"
            href="/book-a-demo"
          >
            Book a call
          </ButtonLink>
        </div>

        <div className="relative md:min-h-[80px] min-h-[300px] w-full min-[881px]:w-1/2">
          <Image
            alt="A business team collaborating around a laptop"
            className="object-cover"
            fill
            sizes="(min-width: 881px) 50vw, 100vw"
            src="/images/2025/10/Frame_1000007502_528f9b8d-a8fc-421d-9de4-6cc082652b77-e1761066998327.webp"
          />
        </div>
      </div>
    </section>
  );
};
