fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response)
}).catch(error => console.error(error));