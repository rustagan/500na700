document.querySelectorAll(".accordion_header").forEach(e => {
    e.addEventListener("click", () =>{
        let content = e.nextElementSibling;
        let margin;
        let innerWidth = screen.width;
        if (innerWidth > 450) {
            margin = 30;
        } else {
            margin = 20;
        }
        if(content.style.maxHeight) {
            document.querySelectorAll(".accordion_body").forEach(e => {
                e.style.maxHeight = null;
                e.style.marginBottom = null;
                e.parentElement.style.borderTop = "solid 1px rgba(255,255,255,0.2)";
            })
        } else {
            document.querySelectorAll(".accordion_body").forEach(e => {
                e.style.maxHeight = null;
                e.style.marginBottom = null;
                e.parentElement.style.borderTop = "solid 1px rgba(255,255,255,0.2)";
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.marginBottom = margin + "px";
                content.parentElement.style.borderTop = "solid 1px rgba(255,255,255,1)";
            })

        }
    })
})
