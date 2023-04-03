const response = await fetch("https://dummyjson.com/products");

const data = await response.json();
const products = data.products;
console.log(products);

const seciba = document.createElement("div");
seciba.classList.add("seciba");
document.body.appendChild(seciba);

products.forEach((product) => {const heading = document.createElement("h2");

const card = document.createElement("div");
seciba.appendChild(card);
card.classList.add("card")

const images = document.createElement("img");
images.src = product.thumbnail;
card.appendChild(images);
images.classList.add("img")

heading.textContent = product ["title"];
card.appendChild(heading);

const desc = document.createElement("p");
desc.textContent = product.description;
card.appendChild(desc);

const brand = document.createElement("p");
brand.textContent = product.brand;
card.appendChild(brand);

const price = document.createElement("p");
price.textContent = product.price + "€";
card.appendChild(price);

const discountPercentage = document.createElement("p");
discountPercentage.textContent = product.discountPercentage + "%";
card.appendChild(discountPercentage);


const cardButton = document.createElement("button");
card.appendChild(cardButton);
cardButton.classList.add("cardButton");
cardButton.textContent = "please buy";
});

  