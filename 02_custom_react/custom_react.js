console.log("it is running ..")

function root_function(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
}
const root = document.getElementById("root");
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit google"
}

root_function(reactElement, root);
