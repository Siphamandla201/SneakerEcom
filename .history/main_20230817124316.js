fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response) {
        output += `
                    <tr>
                        <td>${response.id}</td>
                        <td>${response.brand}</td>
                        <td>${response.model}</td>
                        <td>$${response.price.toFixed(2)}</td>
                    </tr>
        `;
    }
}).catch(error => console.error(error));