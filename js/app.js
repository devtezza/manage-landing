const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav')
const menuOverlay = document.querySelector('.overlay')


// Open and Close navbarMenu by clik on menuBtn
menuBtn.addEventListener('click', toggleMenu)
// Open and Close navbarMenu by Click Outside
menuOverlay.addEventListener('click', toggleMenu)

// Toggle Menu Function
function toggleMenu() {    
    navBar.classList.toggle('active')
    menuBtn.classList.toggle('active')    
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
   if (this.innerWidth > 968) {
      resizeScreen()
   }
})

// Configuring Glide JS - Carousel Slider
const config = {
    type: 'carousel',
    perView: 1,    
    gap: 40,
    peek: 400,   

     
    breakpoints: {

        1230: {
            perView: 2,
            peek: 0

        },
        
        980: {
          perView: 1,
          peek: 0,
          activeNav: 'glide__bullet--active',          
          focusAt: 'center'
        },
        
      }
    
}

// Creating Carousel Slider
new Glide('.glide', config).mount()


// Validating email form
const form = document.querySelector('.newsletter')
const message = document.querySelector('.message')
const email = document.querySelector('.email')
let pristine = new Pristine(form)

email.addEventListener('focus', (e) => {
    email.style.color = '#000'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let valid = pristine.validate()

    if(!valid) {
        message.textContent = 'Please insert a valid email'
        email.style.color = '#f25f3a'
    } else {
        message.textContent = ''
        email.style.color = '#000'
    }   
    
})


