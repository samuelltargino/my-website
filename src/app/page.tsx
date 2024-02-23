import Hero from '@/components/home/hero'
import CTASlider from '@/components/utils/ctaSlider'
import Header from '@/components/utils/header'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-32">
      <div className="flex w-full max-w-xl flex-col gap-32 overflow-x-hidden px-4 sm:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
        <Header />
        <Hero />
      </div>
      <CTASlider />
    </div>
  )
}
