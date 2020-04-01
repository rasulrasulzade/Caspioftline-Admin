export const handleTabInput = () => {

    const tabInputs = document.getElementsByClassName("tab-file")
    for (let i = 0; i< tabInputs.length; i++) {
        const a = tabInputs[i]
        a.addEventListener("change", () => {
            if(a.files.length > 0) {
                a.nextElementSibling.firstElementChild.textContent =  a.files[0].name
                a.nextElementSibling.classList.add("has-file");
                a.nextElementSibling.nextElementSibling.addEventListener("click", () => {
                    a.value = "";
                    a.nextElementSibling.classList.remove("has-file");
                })
            } else {
                a.nextElementSibling.classList.remove("has-file");
            }
            
        })
    }

    // const tabInputs = document.querySelectorAll(".tab-file")
    // for (let b of tabInputs) {
    //     console.log(b)
    //     b.addEventListener("change", () => {
    //                 if(b.files.length > 0) {
    //                     b.nextElementSibling.firstElementChild.textContent =  b.files[0].name
    //                     b.nextElementSibling.classList.add("has-file");
    //                 } else {
    //                     b.nextElementSibling.classList.remove("has-file");
    //                 }
                    
    //             })
    //     }
    
}