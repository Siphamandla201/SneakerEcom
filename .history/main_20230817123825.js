fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let outpi
}).catch(error => console.error(error));