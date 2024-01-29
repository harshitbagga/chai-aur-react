import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setnumberallowed] = useState(false)
  const [characterallowed,setcharacterallowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str+= "0123456789"
    if(characterallowed) str+= "!@#$%^&*(){}{~'`"
  for (let i = 1; i <= array.length; i++) {
    let char = Math.floor(Math.random*str.length+1)
    pass = str.charAt(char)
    setPassword(pass)
    
  }
  },
  [length,numberallowed,characterallowed,password])
  return (
  /*  <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4, 
     my-8 text-orange-500 bg-gray-400"><h1 className="text-white text-center my-3">Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
     <input
      type='text'
       value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly/>
        <button>Copy</button></div></div>
    </> */
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-400">
    <h1 className="text-white text-center">Password Generator</h1>
    <div className="flex flex-col items-center mb-4">
    
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 rounded-lg my-2"
          placeholder="Password"
          readOnly
        />
      
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg my-2">Copy</button>
    </div>
  </div>
</>

    
  )
}

export default App
