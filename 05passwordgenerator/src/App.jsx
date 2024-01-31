import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberallowed,setnumberallowed] = useState(false)
  const [characterallowed,setcharacterallowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str+= "0123456789"
    if(characterallowed) str+= "!@#$%^&*(){}{~`"
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(char)
    setPassword(pass)
    
  }
  },
  [length,numberallowed,characterallowed,password])

  const copyPasswordtoClipboard = useCallback(()=>{passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
     window.navigator.clipboard.writeText(password)}, [password])

  useEffect(()=>{ passwordGenerator()
  }, [length,numberallowed,characterallowed,setPassword])

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
    <div className="flex flex-row items-center">
    
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 rounded-lg my-2"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          onClick={copyPasswordtoClipboard}
        />
      
      <button className="outline-none bg-blue-500 text-white px-3 py-0.5 ml-2 rounded-xl">Copy</button>
    </div>
    <div className='flex text-sm gap-x-1 px-2 py-3'>
      <div className='flex items-center gap-x-1'>
      <input
      
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={e => setLength(e.target.value)}/>

      <label
      className=' text-black font-semibold'>Length: {length}</label>
      

    </div>
   
    <div className='flex items-center gap-x-1 text-black font-semibold mx-5'>
    <label 
      htmlFor='numberInput'>Numbers</label>
      <input
      type="checkbox"
      defaultChecked = {numberallowed}
      id="numberInput"
      onChange={()=> {setnumberallowed((prev)=>!prev)}}/> 
       
       <label htmlFor='characterInput'>Characters</label>
       <input
      type="checkbox"
      defaultChecked = {characterallowed}
      id="characterInput"
      onChange={()=> {setcharacterallowed((prev)=>!prev)}}/> 
    </div>
    </div>
  </div>
</>

    
  )
}

export default App
