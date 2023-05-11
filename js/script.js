
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i) =>{
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })

})

const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");
let activeImageSlide = 0;
productImages.forEach((item,i) => {
    item.addEventListener('click',() =>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;
sizeBtns.forEach((item,i) =>{
    item.addEventListener('click', () =>{
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})
 
