import Atmosphere     from './components/Atmosphere'
import ScrollProgress  from './components/ScrollProgress'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Statement       from './components/Statement'
import Format          from './components/Format'
import Weekend         from './components/Weekend'
import Speakers        from './components/Speakers'
import Numbers         from './components/Numbers'
import Sponsors        from './components/Sponsors'
import Access          from './components/Access'
import FAQ             from './components/FAQ'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <Atmosphere />
      <ScrollProgress />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />

        <Statement
          id="reveal"
          lines={[
            { text: 'A messy idea on Friday.' },
            { text: 'A funded pitch by Sunday.', accent: true },
          ]}
          sub="No clutter. No noise. Just the people, tools and time to take an idea all the way to a working product — and pitch it for real."
        />

        <Format />

        <Statement
          id="proving"
          lines={[
            { text: 'Not another hackathon.' },
            { text: 'A proving ground.', accent: true },
          ]}
          glow="rgba(157,140,255,0.14)"
        />

        <Weekend />
        <Speakers />
        <Numbers />
        <Sponsors />
        <Access />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
