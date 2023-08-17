fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response) {
        output += `
                    <tr>
                        <td>${re.id}</td>
                        <td>${re.brand}</td>
                        <td>${re.model}</td>
                        <td>$${re.price.toFixed(2)}</td>
                    </tr>
        `;
    }
}).catch(error => console.error(error));