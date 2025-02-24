const form = document.querySelector("form"),
        submit = form.querySelector("submit"),
        allInput = form.querySelector(".first input");


    submit.addEventListener("click",()=>{
        allInput.forEach(input=> {
            if(input.value != ""){
                form.classList.add('seaActive');
            }
            else{
                form.classlist.remove('seaActive');
            }
            
        })
    })