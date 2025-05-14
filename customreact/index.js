function customrender(reactElement, container) {
    // Render the reactElement to the container
    const element = document.createElement(reactElement.type);
    element.id = container.id;
    


    // element.src = reactElement.props.src;
    // element.alt = reactElement.props.alt;
    // element.height = reactElement.props.height;
    // element.width = reactElement.props.width;

    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop]);
    }


    container.appendChild(element);
    // Return the container
    return container;
}

const container = document.getElementById('root');
const reactElement = {
    type: 'img',
    props: {
        src: '/customreact/dd.jpg',
        alt: 'Placeholder Image',
        height: 300,
        width: 400,
    },
};

customrender(reactElement, container);
