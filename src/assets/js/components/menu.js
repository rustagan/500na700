window.addEventListener("DOMContentLoaded", (event) => {
    let innerWidth = screen.width;
    if (innerWidth > 450) {
        document.querySelectorAll(".menu_point_button").forEach(e => {
            e.addEventListener("mouseover", e => {
                let menu = e.currentTarget.dataset.path;
                const modal = document.querySelector('.modal');
                document.querySelectorAll(".sub_menu_container").forEach(e => {
                    const subMenu = document.querySelector(`[data-target=${menu}]`);
                    if (!subMenu.classList.contains("open")) {
                        e.classList.remove("sub_menu_active");
                        e.classList.remove("open");
                        subMenu.classList.add("sub_menu_active");
                        timeoutId = setTimeout(() => {
                            subMenu.classList.add("open");
                            modal.classList.add("modal_active");
                        }, 0);
                    }
                    window.onmouseover = e => {
                        if (e.target == subMenu || e.target == document.querySelector(`[data-path=${menu}]`) || e.target.tagName === "LI" || e.target.className == "sub_menu_name" || e.target.className == "sub_menu") {
                            return;
                        } else {
                            subMenu.classList.remove("sub_menu_active");
                            subMenu.classList.remove("open");
                            modal.classList.remove("modal_active");
                        }
                    }
                })
            });
        });
    } else {
        document.querySelector('.mob_menu').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.menu').classList.toggle('open');
        })
        document.querySelectorAll(".menu_point_button").forEach(e => {
            e.addEventListener("click", e => {
                let point = e.currentTarget.dataset.path;
                let subMenu = document.querySelector(`[data-target=${point}]`);
                if (subMenu.style.maxHeight) {
                    document.querySelectorAll(".sub_menu_container").forEach(e => {
                        e.style.maxHeight = null;
                        e.style.paddingTop = 0;
                    })
                } else {
                    document.querySelectorAll(".sub_menu_container").forEach(e => {
                        e.style.maxHeight = null;
                        e.style.paddingTop = 0;
                    })
                    subMenu.style.maxHeight = 255 + "px";
                    subMenu.style.paddingTop = 30 + "px";
                }
            });
        });
    }
});
