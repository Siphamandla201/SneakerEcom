fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let out
}).catch(error => console.error(error));