import Hero from '@/components/Hero'
import Text from '@/components/Text'
import About from '@/components/About'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <main className='h-[300vh] bg-black overflow-hidden'>
      <Hero />
      <Text />
      <About />
      <Experience />
    </main>
  )
}
