import {
  BarChartIcon,
  File,
  Fingerprint,
  SendIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import Wrapper from '../../components/Wrapper'
import { NumberTicker } from '@/components/ui/number-ticker'
import Hero2 from '../../components/Hero2'
import { Connect } from '../../components/ui/new-cta'
import { AnimatedListDemo } from '../../components/AnimatedListHome'
import LazyLoadMotion from '../../components/LazyLoadMotion'
import { TerminalDemo } from '../../components/TerminalBentoItem'
import { FAQCTA } from '../../components/faq-cta'
import Impacts from '../../components/Impacts'

const businessHero = {
  heading: 'Passport Verification API',
  description:
    'Authenticate passport details to verify identity and travel document legitimacy.',
  button: {
    text: 'Get API Keys',
    url: 'https://www.shadcnblocks.com',
  },
  // background: <Ripple />,
  reviews: {
    count: 200,
    avatars: [
      {
        id: 1,
        name: 'John Doe',
        designation: 'Software Engineer',
        image:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      },
      {
        id: 2,
        name: 'Robert Johnson',
        designation: 'Product Manager',
        image:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 3,
        name: 'Jane Smith',
        designation: 'Data Scientist',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 4,
        name: 'Emily Davis',
        designation: 'UX Designer',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        id: 5,
        name: 'Tyler Durden',
        designation: 'Soap Developer',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      },
      {
        id: 6,
        name: 'Dora',
        designation: 'The Explorer',
        image:
          'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
      },
    ],
  },
}

const features = [
  {
    badge: <ShieldCheckIcon className="w-5 h-5" />,
    title: 'Fast & Reliable',
    iconColor: 'text-purple-600 bg-purple-600/10',
    backgroundColor: 'bg-purple-600/10',
    className: 'lg:h-[340px] bg-purple-600/10 text-purple-600',
    description:
      'Get instant verification with real-time data checks, ensuring accuracy and speed',

    component: (
      <div className="absolute -bottom-48 -right-2 lg:-bottom-40 lg:-right-2">
        <TerminalDemo />
      </div>
    ),
  },
  {
    badge: <SendIcon className="w-5 h-5" />,
    title: 'Secure & Compliant',
    description:
      ' We follow industry-leading security standards to safeguard your data.',
    iconColor: 'text-primary bg-primary/10',
    backgroundColor: 'bg-primary/10',
    className: 'lg:h-[340px] bg-primary/10 text-primary',
    component: (
      <div className="absolute -bottom-56 right-1 lg:-bottom-48 lg:right-2 lg:left-auto ">
        <AnimatedListDemo />
      </div>
    ),
  },
  {
    badge: <BarChartIcon className="w-5 h-5" />,
    title: 'Seamless Integration',
    description: 'Our API-based verification enables effortless automation.',
    iconColor: 'text-yellow-600 bg-yellow-600/10',
    backgroundColor: 'bg-yellow-600/10',
    className: 'lg:h-[340px] bg-yellow-600/10 text-yellow-600',
    component: (
      <div className="relative w-full h-full">
        <div className="absolute -right-8 -bottom-12 lg:-right-10 lg:-bottom-7">
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
  },
]

const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about identity verification. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready to Verify Securely?',
  ctaDescription:
    'Join thousands of businesses and individuals using our platform for seamless identity verification.',
  items: [
    {
      id: 'faq-1',
      question: 'What is identity verification, and why is it important?',
      answer:
        'Identity verification confirms an individual’s identity using official documents or biometric data. It is essential for fraud prevention, regulatory compliance, and secure transactions.',
    },
    {
      id: 'faq-2',
      question: 'How does Aadhaar-based identity verification work?',
      answer:
        'Aadhaar-based verification checks the provided details against the UIDAI database using OTP authentication or biometric validation to ensure authenticity.',
    },
    {
      id: 'faq-3',
      question: 'How secure is digital identity verification?',
      answer:
        'Our digital identity verification process uses encryption, AI-powered fraud detection, and secure APIs to protect user data and prevent identity theft.',
    },
    {
      id: 'faq-4',
      question: 'Can identity verification be done remotely?',
      answer:
        'Yes, online identity verification allows users to authenticate themselves remotely using document scanning, facial recognition, and liveness detection.',
    },
    {
      id: 'faq-5',
      question: 'What happens if identity verification fails?',
      answer:
        'If verification fails, users may need to re-upload documents, provide clearer images, or verify details manually. Our support team is available to assist.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any verification-related concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://youridentityverificationsite.com',
}

const featuresHeading = {
  badge: 'Features',
  heading: 'Features at a glance',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
}

const otherProducts = [
  {
    title: 'Business Verification',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <File className="w-5 h-5" />,
    iconColor: 'text-yellow-600 bg-yellow-600/10',
    backgroundColor: 'bg-yellow-600/10',
    className: 'bg-yellow-600/10',
    url: '/business',
    button: (
      <InteractiveHoverButton className="rounded-md flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Aadhar E-Signature',
    description: 'Authenticate businesses by verifying GST details.',
    icon: <Fingerprint className="w-5 h-5" />,
    iconColor: 'text-violet-600 bg-violet-600/10',
    className: 'bg-violet-600/10',
    backgroundColor: 'bg-violet-600/10',
    url: '/aadhar',
    button: (
      <InteractiveHoverButton className="rounded-md flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const otherProductsHeading = {
  badge: 'Products',
  title: 'Other Products',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const PassportVerification = () => {
  return (
    <div>
      <div className="mb-16">
        <Hero2 businessHero={businessHero} />
      </div>
      {/* <Wrapper>
        <section className="py-16">
          <div className=" mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                INTRODUCTION
              </h2>
              <div className="space-y-6 text-muted-foreground text-center">
                <p>
                  Founded in 2018, Papnei began with a simple yet powerful
                  vision: to make healthcare more accessible, efficient, and
                  patient-centered. What started as a small team of dedicated
                  healthcare professionals and technologists has grown into a
                  leading healthcare innovation company.
                </p>
                <p>
                  Our journey has been marked by continuous learning,
                  adaptation, and a relentless focus on improving patient
                  outcomes. Through partnerships with healthcare providers,
                  research institutions, and technology experts, we&apos;ve
                  developed solutions that address real-world healthcare
                  challenges.
                </p>
                <p>
                  Today, Papnei stands at the intersection of healthcare and
                  technology, driving meaningful change in how care is delivered
                  and experienced. Our commitment to excellence and innovation
                  remains as strong as ever as we continue to expand our reach
                  and impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Wrapper> */}

      <Impacts />

      <Wrapper>
        <div className="w-full">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="py-20">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>

      <div className="mb-16">
        <Connect />
      </div>
      <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default PassportVerification
