import IndustryCarousel from './IndustryCarousel'

export function Industries() {
  return (
    <section className="relative">
      <div className="mx-auto overflow-hidden">
        <div className="w-screen">
          <IndustryCarousel className="-rotate-3" />
        </div>
      </div>
    </section>
  )
}
