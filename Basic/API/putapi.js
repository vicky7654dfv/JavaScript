// put api
fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'vicky',
        email: 'vicky@gmail.com' 
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))