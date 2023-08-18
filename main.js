fetch('./index.php')
.then((res) => res.json())
.then(response => {
    let output = '';
    // let sneakerOutput = '';
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

        // sneakerOutput += `
        //             <div class="sneaker" data-id="${response[sneaker].id}">
        //                     <img src="${response[i].imageUrl}" alt="${response[i].brand} ${response[i].model}" width="200">
        //                     <h3>${response[i].brand} ${response[i].model}</h3>
        //                     <p>Price: $${response[i].price}</p>
        //             </div>
        // `;
    }
    
     // For index.html
    if (document.querySelector('tbody')) {
        document.querySelector('tbody').innerHTML = output;
    }
    
    // For products.html
    if (document.querySelector('.sneakers')) {
        DisplayAllSneakers(response);
        DisplaySingleSneaker(response);
    }

}).catch(error => console.error(error));


function DisplayAllSneakers(response) { 
    let output = '';
    
    for (let sneaker in response) {
        output += `
            <div class="sneaker" data-id="${response[sneaker].id}">
                <a href="./single_product.html" target="_blank">
                    <img src="${response[sneaker].imageUrl}" alt="${response[sneaker].brand} ${response[sneaker].model}" width="200">
                    <h3>${response[sneaker].model}</h3> 
                    <h4>${response[sneaker].brand}</h4>
                    <p>Price: $${response[sneaker].price}</p>
                </a>
            </div>
        `;
    }
    document.querySelector('.sneakers').innerHTML = output; 
}

function DisplaySingleSneaker(response) {
    let sneakers = document.querySelectorAll('.sneaker');
    window.location.href = '';
    
    sneakers.forEach(sneaker => {
        sneaker.addEventListener("click", () => {
            const sneakerId = parseInt(sneaker.getAttribute('data-id'));
            const selectedSneaker = response.find(item => parseInt(item.id) === sneakerId);
            
            if (selectedSneaker) {
                displaySneakerDetails(selectedSneaker);
            } else {
                console.log("Sneaker not found");
            }
        });
    });
}


function displaySneakerDetails(sneaker) {
    const sneakerDetails = document.querySelector('.product-details');
    let output = "";
    
    window.location.href = `single_product.html?id=${sneaker.id}`;
    
    output += `
            <img src="${sneaker.imageUrl}" alt="${sneaker.brand} ${sneaker.model}" width="300">
                <h2>${sneaker.model}</h2>
                <h3>${sneaker.brand}</h3>
                <p>Price: $${sneaker.price}</p>
                <p>Colorway: ${sneaker.colorway}</p>
                <p>Release Date: ${sneaker.releaseDate}</p>
                <p>Size Range: ${sneaker.sizeRange}</p>
                <p>Stock Quantity: ${sneaker.stockQuantity}</p>
    `;

    sneakerDetails.innerHTML = output;
}


