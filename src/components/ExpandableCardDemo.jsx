import { ProjectStatusCard } from '@/components/ui/expandable-card'
import { ChevronUp } from 'lucide-react'
import { RippleButton } from './ui/ripple-button'

export default function ExpandableCardBasic() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <ProjectStatusCard
        titleBeforeExpand="Get In Touch"
        descriptionBeforeExpand="Click the button to get in touch with us!"
        titleAfterExpand=""
        descriptionAfterExpand=""
        open={
          <RippleButton rippleColor="#ADD8E6" className="h-8">
            Click Me !
          </RippleButton>
        }
        close={<ChevronUp className="h-5 w-5 cursor-pointer" />}
        contributors={[]}
        tasks={[]}
      />
    </div>
  )
}
