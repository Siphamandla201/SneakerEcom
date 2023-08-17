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

di

const sneakerString = `
<div class="sneaker">
    <img src="${sneaker.imageUrl}" alt="${sneaker.brand} ${sneaker.model}" width="200">
    <h3>${sneaker.brand} ${sneaker.model}</h3>
    <p>Price: $${sneaker.price.toFixed(2)}</p>
</div>
`;