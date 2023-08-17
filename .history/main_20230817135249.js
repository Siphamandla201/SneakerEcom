fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    let sneakerOutput = '';
    for(let i in response) {
        output += `
                    <tr>
                        <td>${response[i].id}</td>
                        <td>${response[i].brand}</td>
                        <td>${response[i].model}</td>
                        <td>$${response[i].price}</td>
                        <td class="del">Delete</td>
                        <td class="edit">Edit</td>
                    </tr>
        `;

        sneakerOutput += `
                    <div class="sneaker">
                            <img src="${response[i].imageUrl}" alt="${response[i].brand} ${response[i].model}" width="200">
                            <h3>${response[i].brand} ${sneaker.model}</h3>
                            <p>Price: $${response[i].price.toFixed(2)}</p>
                    </div>
        `;
    }
    
    document.querySelector('tbody').innerHTML = sneakerOutput;
    document.querySelector('.sneakers').innerHTML = output;
}).catch(error => console.error(error));


