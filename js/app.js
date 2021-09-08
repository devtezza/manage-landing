const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav')
//const outsideMenu = document.querySelector('.outside-menu')


// Open and Close navbarMenu by clik on menuBtn
menuBtn.addEventListener('click', toggleMenu)
// Open and Close navbarMenu by Click Outside
//outsideMenu.addEventListener('click', toggleMenu)

// Toggle Menu Function
function toggleMenu() {
    //console.log('activated toggleMenu function')
    navBar.classList.toggle('active')
    menuBtn.classList.toggle('active')
    console.log(navBar.classList)
    //outsideMenu.classList.toggle('active')
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