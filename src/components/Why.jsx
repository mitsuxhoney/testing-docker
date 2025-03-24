import { cn } from '@/lib/utils'
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { useEffect, useState } from 'react'
import { useTheme } from '@/components/theme-provider'
import { OrbitingCirclesDemo as OrbitingCirclesHome } from './OrbitingCirclesHome'
import { AnimatedListDemo } from './AnimatedListHome'
import LazyLoadMotion from './LazyLoadMotion'
import { TerminalDemo } from './TerminalBentoItem'
import Wrapper from './Wrapper'

const why = {
  badge: 'Benefits',
  title: 'Why Choose Us?',
  description: 'Secure, reliable, and efficient identity verification.',
}

const items = [
  {
    title: <h2 className="">AI-Powered Verification</h2>,
    heading: <h3 className="">Instant & Accurate Identity Checks</h3>,
    description: (
      <span className="text-sm">
        Utilize advanced AI for rapid and reliable identity verification
        processes.
      </span>
    ),
    header: (
      <LazyLoadMotion>
        <div className="absolute -bottom-44 -right-14 lg:-bottom-42 lg:-right-2">
          <TerminalDemo />
        </div>
      </LazyLoadMotion>
    ),
    className: 'max-md:col-span-2 lg:col-span-1 lg:h-[260px] bg-yellow-500/10',
    icon: <IconClipboardCopy className="h-4 w-4" />,
  },
  {
    title: <h2 className="">Automated Document Scanning</h2>,
    heading: <h3>Efficient Data Extraction & Validation</h3>,

    header: (
      <LazyLoadMotion>
        <div className="relative w-full -right-20">
          <OrbitingCirclesHome />
        </div>
      </LazyLoadMotion>
    ),
    description: (
      <span className="text-sm">
        Automate document processing, extracting key data and validating
        authenticity.
      </span>
    ),

    className:
      'max-md:col-span-2 lg:col-span-1 lg:h-[260px] bg-violet-500/10 relative z-[1]',
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: <h2 className="">Multi-Platform Integrations</h2>,
    heading: <h3>Seamless Connectivity Across Systems</h3>,
    description: (
      <span className="text-sm">
        Connect and integrate with various platforms for unified verification
        workflows.
      </span>
    ),
    header: (
      <div className="relative w-full h-full">
        <div className="absolute -bottom-16 -right-16 lg:-right-4 lg:-bottom-4">
          <svg
            width="242"
            height="154"
            viewBox="0 0 242 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M115.989 119.545L119.177 125.06H119.313L122.535 119.545H127.256L121.989 128.273L127.427 137H122.586L119.313 131.426H119.177L115.904 137H111.097L116.509 128.273L111.234 119.545H115.989ZM129.438 137V119.545H136.648C137.955 119.545 139.083 119.781 140.032 120.253C140.987 120.719 141.722 121.389 142.239 122.264C142.756 123.134 143.015 124.165 143.015 125.358C143.015 126.568 142.751 127.597 142.222 128.443C141.694 129.284 140.944 129.926 139.972 130.369C139.001 130.807 137.85 131.026 136.521 131.026H131.961V127.702H135.737C136.373 127.702 136.904 127.619 137.33 127.455C137.762 127.284 138.089 127.028 138.31 126.688C138.532 126.341 138.643 125.898 138.643 125.358C138.643 124.818 138.532 124.372 138.31 124.02C138.089 123.662 137.762 123.395 137.33 123.219C136.898 123.037 136.367 122.946 135.737 122.946H133.657V137H129.438ZM139.265 129.023L143.612 137H139.009L134.748 129.023H139.265ZM149.104 137H144.57L150.46 119.545H156.076L161.965 137H157.431L153.332 123.943H153.195L149.104 137ZM148.499 130.131H157.977V133.335H148.499V130.131ZM161.194 119.545H165.907L169.597 126.849H169.751L173.441 119.545H178.154L171.771 131.17V137H167.577V131.17L161.194 119.545Z"
              fill="#0D9488"
            />
            <g filter="url(#filter0_dii_248_20967)">
              <rect
                x="80.5"
                y="80.5"
                width="127"
                height="127"
                rx="31.5"
                stroke="#9292AF"
                shapeRendering="crispEdges"
              />
            </g>
            <rect
              opacity="0.1"
              x="0.5"
              y="0.5"
              width="287"
              height="287"
              rx="111.5"
              stroke="#0F172A"
            />
            <rect
              opacity="0.3"
              x="20.5"
              y="20.5"
              width="247"
              height="247"
              rx="91.5"
              stroke="#0F172A"
            />
            <rect
              opacity="0.6"
              x="40.5"
              y="40.5"
              width="207"
              height="207"
              rx="71.5"
              stroke="#0F172A"
            />
            <rect
              x="60.5"
              y="60.5"
              width="167"
              height="167"
              rx="51.5"
              stroke="#0F172A"
            />
            <defs>
              <filter
                id="filter0_dii_248_20967"
                x="61"
                y="79"
                width="166"
                height="173"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect1_dropShadow_248_20967"
                />
                <feOffset dy="25" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_248_20967"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_248_20967"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect2_innerShadow_248_20967"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.8 0 0 0 0 0.780392 0 0 0 0 0.780392 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_248_20967"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="erode"
                  in="SourceAlpha"
                  result="effect3_innerShadow_248_20967"
                />
                <feOffset dy="-1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.8 0 0 0 0 0.780392 0 0 0 0 0.780392 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_innerShadow_248_20967"
                  result="effect3_innerShadow_248_20967"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    ),
    className:
      'max-md:col-span-2 lg:col-span-1 lg:h-[260px] relative z-[-4] bg-purple-500/10',
    icon: <IconSignature className="h-4 w-4" />,
  },
  {
    title: <h2 className="">Secure Identity Checks</h2>,
    heading: <h3>Keep fraudsters away with real-time authentication.</h3>,
    description: (
      <span className="text-sm">
        Fast and accurate ID verification for peace of mind.
      </span>
    ),
    contentClassName: 'gap-6',
    header: (
      <LazyLoadMotion>
        <div className="absolute -bottom-[17rem] right-0 lg:-bottom-48 lg:right-10">
          <AnimatedListDemo />
        </div>
      </LazyLoadMotion>
    ),
    className: 'max-md:col-span-2 lg:col-span-2 lg:h-[170px] bg-primary/10',
    icon: <IconTableColumn className="h-4 w-4" />,
  },

  {
    title: <h2 className="">Safe & Compliant</h2>,
    heading: <h2>Our strict regulations keeps your info private.</h2>,
    description: (
      <span className="text-sm">
        Your data stays protected with industry-standard security.
      </span>
    ),
    header: '',
    contentClassName: 'gap-6',
    className: 'max-md:col-span-2 lg:col-span-1 lg:h-[170px] bg-cyan-500/10',
    icon: <IconBoxAlignRightFilled className="h-4 w-4" />,
  },
]

export function Why() {
  const { theme } = useTheme()
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    setColor(theme === 'dark' ? '#ffffff' : '#000000')
  }, [theme])
  return (
    <div className="py-20">
      <div className="text-center mb-6">
        <div className="mb-4 text-center sora-heading text-3xl lg:text-5xl font-bold leading-[1.2]">
          Why Choose {` `}
          {/* <div className="inline-block bg-primary rounded-md -rotate-2 p-2">
            <div className="rotate-2 text-white ">Choose</div>
          </div>{' '} */}
          Us ?
        </div>
        <p className="mx-auto mb-8 text-center text-md font-medium text-foreground/80">
          {why.description}
        </p>
      </div>
      <Wrapper>
        <BentoGrid gap={20}>
          {items.map((item, index) => (
            <BentoGridItem
              key={index}
              title={item.title}
              description={item.description}
              heading={item.heading}
              header={item.header}
              contentClassName={item.contentClassName}
              className={cn(
                '[&>p:text-lg] rounded-lg bg-[#14b8a6]/10 relative',
                item.className
              )}
              icon={item.icon}
            ></BentoGridItem>
          ))}
        </BentoGrid>
      </Wrapper>
    </div>
  )
}
