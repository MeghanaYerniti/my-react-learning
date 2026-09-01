const getData = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    return response;
}

export default getData;