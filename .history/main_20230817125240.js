fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response) {
        output += `
                    <tr>
                        <td>${response[i].id}</td>
                        <td>${response[i].brand}</td>
                        <td>${response[i].model}</td>
                        <td>$${response[i].price}</td>
                        <td>D</td>
                        <td>$${response[i].price}</td>
                    </tr>
        `;
    }

    document.querySelector('tbody').innerHTML = output
}).catch(error => console.error(error));