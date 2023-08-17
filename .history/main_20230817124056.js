fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response)
    output += `
    <tr>
        <td>${item.id}</td>
        <td>${item.brand}</td>
        <td>${item.model}</td>
        <td>$${item.price.toFixed(2)}</td>
    </tr>`

    `;
}).catch(error => console.error(error));