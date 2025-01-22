
    const header = document.querySelector('.header-sticky');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky'); 
    } else {
        header.classList.remove('sticky'); 
    }
    });

    document.querySelector('.drawer-btn').addEventListener('click', () => {
        const menu = document.querySelector('.drower-menu');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        } else {
            menu.classList.add('open');
        }
    })

    function onToggle() {
        document.querySelector('.drower-menu').classList.remove('open');
    }


    const products = document.querySelectorAll('.product-list-image');
    const imgElement = document.querySelectorAll('#slider-image');
  
    products.forEach(e => {
        e.addEventListener('click', (e) => {
            products.forEach(b => b.style.border = "1px solid transparent");
             e.target.style.border = "2px solid #2a317d"
             const dataValue = e.target.getAttribute('data-value');

             
             const newImageSrc = e.target.getAttribute('data-image');
             imgElement.src = newImageSrc;

             imgElement.forEach((img) => {
                img.src = newImageSrc;
              });

             let setProductValue = document.querySelector('.product-value');
             setProductValue.innerHTML = dataValue;
        })
        
    })

    const tabs = document.querySelectorAll('.tab-item');
    const contents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
      });
    });


    const menuItem = document.querySelectorAll('.menu-item');
    menuItem.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.target.classList.toggle('active');
        });
    });

    

// let elem = document.querySelector('.rebuy-product-slider');
// let flkty = new Flickity( elem, {
//     pageDots: false,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 groupCells: 1,
//                 prevNextButtons: false,
//                 pageDots: false,
//             }
//         }
//     ]
// });

let counter = 0;
const valueDisplay = document.getElementById("value");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
    counter++;
    valueDisplay.textContent = counter;
    console.log(counter);
    
});

decreaseButton.addEventListener("click", () => {
    if (counter > 0) {
    counter--;
    valueDisplay.textContent = counter;
    }
});