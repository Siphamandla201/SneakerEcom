fetch('index.php')
.then((res) => res.json())
.then(response => {
    console.log(response);
    let output = '';
    <header>
        <nav>
            <ul>
                <li>
                    <a href="" target="_blank">Home</a>
                </li>
                <li>
                    <a href="" target="_blank">Shop</a>
                </li>
                <li>
                    <a href="" target="_blank">Cart</a>
                </li>
            </ul>
        </nav>
    </header>

    document.querySelector('tbody').innerHTML = output
}).catch(error => console.error(error));

function DisplayAllSneakers() {
    const sneakerString = `
    <div class="sneaker">
        <img src="${sneaker.imageUrl}" alt="${sneaker.brand} ${sneaker.model}" width="200">
        <h3>${sneaker.brand} ${sneaker.model}</h3>
        <p>Price: $${sneaker.price.toFixed(2)}</p>
    </div>
    `;

    let output = '';

}
