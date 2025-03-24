import { ArrowRight } from 'lucide-react'

import { Logos3 as Partners } from '@/components/ui/logos3'
import { Button } from '@/components/ui/button'

import Wrapper from './Wrapper'

import { BorderBeamForm } from '@/components/border-beam-form'
import { Link } from 'react-router-dom'
import ContactUsFormSupa from './ContactUsFormSupa'

function Hero2({ businessHero }) {
  return (
    <>
      <main className="w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('@/assets/homeHeroPNG.png')] py-2 lg:py-12">
        {/* Full-Height Dot Pattern */}

        <section className="relative z-10 border-white/10 w-full overflow-hidden">
          <Wrapper>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-4 py-12 relative z-20">
              {/* Hero Content */}
              <div className="relative flex flex-col items-start justify-center gap-8 md:gap-4 text-left">
                <h1 className="text-4xl lg:text-5xl font-bold relative sora-heading">
                  {businessHero.heading}
                </h1>

                <p className="text-balance text-foreground/80 text-md relative">
                  {businessHero.description}
                </p>
                <ContactUsFormSupa />

                {/* Reviews Section */}
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                  <Partners />
                </div>
              </div>

              {/* BorderBeamForm Section */}
              <div className="hidden md:flex justify-center items-center">
                <BorderBeamForm />
              </div>
            </div>
          </Wrapper>
        </section>
      </main>
    </>
  )
}
export default Hero2
