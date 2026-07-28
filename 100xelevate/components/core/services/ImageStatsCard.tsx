import Image from 'next/image'

const stats = [
    { value: '48%', description: 'Average Speed & Performance Improvement' },
    { value: '76%', description: "Of Visitors Don't Request Transfer to a human Agent" },
]

type ImageStatsCardProps = {
    bgColor?: string
    reverse?: boolean
}

export const ImageStatsCard = ({ bgColor = 'bg-white', reverse = false }: ImageStatsCardProps) => {
    return (
        <div className={`flex ${reverse ? 'lg:flex-row-reverse md:flex-col-reverse flex-col' : 'lg:flex-row flex-col'} md:gap-[30px] gap-5`}>

            {/* Left: Image */}
            <div className={`flex items-center justify-center w-full lg:max-w-[880px] md:px-[10px] md:py-[30px] p-5 lg:min-w-[65%] ${bgColor}`}>
                <Image
                    src='/images/2025/10/speed-image4-1024x615.webp'
                    alt='Before and after Shopify speed test results showing 7.57% site speed increase'
                    width={8000}
                    height={4800}
                    className='w-full max-w-[800px] h-auto'
                />
            </div>

            {/* Right: Stats + Text + Author */}
            <div className='flex lg:flex-col md:flex-row flex-col md:gap-[30px] gap-5 md:items-start'>

                {/* Stats grid */}
                <div className={`flex md:flex-row flex-col ${bgColor} md:py-10 py-0 md:divide-x max-md:divide-y divide-[#0000001A] md:mx-auto`}>
                    {stats.map((stat, i) => (
                        <div key={i} className='flex flex-col md:px-[30px] md:py-0 p-[20px]'>
                            <h3 className='xl:text-[40px] md:text-[32px] text-[16px] font-[500] leading-tight text-black my-2'>{stat.value}</h3>
                            <p className='text-[#707070] xl:text-[16px] xl:leading-[27px] text-[14px] md:leading-[21px] leading-[22px]'>{stat.description}</p>
                        </div>
                    ))}
                </div>

                {/* Card text */}
                <div className={`flex flex-col gap-5 md:py-[40px] md:px-[30px] p-5 ${bgColor} w-full lg:max-w-full md:max-w-[50%]`}>
                    <div>
                        <h3 className='xl:text-[18px] leading-[27px] text-[16px] font-semibold text-black my-2'>Optimize images</h3>
                        <p className='text-[#707070] xl:text-[16px] xl:leading-[27px] md:text-[16px] text-[14px] leading-[22px]'>
                            &ldquo;Images comprise a large percentage of Internet traffic, and they often take the longest to load on a website since image files tend to be larger in size than HTML and CSS files. Luckily, image load time can be reduced via image optimization.&rdquo;
                        </p>
                    </div>

                    {/* Author box */}
                    <div className='flex items-center gap-4'>
                        <Image
                            src='/images/2025/10/brooke-img_1024x1024.avif'
                            alt='Picture of Brooke Sanderson'
                            width={62}
                            height={62}
                            className='rounded-full object-cover w-[62px] h-[62px] shrink-0'
                        />
                        <div className='flex flex-col'>
                            <h4 className='font-semibold md:text-[20px] text-[16px] text-black mt-[8px] mb-[5px] leading-[1.2]'>Brooke Sanderson</h4>
                            <p className='text-[#707070] text-sm leading-[20px]'>Merchant Success Director</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
