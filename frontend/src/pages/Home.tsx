import Hero from '../components/sections/Hero'

import AICrew from '../components/sections/AICrew'
import Features from '../components/sections/Features'
import MultiBrand from '../components/sections/MultiBrand'
import GrowthJourney from '../components/sections/GrowthJourney'
import Stats from '../components/sections/Stats'
import UseCases from '../components/sections/UseCases'
import CtaBanner from '../components/sections/CtaBanner'
import Faq from '../components/sections/Faq'

export default function Home() {
  return (
    <main>
      <Hero />

      <AICrew />
      <Features />
      <MultiBrand />
      <GrowthJourney />
      <Stats />
      <UseCases />
      <CtaBanner />
      <Faq />
    </main>
  )
}
