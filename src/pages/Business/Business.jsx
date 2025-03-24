import {
  BanknoteIcon,
  BarChartIcon,
  BuildingIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  FactoryIcon,
  FileTextIcon,
  Fingerprint,
  GlobeIcon,
  IdCard,
  KeyIcon,
  PhoneIcon,
  SendIcon,
  ShieldCheckIcon,
  UtensilsIcon,
} from 'lucide-react'
import Wrapper from '../../components/Wrapper'
import step2 from '../../assets/step2.png'
import step3 from '../../assets/step3.png'
import BusinessProducts from '../../components/BusinessProducts'
import FeaturesSection from '../../components/ui/features-section'
import { IntegrationBenefits } from '../../components/IntegrationBenefits'
import { FAQCTA } from '../../components/faq-cta'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover'
import Hero2 from '../../components/Hero2'
import Ripple from '../../components/ui/Ripple'
import { Connect } from '../../components/ui/new-cta'
import LazyLoadMotion from '../../components/LazyLoadMotion'
import { TerminalDemo } from '../../components/TerminalBentoItem'
import { AnimatedListDemo } from '../../components/AnimatedListHome'
import { TerminalDemo1 } from '../../components/TerminalDemo1'

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

const featuresHeading = {
  badge: 'Features',
  heading: 'Features at a glance',
  description:
    'Discover our suite of verification services designed to enhance your business operations.',
}

const businessHero = {
  heading: 'Business Verification Made Simple with XRAY ',
  description: 'Trust, Transparency, and Security for Your Business',
  button: {
    text: 'Get API Keys',
    url: 'https://www.shadcnblocks.com',
  },
  background: <Ripple />,
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

const featuresBenefits = [
  {
    title: 'Get Started Instantly',
    content: 'Sign up and access our API dashboard in minutes.',
    image:
      'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Integrate with Ease',
    content:
      'Use our well-documented APIs to connect seamlessly with your system.',
    image:
      'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Automate Verification',
    content:
      'Leverage our real-time verification tools to enhance security and compliance.',
    image:
      'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop',
  },
]
const featureSteps = [
  {
    step: 'Step 1',
    title: 'Get Started Instantly',
    icon: (
      <svg
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 10.9997C13.6133 10.9997 16 8.61301 16 5.66634C16 2.71967 13.6133 0.333008 10.6667 0.333008C7.72 0.333008 5.33333 2.71967 5.33333 5.66634C5.33333 8.61301 7.72 10.9997 10.6667 10.9997ZM10.6667 2.99967C12.1333 2.99967 13.3333 4.19967 13.3333 5.66634C13.3333 7.13301 12.1333 8.33301 10.6667 8.33301C9.2 8.33301 8 7.13301 8 5.66634C8 4.19967 9.2 2.99967 10.6667 2.99967ZM2.66667 18.9997C2.93333 18.1597 6.09333 16.7597 9.28 16.413L12 13.7463C11.48 13.693 11.0933 13.6663 10.6667 13.6663C7.10667 13.6663 0 15.453 0 18.9997V21.6663H12L9.33333 18.9997H2.66667ZM23.4667 11.6663L16.6267 18.5597L13.8667 15.7863L12 17.6663L16.6267 22.333L25.3333 13.5463L23.4667 11.6663Z"
          fill="#1c3149"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 10.9997C13.6133 10.9997 16 8.61301 16 5.66634C16 2.71967 13.6133 0.333008 10.6667 0.333008C7.72 0.333008 5.33333 2.71967 5.33333 5.66634C5.33333 8.61301 7.72 10.9997 10.6667 10.9997ZM10.6667 2.99967C12.1333 2.99967 13.3333 4.19967 13.3333 5.66634C13.3333 7.13301 12.1333 8.33301 10.6667 8.33301C9.2 8.33301 8 7.13301 8 5.66634C8 4.19967 9.2 2.99967 10.6667 2.99967ZM2.66667 18.9997C2.93333 18.1597 6.09333 16.7597 9.28 16.413L12 13.7463C11.48 13.693 11.0933 13.6663 10.6667 13.6663C7.10667 13.6663 0 15.453 0 18.9997V21.6663H12L9.33333 18.9997H2.66667ZM23.4667 11.6663L16.6267 18.5597L13.8667 15.7863L12 17.6663L16.6267 22.333L25.3333 13.5463L23.4667 11.6663Z"
          fill="#1c3149"
        />
      </svg>
    ),
    content: 'Sign up and access our API dashboard in minutes.',
    image:
      'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop',
    terminal: <img src={step2} alt="" />,
  },
  {
    step: 'Step 2',
    title: 'Integrate with Ease',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 9.16667C25.7867 9.16667 24 10.9533 24 13.1667C24 13.26 24 13.3533 24.0133 13.4467L21.3067 14.3533C20.4533 12.74 18.88 11.5667 17.0133 11.26V8.38C18.72 7.92667 20 6.36667 20 4.5C20 2.28667 18.2133 0.5 16 0.5C13.7867 0.5 12 2.28667 12 4.5C12 6.36667 13.28 7.92667 15 8.38V11.26C13.1333 11.5667 11.56 12.74 10.7067 14.3533L7.98667 13.4467C8 13.3533 8 13.26 8 13.1667C8 10.9533 6.21333 9.16667 4 9.16667C1.78667 9.16667 0 10.9533 0 13.1667C0 15.38 1.78667 17.1667 4 17.1667C5.41333 17.1667 6.64 16.4333 7.36 15.34L10.0667 16.2467C9.8 17.9667 10.2933 19.7933 11.52 21.1667L9.64 23.5267C9.13333 23.2867 8.58667 23.1667 8 23.1667C5.78667 23.1667 4 24.9533 4 27.1667C4 29.38 5.78667 31.1667 8 31.1667C10.2133 31.1667 12 29.38 12 27.1667C12 26.26 11.7067 25.4333 11.2 24.7667L13.08 22.4067C14.8933 23.42 17.1067 23.4067 18.9067 22.4067L20.7867 24.7667C20.2933 25.4333 20 26.26 20 27.1667C20 29.38 21.7867 31.1667 24 31.1667C26.2133 31.1667 28 29.38 28 27.1667C28 24.9533 26.2133 23.1667 24 23.1667C23.4133 23.1667 22.8667 23.2867 22.36 23.5133L20.48 21.1533C21.72 19.7667 22.2 17.9533 21.9333 16.2333L24.64 15.3267C25.3467 16.42 26.5867 17.1533 28 17.1533C30.2133 17.1533 32 15.3667 32 13.1533C32 10.94 30.2133 9.16667 28 9.16667ZM4 14.5C3.26667 14.5 2.66667 13.9 2.66667 13.1667C2.66667 12.4333 3.26667 11.8333 4 11.8333C4.73333 11.8333 5.33333 12.4333 5.33333 13.1667C5.33333 13.9 4.73333 14.5 4 14.5ZM8 28.5C7.26667 28.5 6.66667 27.9 6.66667 27.1667C6.66667 26.4333 7.26667 25.8333 8 25.8333C8.73333 25.8333 9.33333 26.4333 9.33333 27.1667C9.33333 27.9 8.73333 28.5 8 28.5ZM14.6667 4.5C14.6667 3.76667 15.2667 3.16667 16 3.16667C16.7333 3.16667 17.3333 3.76667 17.3333 4.5C17.3333 5.23333 16.7333 5.83333 16 5.83333C15.2667 5.83333 14.6667 5.23333 14.6667 4.5ZM16 20.5C14.16 20.5 12.6667 19.0067 12.6667 17.1667C12.6667 15.3267 14.16 13.8333 16 13.8333C17.84 13.8333 19.3333 15.3267 19.3333 17.1667C19.3333 19.0067 17.84 20.5 16 20.5ZM24 25.8333C24.7333 25.8333 25.3333 26.4333 25.3333 27.1667C25.3333 27.9 24.7333 28.5 24 28.5C23.2667 28.5 22.6667 27.9 22.6667 27.1667C22.6667 26.4333 23.2667 25.8333 24 25.8333ZM28 14.5C27.2667 14.5 26.6667 13.9 26.6667 13.1667C26.6667 12.4333 27.2667 11.8333 28 11.8333C28.7333 11.8333 29.3333 12.4333 29.3333 13.1667C29.3333 13.9 28.7333 14.5 28 14.5Z"
          fill="#1c3149"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 9.16667C25.7867 9.16667 24 10.9533 24 13.1667C24 13.26 24 13.3533 24.0133 13.4467L21.3067 14.3533C20.4533 12.74 18.88 11.5667 17.0133 11.26V8.38C18.72 7.92667 20 6.36667 20 4.5C20 2.28667 18.2133 0.5 16 0.5C13.7867 0.5 12 2.28667 12 4.5C12 6.36667 13.28 7.92667 15 8.38V11.26C13.1333 11.5667 11.56 12.74 10.7067 14.3533L7.98667 13.4467C8 13.3533 8 13.26 8 13.1667C8 10.9533 6.21333 9.16667 4 9.16667C1.78667 9.16667 0 10.9533 0 13.1667C0 15.38 1.78667 17.1667 4 17.1667C5.41333 17.1667 6.64 16.4333 7.36 15.34L10.0667 16.2467C9.8 17.9667 10.2933 19.7933 11.52 21.1667L9.64 23.5267C9.13333 23.2867 8.58667 23.1667 8 23.1667C5.78667 23.1667 4 24.9533 4 27.1667C4 29.38 5.78667 31.1667 8 31.1667C10.2133 31.1667 12 29.38 12 27.1667C12 26.26 11.7067 25.4333 11.2 24.7667L13.08 22.4067C14.8933 23.42 17.1067 23.4067 18.9067 22.4067L20.7867 24.7667C20.2933 25.4333 20 26.26 20 27.1667C20 29.38 21.7867 31.1667 24 31.1667C26.2133 31.1667 28 29.38 28 27.1667C28 24.9533 26.2133 23.1667 24 23.1667C23.4133 23.1667 22.8667 23.2867 22.36 23.5133L20.48 21.1533C21.72 19.7667 22.2 17.9533 21.9333 16.2333L24.64 15.3267C25.3467 16.42 26.5867 17.1533 28 17.1533C30.2133 17.1533 32 15.3667 32 13.1533C32 10.94 30.2133 9.16667 28 9.16667ZM4 14.5C3.26667 14.5 2.66667 13.9 2.66667 13.1667C2.66667 12.4333 3.26667 11.8333 4 11.8333C4.73333 11.8333 5.33333 12.4333 5.33333 13.1667C5.33333 13.9 4.73333 14.5 4 14.5ZM8 28.5C7.26667 28.5 6.66667 27.9 6.66667 27.1667C6.66667 26.4333 7.26667 25.8333 8 25.8333C8.73333 25.8333 9.33333 26.4333 9.33333 27.1667C9.33333 27.9 8.73333 28.5 8 28.5ZM14.6667 4.5C14.6667 3.76667 15.2667 3.16667 16 3.16667C16.7333 3.16667 17.3333 3.76667 17.3333 4.5C17.3333 5.23333 16.7333 5.83333 16 5.83333C15.2667 5.83333 14.6667 5.23333 14.6667 4.5ZM16 20.5C14.16 20.5 12.6667 19.0067 12.6667 17.1667C12.6667 15.3267 14.16 13.8333 16 13.8333C17.84 13.8333 19.3333 15.3267 19.3333 17.1667C19.3333 19.0067 17.84 20.5 16 20.5ZM24 25.8333C24.7333 25.8333 25.3333 26.4333 25.3333 27.1667C25.3333 27.9 24.7333 28.5 24 28.5C23.2667 28.5 22.6667 27.9 22.6667 27.1667C22.6667 26.4333 23.2667 25.8333 24 25.8333ZM28 14.5C27.2667 14.5 26.6667 13.9 26.6667 13.1667C26.6667 12.4333 27.2667 11.8333 28 11.8333C28.7333 11.8333 29.3333 12.4333 29.3333 13.1667C29.3333 13.9 28.7333 14.5 28 14.5Z"
          fill="#1c3149"
        />
      </svg>
    ),
    content:
      'Use our well-documented APIs to connect seamlessly with your system.',
    image:
      'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop',
    terminal: <TerminalDemo1 />,
  },
  {
    step: 'Step 3',
    title: 'Automate Verification',
    icon: (
      <svg
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3334 14.8337C12.0668 14.8337 12.6668 15.4337 12.6668 16.167C12.6668 16.9003 12.0668 17.5003 11.3334 17.5003C10.6001 17.5003 10.0001 16.9003 10.0001 16.167C10.0001 15.4337 10.6001 14.8337 11.3334 14.8337ZM11.3334 12.167C9.12009 12.167 7.33342 13.9537 7.33342 16.167C7.33342 18.3803 9.12009 20.167 11.3334 20.167C13.5468 20.167 15.3334 18.3803 15.3334 16.167C15.3334 13.9537 13.5468 12.167 11.3334 12.167ZM22.6668 9.50033L24.1201 6.28699L27.3334 4.83366L24.1201 3.38033L22.6668 0.166992L21.2134 3.38033L18.0001 4.83366L21.2134 6.28699L22.6668 9.50033ZM26.3734 14.4603L25.3334 12.167L24.2934 14.4603L22.0001 15.5003L24.2934 16.5403L25.3334 18.8337L26.3734 16.5403L28.6668 15.5003L26.3734 14.4603ZM19.6668 16.167C19.6668 16.007 19.6668 15.8337 19.6534 15.6737L22.2401 13.7137L18.9068 7.94033L15.9201 9.19366C15.6534 9.02033 15.3601 8.84699 15.0668 8.70033L14.6668 5.50033H8.00009L7.60009 8.71366C7.30676 8.86033 7.02676 9.03366 6.74676 9.20699L3.76009 7.94033L0.426758 13.7137L3.01342 15.6737C3.00009 15.8337 3.00009 16.007 3.00009 16.167C3.00009 16.327 3.00009 16.5003 3.01342 16.6603L0.426758 18.6203L3.76009 24.3937L6.74676 23.1403C7.01342 23.3137 7.30676 23.487 7.60009 23.6337L8.00009 26.8337H14.6668L15.0668 23.6203C15.3601 23.4737 15.6401 23.3137 15.9201 23.127L18.9068 24.3803L22.2401 18.607L19.6534 16.647C19.6668 16.5003 19.6668 16.327 19.6668 16.167ZM17.7734 21.0203L15.4668 20.047C14.7201 20.847 13.7334 21.4337 12.6268 21.687L12.3068 24.167H10.3601L10.0534 21.687C8.94676 21.4337 7.96009 20.847 7.21342 20.047L4.90676 21.0203L3.93342 19.327L5.92009 17.8203C5.76009 17.3003 5.68009 16.7537 5.68009 16.1803C5.68009 15.607 5.76009 15.0603 5.92009 14.5403L3.93342 13.0337L4.90676 11.3403L7.21342 12.3137C7.96009 11.5137 8.94676 10.927 10.0534 10.6737L10.3601 8.16699H12.3201L12.6268 10.647C13.7334 10.9003 14.7201 11.487 15.4668 12.287L17.7734 11.3137L18.7468 13.007L16.7601 14.5137C16.9201 15.0337 17.0001 15.5803 17.0001 16.1537C17.0001 16.727 16.9201 17.2737 16.7601 17.7937L18.7468 19.3003L17.7734 21.0203Z"
          fill="#1c3149"
        />
      </svg>
    ),
    selectedIcon: (
      <svg
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3334 14.8337C12.0668 14.8337 12.6668 15.4337 12.6668 16.167C12.6668 16.9003 12.0668 17.5003 11.3334 17.5003C10.6001 17.5003 10.0001 16.9003 10.0001 16.167C10.0001 15.4337 10.6001 14.8337 11.3334 14.8337ZM11.3334 12.167C9.12009 12.167 7.33342 13.9537 7.33342 16.167C7.33342 18.3803 9.12009 20.167 11.3334 20.167C13.5468 20.167 15.3334 18.3803 15.3334 16.167C15.3334 13.9537 13.5468 12.167 11.3334 12.167ZM22.6668 9.50033L24.1201 6.28699L27.3334 4.83366L24.1201 3.38033L22.6668 0.166992L21.2134 3.38033L18.0001 4.83366L21.2134 6.28699L22.6668 9.50033ZM26.3734 14.4603L25.3334 12.167L24.2934 14.4603L22.0001 15.5003L24.2934 16.5403L25.3334 18.8337L26.3734 16.5403L28.6668 15.5003L26.3734 14.4603ZM19.6668 16.167C19.6668 16.007 19.6668 15.8337 19.6534 15.6737L22.2401 13.7137L18.9068 7.94033L15.9201 9.19366C15.6534 9.02033 15.3601 8.84699 15.0668 8.70033L14.6668 5.50033H8.00009L7.60009 8.71366C7.30676 8.86033 7.02676 9.03366 6.74676 9.20699L3.76009 7.94033L0.426758 13.7137L3.01342 15.6737C3.00009 15.8337 3.00009 16.007 3.00009 16.167C3.00009 16.327 3.00009 16.5003 3.01342 16.6603L0.426758 18.6203L3.76009 24.3937L6.74676 23.1403C7.01342 23.3137 7.30676 23.487 7.60009 23.6337L8.00009 26.8337H14.6668L15.0668 23.6203C15.3601 23.4737 15.6401 23.3137 15.9201 23.127L18.9068 24.3803L22.2401 18.607L19.6534 16.647C19.6668 16.5003 19.6668 16.327 19.6668 16.167ZM17.7734 21.0203L15.4668 20.047C14.7201 20.847 13.7334 21.4337 12.6268 21.687L12.3068 24.167H10.3601L10.0534 21.687C8.94676 21.4337 7.96009 20.847 7.21342 20.047L4.90676 21.0203L3.93342 19.327L5.92009 17.8203C5.76009 17.3003 5.68009 16.7537 5.68009 16.1803C5.68009 15.607 5.76009 15.0603 5.92009 14.5403L3.93342 13.0337L4.90676 11.3403L7.21342 12.3137C7.96009 11.5137 8.94676 10.927 10.0534 10.6737L10.3601 8.16699H12.3201L12.6268 10.647C13.7334 10.9003 14.7201 11.487 15.4668 12.287L17.7734 11.3137L18.7468 13.007L16.7601 14.5137C16.9201 15.0337 17.0001 15.5803 17.0001 16.1537C17.0001 16.727 16.9201 17.2737 16.7601 17.7937L18.7468 19.3003L17.7734 21.0203Z"
          fill="none"
        />
      </svg>
    ),
    content:
      'Leverage our real-time verification tools to enhance security and compliance.',
    image:
      'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop',
    terminal: <img src={step3} className="" />,
  },
  // {
  //   step: 'Step 4',
  //   title: 'Automate Verification',
  //   icon: (
  //     <svg
  //       width="30"
  //       height="25"
  //       viewBox="0 0 30 25"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M17.7468 10.7537L15.0002 9.50033L17.7468 8.24699L19.0002 5.50033L20.2535 8.24699L23.0002 9.50033L20.2535 10.7537L19.0002 13.5003L17.7468 10.7537ZM4.3335 16.167L5.58683 13.4203L8.3335 12.167L5.58683 10.9137L4.3335 8.16699L3.08016 10.9137L0.333496 12.167L3.08016 13.4203L4.3335 16.167ZM10.3335 9.50033L11.7868 6.28699L15.0002 4.83366L11.7868 3.38033L10.3335 0.166992L8.88016 3.38033L5.66683 4.83366L8.88016 6.28699L10.3335 9.50033ZM5.00016 24.8337L13.0002 16.8203L18.3335 22.1537L29.6668 9.40699L27.7868 7.52699L18.3335 18.1537L13.0002 12.8203L3.00016 22.8337L5.00016 24.8337Z"
  //         fill="#1c3149"
  //       />
  //     </svg>
  //   ),
  //   selectedIcon: (
  //     <svg
  //       width="30"
  //       height="25"
  //       viewBox="0 0 30 25"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M17.7468 10.7537L15.0002 9.50033L17.7468 8.24699L19.0002 5.50033L20.2535 8.24699L23.0002 9.50033L20.2535 10.7537L19.0002 13.5003L17.7468 10.7537ZM4.3335 16.167L5.58683 13.4203L8.3335 12.167L5.58683 10.9137L4.3335 8.16699L3.08016 10.9137L0.333496 12.167L3.08016 13.4203L4.3335 16.167ZM10.3335 9.50033L11.7868 6.28699L15.0002 4.83366L11.7868 3.38033L10.3335 0.166992L8.88016 3.38033L5.66683 4.83366L8.88016 6.28699L10.3335 9.50033ZM5.00016 24.8337L13.0002 16.8203L18.3335 22.1537L29.6668 9.40699L27.7868 7.52699L18.3335 18.1537L13.0002 12.8203L3.00016 22.8337L5.00016 24.8337Z"
  //         fill="#5359EF"
  //       />
  //     </svg>
  //   ),
  //   content:
  //     'Leverage our real-time verification tools to enhance security and compliance.',
  //   image:
  //     'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop',
  //   terminal: <TerminalDemo4 />,
  // },
]
const FAQCTAData = {
  heading: 'Frequently Asked Questions',
  description:
    "Everything you need to know about identity verification. Can't find the answer you're looking for? Feel free to contact our support team.",
  ctaHeading: 'Ready for Secure Business Verification?',
  ctaDescription:
    'Join thousands of businesses using our platform for seamless and compliant business verification.',
  items: [
    {
      id: 'faq-1',
      question: 'What is business verification, and why is it important?',
      answer:
        'Business verification is the process of validating a company’s legal existence, ownership, and compliance status. It is essential for fraud prevention, regulatory adherence, and secure transactions.',
    },
    {
      id: 'faq-2',
      question: 'How does business verification work?',
      answer:
        'Business verification involves checking company details against official registries, validating key identifiers such as GSTIN, PAN, or CIN, and ensuring compliance through real-time data verification.',
    },
    {
      id: 'faq-3',
      question: 'Is business verification secure?',
      answer:
        'Yes, business verification uses encrypted data transmission, AI-powered fraud detection, and secure APIs to safeguard sensitive company information and prevent misuse.',
    },
    {
      id: 'faq-4',
      question: 'Can business verification be done remotely?',
      answer:
        'Yes, business verification can be conducted online using automated document validation, API integrations, and real-time database checks.',
    },
    {
      id: 'faq-5',
      question: 'What happens if business verification fails?',
      answer:
        'If verification fails, users may need to update their business details, provide clearer documentation, or complete a manual review. Our support team is available to assist.',
    },
  ],
  supportHeading: 'Still have questions?',
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any verification-related concerns.",
  supportButtonText: 'Contact Support',
  supportButtonUrl: 'https://yourbusinessverificationsite.com',
}

const businessProducts = [
  {
    title: 'GST OTP Verification',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <KeyIcon className="w-4 h-4" />,
    iconColor: 'text-yellow-500 bg-yellow-500/10',
    url: 'gst-otp-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'GST Verification',
    description: 'Authenticate businesses by verifying their GST details.',
    icon: <ShieldCheckIcon className="w-4 h-4" />,
    iconColor: 'text-violet-500 bg-violet-500/10',
    url: 'gst-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'GST To Phone Number',
    description: 'Retrieve phone numbers linked to a given GST number.',
    icon: <PhoneIcon className="w-4 h-4" />,
    iconColor: 'text-pink-500 bg-pink-500/10',
    url: 'gst-to-phone',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm ">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'MCA Data (CIN / DIN)',
    description: 'Access company and director details via MCA database.',
    icon: <DatabaseIcon className="w-4 h-4" />,
    iconColor: 'text-purple-500 bg-purple-500/10',
    url: 'mca-data',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm ">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'MCA Filed Doc Pull',
    description: 'Retrieve documents filed with MCA for compliance.',
    icon: <FileTextIcon className="w-4 h-4" />,
    iconColor: 'text-cyan-500 bg-cyan-500/10',
    url: 'mca-filed-docs',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'TDS-206 Compliance',
    description: 'Verify TDS-206 compliance for tax purposes.',
    iconColor: 'text-yellow-500 bg-yellow-500/10',
    icon: <BanknoteIcon className="w-4 h-4" />,
    url: 'tds-206-compliance',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'FSSAI Verification',
    description: 'Validate FSSAI license details for food businesses.',
    icon: <UtensilsIcon className="w-4 h-4" />,
    iconColor: 'text-violet-500 bg-violet-500/10',
    url: 'fssai-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'TAN Verification',
    description:
      'Authenticate Tax Deduction and Collection Account Number (TAN).',
    icon: <ClipboardCheckIcon className="w-4 h-4" />,
    iconColor: 'text-pink-500 bg-pink-500/10',
    url: 'tan-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Udyog Verification',
    description: 'Verify Udyog Aadhaar details of MSMEs.',
    icon: <FactoryIcon className="w-4 h-4" />,
    iconColor: 'text-cyan-500 bg-cyan-500/10',
    url: 'udyog-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'Udyam Verification',
    description: 'Authenticate Udyam Registration details of MSMEs.',
    icon: <BuildingIcon className="w-4 h-4" />,
    url: 'udyam-verification',
    iconColor: 'text-purple-500 bg-purple-500/10',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'IEC Verification',
    description: 'Validate Importer Exporter Code (IEC) details.',
    icon: <GlobeIcon className="w-4 h-4" />,
    iconColor: 'text-yellow-500 bg-yellow-500/10',
    background: '',
    url: 'iec-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
  {
    title: 'FSSAI Verification1',
    description: 'Validate FSSAI license details for food businesses.',
    icon: <UtensilsIcon className="w-4 h-4" />,
    iconColor: 'text-violet-500 bg-violet-500/10',
    url: 'fssai-verification',
    button: (
      <InteractiveHoverButton className="rounded-md h-8 flex items-center text-sm">
        Learn More
      </InteractiveHoverButton>
    ),
  },
]

const BusinessProductsHeading = {
  badge: 'Instant Verification',
  title: 'Business Verification Solutions',
  description:
    'Seamlessly verify business details, tax compliance, and legal registrations with our comprehensive suite of verification tools.',
}

const otherProducts = [
  {
    title: 'Identity Verfication',
    description: 'Verify GST details using OTP-based authentication.',
    icon: <IdCard className="w-5 h-5" />,
    iconColor: 'text-yellow-600 bg-yellow-600/10',
    backgroundColor: 'bg-yellow-600/10',
    className: 'bg-yellow-600/10',
    url: '/identity',
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

const Business = () => {
  return (
    <div>
      <div className="mb-16">
        <Hero2 businessHero={businessHero} />
      </div>

      <Wrapper>
        <div className="">
          <BusinessProducts
            grid={businessProducts}
            gridHeading={BusinessProductsHeading}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full mb-16">
          <FeaturesSection grid={features} gridHeading={featuresHeading} />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="my-16 py-16">
          <IntegrationBenefits benefits={featureSteps} />
        </div>
      </Wrapper>

      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}

      {/* <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div> */}
      {/* <div className="mb-16">
        <BusinessCTA />
      </div> */}
      <Wrapper>
        <div className="mt-16 mb-24 py-16">
          <BusinessProducts
            grid={otherProducts}
            gridHeading={otherProductsHeading}
            className="grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
            cardClass="bg-white"
          />
        </div>
      </Wrapper>
      <div className="my-16">
        <Connect />
      </div>

      <div className="">
        <FAQCTA FAQCTAData={FAQCTAData} />
      </div>
    </div>
  )
}

export default Business
