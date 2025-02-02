
import Particles from './components/Particles';
import Header from './containers/Header';
import About from './containers/About';

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
