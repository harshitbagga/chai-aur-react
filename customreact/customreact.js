function customrender(reactelement,container){

    const domElement = document.createElement(reactelement.type)

    domElement.innerHTML  = reactelement.children
    domElement.setAttribute('href', reactelement.props.href)
    domElement.setAttribute('target',reactelement.props.target)

    container.appendChild(domElement)
}
const reactelement = {
    type:'a',
    props:{
        href:'https://harshitbagga.github.io',
        target:'_blank'
    },
    children: 'Click me to visit the profile'
} 
const maincontainer  = document.querySelector('#root')


customrender(reactelement, maincontainer)