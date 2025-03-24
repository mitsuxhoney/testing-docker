import { SparklesIcon } from 'lucide-react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Badge } from '@/components/ui/badge'
import Wrapper from './Wrapper'
import { Button } from '@/components/ui/button'
import ContactUsFormSupa from './ContactUsFormSupa'

const NewHomeHero = ({ businessHero }) => {
  return (
    <div className="py-12 lg:py-16 mx-auto w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('@/assets/homeHeroPNG.png')]">
      <Wrapper>
        <div className="w-full flex flex-col gap-8 items-center mx-auto text-center">
          <Badge
            variant="outline"
            className="bg-secondary border border-primary/20 text-sm p-1.5 font-medium text-white flex gap-1 cursor-pointer hover:bg-secondary/90"
          >
            <SparklesIcon className="" size={14} />
            <span className="">Start Verfying In Minutes</span>
          </Badge>

          <h2 className="text-3xl md:text-5xl xl:text-[80px] xl:leading-[90px] xl:tracking-[-2px] font-bold sora-heading lg:max-w-[76rem] capitalize">
            Onboard{' '}
            <span className="inline-block px-2 text-secondary bg-[url('@/assets/boxStroke.png')] bg-no-repeat bg-center bg-[length:100%_100%]">
              Verified
            </span>{' '}
            Customers In Minutes
          </h2>

          <p className="text-balance text-foreground/80 font-medium text-md lg:text-lg relative lg:max-w-[60%]">
            Streamline verification with our API suite. Fast, secure, and
            compliant solutions for modern businesses.
          </p>
          <div className=" flex flex-col gap-2 sm:flex-row items-center font-bold">
            <span className="inline-flex items-start -space-x-4">
              <AnimatedTooltip items={businessHero.reviews.avatars} />
            </span>
            <div>
              <p className="text-sm lg:text-md text-center lg:text-left font-medium italic text-secondary">
                We are trusted by fortune {businessHero.reviews.count}+
                companies
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ContactUsFormSupa />

            <Button
              className="w-full sm:w-auto hover:scale-[scale: 1.02] px-2 py-2 md:px-6 md:py-4 rounded-md
                bg-white text-secondary border border-secondary hover:bg-white/80 flex items-center font-semibold"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default NewHomeHero
