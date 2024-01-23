import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
        <h1>Custom App</h1>   
        </div>
    )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://harshitbagga.github.io',
//         target: '_blank'
//     },
//     children: 'Click here to visit profile'
// }

const anotherElement = (
    <a href = "https://harshitbagga.github.io" targert = '_blank'>Visit my Profile</a>
)
const anotheruser = "Chai aur react"
const reactElement = React.createElement(
    'a',
     { href:"https://harshitbagga.github.io", target:'_blank'},
    'click me to visit your profile',
    anotheruser


)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
