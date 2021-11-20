//menu = car


const car = [
  {
    id: 1,
    title: "BMW-X3 series",
    category: "bmw",
    price: 150000,
    img: "./images/car1.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 2,
    title: "Renault - centra",
    category: "renault",
    price: 90000,
    img: "./images/car2.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 3,
    title: "Renault - drive",
    category: "renault",
    price: 95000,
    img: "./images/car3.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 4,
    title: "BMW discovery",
    category: "bmw",
    price: 200000,
    img: "./images/car4.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 5,
    title: "Renault - Everest",
    category: "renault",
    price: 110000,
    img: "./images/car5.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 6,
    title: "Mercedes - outback",
    category: "mercedes",
    price: 180000,
    img: "./images/car6.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 7,
    title: "BMW - tourer ",
    category: "bmw",
    price: 150000,
    img: "./images/car7.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 8,
    title: "Mercedes classic",
    category: "mercedes",
    price: 190000,
    img: "./images/car8.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
  {
    id: 9,
    title: "Mercedes Luxury",
    category: "mercedes",
    price: 185000,
    img: "./images/car9.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book `,
  },
];

const sectionCenter  = document.querySelector(".section-center"); 
const filterBtns =  document.querySelectorAll(".filter-btn"); 

//load items
window.addEventListener("DOMContentLoaded", function () {
 displayAllCar(car);
  })

  function displayAllCar(menuItems){
    let displayCar = menuItems.map(function(item){
      //console.log(item);
     //return item;
     return  `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p class="item-text">
                    ${item.desc}
                  </p>
                </div>
              </article>`;
    })
    displayCar = displayCar.join(""); /// removes , in between and to join the strig to get one big string
    sectionCenter.innerHTML = displayCar;
  }



  //filter items 
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click",function(e){
      const category = e.currentTarget.dataset.id;
      const carCategory = car.filter(function(menuItem){
        if(menuItem.category === category){
          return menuItem;
        }
        //console.log(menuItem.category)      
      });
     // console.log(carCategory)
     if(category === "all"){
       displayAllCar(car);
     } else {
       displayAllCar(carCategory);
     }
    })
  });
