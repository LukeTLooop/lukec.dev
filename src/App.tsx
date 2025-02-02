
import Particles from './components/Particles';
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
      </main>
      {/* Footer */}
      <Particles />
    </>
  )
}

export default App
