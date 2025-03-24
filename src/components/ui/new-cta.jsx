import { motion } from 'framer-motion'
import { Zap, Shield, CheckCircle2 } from 'lucide-react'
import Wrapper from '../Wrapper'
import IndustryCarousel from '../IndustryCarousel'
import newCTAImage from '../../assets/cta-image.png'
import { useNavigate } from 'react-router-dom'
import ContactUsFormSupa from '../ContactUsFormSupa'
import { Button } from '@/components/ui/button'

export function Connect() {
  const navigate = useNavigate()

  const benefits = [
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Zap, text: 'Lightning-fast verification' },
    { icon: CheckCircle2, text: '99.9% accuracy rate' },
  ]

  return (
    <section className="py-24 relative z-[10] overflow-hidden bg-[#EAB308]/10">
      <Wrapper>
        <div className="absolute inset-0 bg-grid-primary-700/[0.05] -z-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 text-left flex flex-col items-start w-full"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full mb-6">
                <Zap className="h-4 w-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">
                  Ready to Get Started?
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-secondary sora-heading mb-6 leading-tight">
                Transform Your
                <span className="block mt-2">
                  <span className=" bg-clip-text">Verification Process</span>
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center text-[#34D399]"
                  >
                    <benefit.icon className="h-5 w-5 mr-3 text-secondary" />
                    <span className="text-secondary">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 text-sm lg:flex-row lg:gap-4 lg:text-md">
                <ContactUsFormSupa />

                <Button
                  className="hover:scale-[1.02] text-secondary bg-white font-medium text-md rounded-md hover:bg-white/90 transition-all duration-300 border border-secondary"
                  onClick={() => {
                    navigate('/contact-us')
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block xl:flex-1 relative rounded-2xl xl:p-4 xl:h-auto"
            >
              {/* Add carousel background with revelrse direction */}
              <div className="w-full hidden xl:block absolute xl:top-12 inset-0 z-[9] opacity-80">
                <IndustryCarousel className="-rotate-45 mb-12 lg:py-8" />
              </div>
              <div className="relative z-[12]">
                <img
                  className="absolute hidden xl:inline-block lg:-top-16 lg:right-6"
                  src={newCTAImage}
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
