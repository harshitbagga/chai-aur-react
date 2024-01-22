import Chai from "./chai"
function App() {
 

  return (
    //<h1>Chai aur React + Vite</h1> we cannot add multiple elements without wrapping it in an empty tag which is <></>
    <>
    <h1>Chai aur React + Vite</h1>
    <Chai/>
    <h3>This is Another element</h3>
    </>
  )
}

export default App
