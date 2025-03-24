import { NumberTicker } from './ui/number-ticker'

const Impacts = () => {
  return (
    <section className="py-16">
      <div className=" mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4 text-center text-3xl lg:text-5xl font-bold leading-[1.2] sora-heading">
            Our Impact
          </h2>
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
  )
}

export default Impacts
