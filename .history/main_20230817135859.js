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
                            <h3>${response[i].brand} ${response[i].model}</h3>
                            <p>Price: $${response[i].price}</p>
                    </div>
        `;
    }

     // For index.html
     if (document.querySelector('tbody')) {
        document.querySelector('tbody').innerHTML = tableOutput;
    }

    // For sneakers.html
    if (document.querySelector('.sneakers')) {
        document.querySelector('.sneakers').innerHTML = sneakerOutput;
    }
    
    document.querySelector('tbody').innerHTML = output;
    document.querySelector('.sneakers').innerHTML = sneakerOutput;
}).catch(error => console.error(error));


