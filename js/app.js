const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav')
const menuOverlay = document.querySelector('.overlay')


// Open and Close navbarMenu by clik on menuBtn
menuBtn.addEventListener('click', toggleMenu)
// Open and Close navbarMenu by Click Outside
menuOverlay.addEventListener('click', toggleMenu)

// Toggle Menu Function
function toggleMenu() {
    console.log(menuOverlay)
    navBar.classList.toggle('active')
    menuBtn.classList.toggle('active')
    //console.log(navBar.classList)
    menuOverlay.classList.toggle('active')
    document.body.classList.toggle('scrolling')
    
}

// Fixed Resize Screen Function
function resizeScreen() {
   // If navbarMenu is Open, Close It
   if (navBar.classList.contains('active')) {
        toggleMenu()
   }
  
}

window.addEventListener('resize', () => {
   if (this.innerWidth > 768) {
      resizeScreen()
   }
})

// Configuring Glide JS - Carousel Slider
const config = {
    type: 'carousel',
    perView: 3,
    gap: 20, 
     
    breakpoints: {
        
        980: {
          perView: 1,
          activeNav: 'glide__bullet--active'
        },
        
      }
    
}

// Creating Carousel Slider
new Glide('.glide', config).mount()