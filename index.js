const btn=document.querySelectorAll(".btn");
// console.log(btn);

btn.forEach((element)=>{
    element.addEventListener("click",()=>{
        const content=element.nextElementSibling;
        // console.log(content);

        if(content.style.display=content.style.display==="block"){
            content.style.display="none"
        }else{
            content.style.display="block"
        }


        const accordion=element.parentElement.parentElement;
        console.log(accordion);

        let a=accordion.querySelectorAll(".content");
        // console.log(a);
        a.forEach(element =>{
            // console.log(element);
            
            if(element !== content){
                element.style.display="none"
            }
        })
        
        
    })

    
    
    
})













