import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { TerminalDemo } from './TerminalDemo'

export function FeatureSteps({
  features,
  className,
  title = 'How to get Started',
  autoPlayInterval = 3000,
  imageHeight = 'h-[400px]',
}) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const handleFeatureClick = (index) => {
    setCurrentFeature(index)
  }

  // const [progress, setProgress] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (progress < 100) {
  //       setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
  //     } else {
  //       setCurrentFeature((prev) => (prev + 1) % features.length)
  //       setProgress(0)
  //     }
  //   }, 100)

  //   return () => clearInterval(timer)
  // }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn('', className)}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <Badge variant="outline">How it works ?</Badge>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            Seamless API Integration
          </h1>
          <p className="text-muted-foreground">
            Our APIs are designed to be developer-friendly, secure, and easy to
            implement—ensuring a hassle-free verification process.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8 flex flex-col justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  'flex items-center gap-6 md:gap-8 cursor-pointer',
                  index === currentFeature ? 'relative z-10' : ''
                )}
                initial={{ opacity: 0.3 }} // Higher base opacity (was 0.3)
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }} // Higher non-selected opacity
                transition={{ duration: 0.5 }}
                onClick={() => handleFeatureClick(index)} // Add click handler
              >
                <motion.div
                  className={cn(
                    'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2',
                    index === currentFeature
                      ? 'bg-primary border-primary text-primary-foreground scale-110'
                      : 'bg-muted border-muted-foreground'
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="max-md:text-xs md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="max-md:text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              'order-1 md:order-2 relative lg:h-[370px] overflow-hidden rounded-lg'
            )}
          >
            <TerminalDemo />
            {/* <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >

                      <div className="absolute bottom-0 left-0 right-0 h-2/3 from-background via-background/50 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence> */}
          </div>
        </div>
      </div>
    </div>
  )
}
