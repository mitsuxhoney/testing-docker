import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import case1 from '../assets/case1.png'
import case2 from '../assets/case2.png'
import case3 from '../assets/case3.png'
import Wrapper from './Wrapper'

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])
  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    let autoplay

    const startAutoplay = () => {
      autoplay = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext()
        }
      }, 3000)
    }

    const stopAutoplay = () => {
      clearInterval(autoplay)
    }

    startAutoplay() // Start autoplay initially

    // Add event listeners to pause on hover
    const carouselElement = emblaApi.containerNode()
    carouselElement.addEventListener('mouseenter', stopAutoplay)
    carouselElement.addEventListener('mouseleave', startAutoplay)

    return () => {
      stopAutoplay() // Cleanup
      carouselElement.removeEventListener('mouseenter', stopAutoplay)
      carouselElement.removeEventListener('mouseleave', startAutoplay)
    }
  }, [emblaApi, onSelect])
  const industries = [
    {
      title: <h3 className="text-lg font-semibold">Fintech Startup</h3>,
      heading: <p className="text-md font-semibold ">Fast Loan Approvals</p>,
      description: (
        <p className="text-sm  mb-4">
          Instant KYC cut onboarding by 40%. Quicker approvals, happier
          customers.
        </p>
      ),
      image: case1,
      color: 'bg-yellow-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">E-commerce Platform</h3>,
      heading: <p className="text-md font-semibold ">Trusted Seller Base</p>,
      description: (
        <p className="text-sm  mb-4">
          Robust business verification stopped fraud. Buyer trust increased
          significantly.
        </p>
      ),
      image: case2,
      color: 'bg-purple-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">Ride-Sharing Company</h3>,
      heading: <p className="text-md font-semibold ">Safer Rider Experience</p>,
      description: (
        <p className="text-sm  mb-4">
          Real-time driver ID checks. Verified drivers, safer passenger
          journeys.
        </p>
      ),
      image: case3,
      color: 'bg-pink-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold">Digital Lending Platform</h3>
      ),
      heading: <p className="text-md font-semibold ">Automated Compliance</p>,
      description: (
        <p className="text-sm  mb-4">
          Advanced KYC/KYB reduced overhead. Seamless, automated compliance.
        </p>
      ),
      image: case1,
      color: 'bg-violet-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">Online Marketplace</h3>,
      heading: <p className="text-md font-semibold ">Secured Transactions</p>,
      description: (
        <p className="text-sm  mb-4">
          Bank verification cut payment fraud. Secure transactions for all
          users.
        </p>
      ),
      image: case2,
      color: 'bg-cyan-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">Logistics Company</h3>,
      heading: (
        <p className="text-md font-semibold ">Faster Partner Onboarding</p>
      ),
      description: (
        <p className="text-sm  mb-4">
          Quick identity checks streamlined onboarding. Faster operations,
          immediate compliance.
        </p>
      ),
      image: case3,
      color: 'bg-yellow-500/10',
    },
    {
      title: (
        <h3 className="text-lg font-semibold">Financial Services Provider</h3>
      ),
      heading: <p className="text-md font-semibold ">Enhanced Trust</p>,
      description: (
        <p className="text-sm  mb-4">
          Aadhaar e-sign reduced paperwork. Secure digital agreements, increased
          trust.
        </p>
      ),
      image: case1,
      color: 'bg-purple-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">Retail E-commerce</h3>,
      heading: <p className="text-md font-semibold ">Reduced Chargebacks</p>,
      description: (
        <p className="text-sm  mb-4">
          Verified customer data cut chargebacks by 30%. Enhanced payment
          security.
        </p>
      ),
      image: case2,
      color: 'bg-violet-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold ">Gig Economy Platform</h3>,
      heading: (
        <p className="text-md font-semibold ">Authentic Service Providers</p>
      ),
      description: (
        <p className="text-sm  mb-4">
          Identity API ensured authenticity. Trusted environment for all
          customers.
        </p>
      ),
      image: case3,
      color: 'bg-cyan-500/10',
    },
    {
      title: <h3 className="text-lg font-semibold">Insurance Company</h3>,
      heading: <p className="text-md font-semibold ">Faster Policy Issuance</p>,
      description: (
        <p className="text-sm  mb-4">
          Instant verification sped up policy issuance. Improved customer
          satisfaction.
        </p>
      ),
      image: case1,
      color: 'bg-pink-500/10',
    },
  ]
  return (
    <Wrapper>
      <section className="pb-20 pt-6 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 -z-10" />
        <div className="mx-auto">
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-center text-3xl lg:text-5xl sora-heading font-bold leading-[1.2]">
                Recent Case Studies
                {/* <div className="inline-block bg-primary rounded-md -rotate-2 p-2">
                <div className="rotate-2 text-white ">Case Studies</div>
              </div>{' '} */}
              </div>
              <p className="mx-auto text-center text-md font-medium text-foreground/80">
                Explore our recent case studies showcasing real-world success
                stories and impactful solutions.
              </p>
            </motion.div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                >
                  <div
                    className={cn(
                      'group overflow-hidden relative rounded-[4px] h-[370px] md:h-[390px] lg:h-[400px] px-4 py-4 border border-primary-100 transition-all duration-300 hover:shadow-sm',
                      industry.color
                    )}
                  >
                    <div className="flex flex-col gap-3 items-start">
                      <div className="!text-secondary">{industry.title}</div>
                      <div className="text-neutral-600">{industry.heading}</div>
                      <div className="text-foreground/80">
                        {industry.description}
                      </div>
                    </div>
                    <div className="absolute lg:-right-1">
                      <img
                        src={industry.image}
                        className="h-full w-full rounded-md"
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {emblaApi &&
              scrollSnaps.length > 0 &&
              scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-primary w-6'
                      : 'bg-primary/10 hover:bg-primary/40'
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
