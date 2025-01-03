/*
What we are trying to achieve here ?
We are trying to achieve the Core React functionality what it does when a component is passed in main.jsx.
As we know in react, the "root" component is taken from index.html and then we write components in jsx files and then 
we import those components in main.jsx and there react renders it on the frontend.
So below we are trying to achieve same functionality.
*/


const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit Google"
}

const mainContainer = document.getElementById("root");    // we grabbed the element from html file

//to render the element on the ui we need a render function which will take 2 parameters as a container and component
//in which that specified component will be rendered in the specified container.

function customRender (container, element) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(mainContainer, reactElement)