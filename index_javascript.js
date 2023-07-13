window.addEventListener("scroll", function (event) {
 
    let scroll_y = this.scrollY;
    let scroll_x = this.scrollX;
    console.log(scroll_x, scroll_y);
    if(scroll_y>=400&&scroll_y<1050){
        let a = document.querySelector("[href = '#Benefit']");
        a.classList.add('Benefitlnk')
        a.classList.add('color-green')
    }
    else{
        let a = document.querySelector("[href = '#Benefit']");
        a.classList.remove('Benefitlnk')
        a.classList.remove('color-green')
    }
    if(scroll_y>=1050&&scroll_y<1400){
        let a = document.querySelector("[href = '#Marketing']");
        a.classList.add('Benefitlnk')
        a.classList.add('color-blue')
    }else{
        let a = document.querySelector("[href = '#Marketing']");
        a.classList.remove('Benefitlnk')
        a.classList.remove('color-blue')
    }
    if(scroll_y>=1400){
        let a = document.querySelector("[href = '#Contact']");
        a.classList.add('Benefitlnk')
        a.classList.add('bg-color-contact')
    }else if(scroll_y<=1400){
        let a = document.querySelector("[href = '#Contact']");
        a.classList.remove('Benefitlnk')
        a.classList.remove('bg-color-contact')
    }

})