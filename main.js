fetch('./index.php')
.then((res) => res.json())
.then(response => {
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
    
    if (document.querySelector('tbody')) {
        document.querySelector('tbody').innerHTML = output;
    }
    
    if (document.querySelector('.sneakers')) {
        DisplayAllSneakers(response);
    }

}).catch(error => console.error(error));

function DisplayAllSneakers(response) { 
    let output = '';
    
    for (let sneaker in response) {
        output += `
            <div class="sneaker" data-id="${response[sneaker].id}">
                <img src="${response[sneaker].imageUrl}" alt="${response[sneaker].brand} ${response[sneaker].model}" width="200">
                <h3>${response[sneaker].model}</h3> 
                <h4>${response[sneaker].brand}</h4>
                <p>Price: $${response[sneaker].price}</p>
            </div>
        `;
    }
    document.querySelector('.sneakers').innerHTML = output; 
}

function DisplaySingleSneaker(response) {
    let sneakers = document.querySelectorAll('.sneaker');
    
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
    window.location.href = `single_product.html?id=${sneaker.id}`;
}
