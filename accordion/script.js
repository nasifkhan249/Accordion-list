const header=document.querySelectorAll(".accordion-header");
const accordionHeader=Array.from(header);

accordionHeader.forEach((el)=>{

    
    el.addEventListener("click",()=>{
 
        accordionHeader.forEach((element)=>{
                element.classList.remove('active');
                element.nextElementSibling.classList.remove('active');
        });

        const isActive=el.classList.contains('active');
        if(!isActive){    
            el.classList.add('active');
            el.nextElementSibling.classList.add('active');
        }

    })
})




// accordionHeader.forEach((el)=>{
//     // console.log(element);
    
//     el.addEventListener("click",()=>{
//         const isActive=el.classList.contains('active');
//         // console.log("click");
//         accordionHeader.forEach((element)=>{
//             // console.log("click");
//              // Close all sections
//             element.classList.remove('active');
//             element.nextElementSibling.classList.remove('active');
//         });

//          // If the clicked section was not active, open it
//         if(!isActive){
//             el.classList.add('active');
//             el.nextElementSibling.classList.add('active');
//         }
//     })
// })


