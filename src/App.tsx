
import Particles from './components/particles/Particles';
import Header from './containers/header/Header';
import About from './containers/about/About';

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <main className='w-3/4 mx-auto'>
        {/* About */}
        <About />
        {/* Projects */}
        {/* Code Examples */}
        {/* Contact */}
      </main>
      {/* Footer */}
      <Particles />
    </>
  )
}

export default App
