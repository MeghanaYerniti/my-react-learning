const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    // .then((response) => response.json());

    return await response.json();
}

export default getData;