import {
  CheckCircle,
  File,
  Fingerprint,
  LockIcon,
  SendIcon,
} from 'lucide-react'
import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import Wrapper from '../../components/Wrapper'
import { NumberTicker } from '@/components/ui/number-ticker'
import Hero2 from '../../components/Hero2'
import { Connect } from '../../components/ui/new-cta'

const businessHero = {
  heading: 'PAN Validation API',
  description: 'Verify and validate PAN details for accuracy and compliance.',
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
    badge: <CheckCircle className="w-4 h-4" />,
    title: 'Accurate PAN Validation',
    description: 'Ensure PAN details are valid before processing.',
  },
  {
    badge: <SendIcon className="w-4 h-4" />,
    title: 'Fast Response Time',
    description: 'Real-time validation with minimal response time.',
  },
  {
    badge: <LockIcon className="w-4 h-4" />,
    title: 'Data Security',
    description: 'Secure validation with encrypted data protection.',
  },
]

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

const PANValidation = () => {
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

      <section className="py-20 bg-secondary/10 mb-16">
        <div className=" mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="">
              Enhancing trust and security in digital transactions through
              AI-driven verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={500}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">+</span>
              </div>
              <p className="text-xl ">Businesses Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Identities Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Documents Verified</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                <NumberTicker
                  value={1}
                  className="font-bold tracking-normal text-secondary"
                />
                <span className="text-secondary">M+</span>
              </div>
              <p className="text-xl">Users Verified</p>
            </div>
          </div>
        </div>
      </section>

      <Wrapper>
        <div className="w-full">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>

      <Wrapper>
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold  mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about Aadhaar e-Sign
                  verification and our services.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    What is Aadhaar e-Sign verification?
                  </h3>
                  <p className="text-muted-foreground">
                    Aadhaar e-Sign verification is a secure digital signing
                    process that allows users to electronically sign documents
                    using their Aadhaar credentials, ensuring authenticity and
                    compliance with legal regulations.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    How can I use Aadhaar e-Sign for document verification?
                  </h3>
                  <p className="text-muted-foreground">
                    You can use Aadhaar e-Sign for document verification by
                    linking your Aadhaar number, authenticating via OTP or
                    biometric verification, and digitally signing documents
                    seamlessly through our platform.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    Is Aadhaar e-Sign legally valid?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, Aadhaar e-Sign is legally valid under the Information
                    Technology Act, 2000. It is recognized by regulatory
                    authorities and ensures a secure, tamper-proof digital
                    signature for official documents.
                  </p>
                </div>

                <div className="rounded-md p-5">
                  <h3 className="text-lg font-bold  mb-2">
                    Is Aadhaar e-Sign secure?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely. Aadhaar e-Sign follows stringent security
                    protocols, including encryption, two-factor authentication,
                    and compliance with UIDAI guidelines, ensuring data
                    integrity and user privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}

      <Wrapper>
        <div className="">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
          />
        </div>
      </Wrapper>

      {/* <div className="w-full text-center relative overflow-hidden">
        <div className="w-full mx-auto">
            <Meteors number={50} />
          </div>
        <AuroraBackground className="w-screen h-full py-10">
          <div className="w-full flex flex-col gap-12 items-center">
            <Wrapper>
              <div className="flex flex-col gap-2 items-center">
                <h3 className="text-xl font-semibold md:text-4xl">{heading}</h3>
                <SparklesText
                  className={`text-3xl font-semibold md:text-5xl`}
                  text="Ready To Get Started"
                />
                <TypingAnimation>{heading}</TypingAnimation>
                <p className="text-muted-foreground text-sm lg:text-md">
                  Join thousand of satisfied customers using our platform to
                  build amazing websites.
                </p>
              </div>
            </Wrapper>

            <div className="max-w-md lg:max-w-lg w-full">
              <ExpandableCardBasic />
            </div>
          </div>
        </AuroraBackground>
      </div> */}
      <div className="mb-16">
        <Connect />
      </div>
    </div>
  )
}

export default PANValidation
