fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output 
}).catch(error => console.error(error));