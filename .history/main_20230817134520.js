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
                        <td class="del">Delete</td>
                        <td class="edit">Edit</td>
                    </tr>
        `;
    }

    document.querySelector('tbody').innerHTML = output
}).catch(error => console.error(error));

function DisplayAllSneakers() {
    let output = '';
    for(let sneaker in response) {
        output += `
                    <div class="sneaker">
                            <img src="${response[sneaker.imageUrl}" alt="${response[sneaker.brand} ${response[sneaker.model}" width="200">
                            <h3>${response[sneaker.brand} ${sneaker.model}</h3>
                            <p>Price: $${response[sneaker.price.toFixed(2)}</p>
                    </div>
        `;
    }
}
