export function createElement(type, props = {}, children = []) {
    const element = document.createElement(type);
    // props: {textContent: "Hello worl!", id: "header1", "data-product": 123,...}
    Object.entries(props).forEach(([key, value])) => {
        if()
    });
    return element;
}