const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 54,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 160,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 110,
    cat: "Casual",
    },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 55,
    cat: "Dress",
    },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 20,
    cat: "Sport",
    },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
];

const search = document.querySelector(".search");
const catagory = document.querySelector(".catagory");
const products = document.querySelector(".products");
const price = document.querySelector(".price");
const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".value");

const displayProduct = (filterProducts) => {
  products.innerHTML = filterProducts.map(product =>
    `
    <div class="product">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">$${product.price}</span>
        </div>
    `
    ).join("");
};

displayProduct(data);

search.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase();

  if (value) {
    displayProduct(data.filter(item=>item.name.toLowerCase().indexOf(value)!==-1))
  } else
  {
    displayProduct(data);
  }
})

const setCatagories = () => {
  const allCats = data.map(item => item.cat);
  const allCatagories = allCats.filter((item, i) => {
    return allCats.indexOf(item) === i;
  });
  allCatagories.unshift("All");
  catagory.innerHTML = allCatagories.map(cat =>
    `
    <span class="cat">${cat}</span>
    `
  ).join("")
  
  catagory.addEventListener("click", (e) => {
    selectedCat = e.target.textContent;

    selectedCat == "All"
      ? displayProduct(data)
      : displayProduct(data.filter((item) => item.cat === selectedCat));
  })
}
const setPricesss = () => {
  const priceList = data.map(item => item.price);
    const maxPrice = Math.max(...priceList);
    const minPrice = Math.min(...priceList);

  priceRange.value = maxPrice;
  priceRange.max = maxPrice;
  priceRange.min = minPrice;
  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;

    displayProduct(data.filter((item) => item.price <= e.target.value));
  })
  }

setCatagories();
setPricesss();