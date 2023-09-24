const panels=document.querySelectorAll('.panel')
panels.forEach((x)=>{
    x.addEventListener('click',()=>{
      removeActiveClass();
        x.classList.add('active')
    })
    
})

function removeActiveClass(){
    panels.forEach((x)=>{
        x.classList.remove('active')
    })
}