// post API
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'dilshad',
        email: 'dilshad@gmail.com' 
    })
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))