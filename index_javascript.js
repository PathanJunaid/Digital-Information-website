let scroll_y ;
window.addEventListener("scroll", function (event) {
 
    scroll_y = this.scrollY;
    // Fixed Button to go on top 
    // Will be visible after scroll 
    if(scroll_y>0){
        try{
            document.querySelector('.invisible').classList.add('visible');
            document.querySelector('.visible').classList.remove('invisible')   
        }catch(val){
            
        }
    }
    else{
        document.querySelector('.visible').classList.add('invisible');
        document.querySelector('.invisible').classList.remove('visible')   
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
  // Nav link color change on reaching each section 
    function activateLink(link) {
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('Benefitlnk');
      });
      link.classList.add('Benefitlnk');
    }
  // check which section is at the top 
    function checkSectionInView() {
      const scrollPosition = window.pageYOffset;
  
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop-100; // Adjust the offset value as needed
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(function(navLink) {
            if (navLink.getAttribute('href') === `#${sectionId}`) {
              activateLink(navLink);
            }
          });
        }
      });
    }
  
    // Add scroll event listener to the window
    window.addEventListener('scroll', checkSectionInView);
  });

  // onclick event to collapse navbar on md and sm devices 

  async function navbar_closed(){
    let p = new Promise((resolve,reject)=>{
        var button = document.querySelector('.button-1')
        button.classList.add('collapsed');
        button.setAttribute("aria-expanded","false")
        var div = document.querySelector('.its')
        div.classList.remove('show');
    });
    let val= await p;
    console.log(val);
}

