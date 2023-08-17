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

        sneakerOutput += `
                    <div class="sneaker">
                            <img src="${response[].imageUrl}" alt="${response[].brand} ${response[].model}" width="200">
                            <h3>${response[].brand} ${sneaker.model}</h3>
                            <p>Price: $${response[].price.toFixed(2)}</p>
                    </div>
        `;
    }
    
    document.querySelector('tbody').innerHTML = output;
    DisplayAllSneakers();
}).catch(error => console.error(error));

// function DisplayAllSneakers() {
//     document.querySelector('.sneakers').innerHTML = output;
//     let output = '';
//     for(let sneaker in response) {
        
//     }
// }
