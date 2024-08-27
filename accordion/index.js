const accordionHeader = document.querySelectorAll('.accordion-header');
const accordionHeaderArray = Array.from(accordionHeader);

accordionHeaderArray.forEach((item) => {
    item.addEventListener('click', () => {
        for(let i = 0; i < accordionHeaderArray.length; i++){
            if(accordionHeaderArray[i] !== item){
                accordionHeaderArray[i].classList.remove('active');
                accordionHeaderArray[i].nextElementSibling.classList.remove('active');
            }else{
                accordionHeaderArray[i].classList.toggle('active');
                accordionHeaderArray[i].nextElementSibling.classList.toggle('active');
            }
        }
    })
});



accordionHeader.forEach((el)=>{
    // console.log(element);
    
    el.addEventListener("click",()=>{
        const isActive=el.classList.contains('active');
        // console.log("click");
        accordionHeader.forEach((element)=>{
            // console.log("click");
             // Close all sections
            element.classList.remove('active');
            element.nextElementSibling.classList.remove('active');
        });

         // If the clicked section was not active, open it
        if(!isActive){
            el.classList.add('active');
            el.nextElementSibling.classList.add('active');
        }
    })
})
