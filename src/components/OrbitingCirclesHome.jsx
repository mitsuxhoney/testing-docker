import { OrbitingCircles } from '@/components/ui/OrbitingCircles'
import { IconTerminal2 } from '@tabler/icons-react'
import { CreditCard, IndianRupee, User } from 'lucide-react'

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[342px] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={30}>
        <div className="text-tertiary">
          <IconTerminal2 />
        </div>
        <div className="text-tertiary ">
          <CreditCard />
        </div>
        <div className="text-tertiary ">
          <IndianRupee />
        </div>
        <div className="text-tertiary ">
          <User />
        </div>
        <div className="text-tertiary ">
          <IconTerminal2 />
        </div>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={80} reverse speed={2}>
        <div className="text-tertiary ">
          <IndianRupee />
        </div>
        <div className="text-tertiary ">
          <CreditCard />
        </div>
        <div className="text-tertiary ">
          <IndianRupee />
        </div>
        <div className="text-tertiary ">
          <CreditCard />
        </div>
      </OrbitingCircles>
    </div>
  )
}
