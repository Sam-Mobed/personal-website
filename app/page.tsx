import Hero from '@/components/Hero'
import Text from '@/components/Text'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className=' bg-black overflow-hidden'>
      <Hero />
      <Text />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
    </main>
  )
}
