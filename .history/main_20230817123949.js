fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    for(let i in response)
    output += `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(item => `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.brand}</td>
                        <td>${item.model}</td>
                        <td>$${item.price.toFixed(2)}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
            `;
}).catch(error => console.error(error));