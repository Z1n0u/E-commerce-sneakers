const menuItems = document.querySelectorAll(".menuitem");
const sliderwrapper = document.querySelector(".sliderwrapper");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "assets/img/air.png",
        },
        {
          code: "darkblue",
          img: "assets/img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "assets/img/jordan.png",
        },
        {
          code: "green",
          img: "assets/img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "assets/img/blazer.png",
        },
        {
          code: "green",
          img: "assets/img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "assets/img/crater.png",
        },
        {
          code: "lightgray",
          img: "assets/img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "assets/img/hippie.png",
        },
        {
          code: "black",
          img: "assets/img/hippie2.png",
        },
      ],
    },
  ];

menuItems[0].style.color = "white";

const restcoloritems = ()=>{
    menuItems.forEach(Item => {
        Item.style.color="lightgrey";
    })
}

let chosenproduct = products[0];

const productimg=document.querySelector('.productimg');
const producttitle=document.querySelector('.producttitle');
const productprice=document.querySelector('.productprice');
const productcolors=document.querySelectorAll('.colors');
const productsizes=document.querySelectorAll('.sizes');

menuItems.forEach((Item, i) => {
    Item.addEventListener("click",()=>{
        //control slider and the items menu to white for selected items
        restcoloritems();
        sliderwrapper.style.transform = `translateX(${-100*i}vw)`;
        Item.style.color = "white";
        //chose the current selected item
        chosenproduct = products[i];
        //control product items to change with the item selected from menu item
        producttitle.textContent = chosenproduct.title;
        productprice.textContent = chosenproduct.price + "$";
        productimg.src=chosenproduct.colors[0].img;
       /* productcolors[0].style.backgroundColor = chosenproduct.colors[0].code;
        productcolors[1].style.backgroundColor = chosenproduct.colors[1].code;*/
        productcolors.forEach((productcolor,i) => {
            productcolor.style.backgroundColor = chosenproduct.colors[i].code;
        })
    })
});

productcolors.forEach((color,index) => {
    color.addEventListener("click", () =>{
        productimg.src=chosenproduct.colors[index].img;
    })
})

productsizes.forEach((size,index) => {
    size.addEventListener("click", () =>{
        productsizes.forEach(btn => {
            btn.style.backgroundColor="white"
            btn.style.color="black";
        }); 
        size.style.backgroundColor="black"
        size.style.color="white";
    });
})