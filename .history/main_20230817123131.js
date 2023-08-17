fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
}).catch(error => console.error(error));