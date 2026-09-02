const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    }).then((response) => response.json());
}

export default getData;