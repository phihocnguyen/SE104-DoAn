import './App.css'
import Nav from './components/Nav'
function App() {
  return (
    <div className='grid grid-cols-11'>
      <Nav />
      <main className='col-span-8 bg-red-400'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vero inventore libero molestias dolorum adipisci velit dicta numquam omnis, voluptatum quo, mollitia iste aspernatur ipsum ducimus reiciendis! Totam, quo enim.
      </main>
    </div>
  )
  
}

export default App