
import Particles from './components/particles/Particles';
import Header from './containers/header/Header';
import About from './containers/about/About';
import Projects from './containers/projects/Projects';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <main className='w-3/4 mx-auto'>
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Code Examples */}
        {/* Contact */}
      </main>
      {/* Footer */}
      <Particles />
    </>
  )
}

export default App
