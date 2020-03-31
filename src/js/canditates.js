const candidatesAccordion = () => {

    var acc = document.getElementsByClassName("candidates-item__header");
    var i;

    const  closeOthers = n => {
        for(let el of  acc) {
        const panel = el.nextElementSibling;
        if(el !== n)  {
            panel.style.maxHeight = null;
            panel.parentElement.classList.remove("candidates-item--active");
        }
           
        }
    }
        
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() { 
        closeOthers(this)
        var panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.parentElement.classList.remove("candidates-item--active");
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";    
          panel.parentElement.classList.add("candidates-item--active");
        } 
      });
    }

}

export {candidatesAccordion}