// function openMenu() {
//     var currentMenu = menuButton,
//         menu = document.getElementById(currentMenu.dataset.menuId),
//         name_new = menu.dataset.menuName,
//         id_new = menu.dataset.menuId,
//         menus = this.el.querySelectorAll('#nav-main .menu');
//
//     [].forEach.call(menus, function(menu) {
//         menu.classList.remove('active');
//     });
//
//     menu.classList.add('active');
//
//     if (!currentMenu.classList.contains('js-nav-main')) {
//         currentMenu.textContent = name_new;
//         currentMenu.dataset.menuId = id_new;
//     } else {
//         this.el.querySelector('.js-nav-menu').textContent = name_new;
//     }
// }

function openNav() {
    var wrappershit = document.getElementsByClassName("wrapper")[0];
    wrappershit.style.transform = "translateX(320px)";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.visibility = "visible";
    // document.getElementById("header").style.transform = "translateX(320px)";
    // document.getElementById("content").style.transform = "translateX(320px)";
}

function closeNav() {
    var wrappershit = document.getElementsByClassName("wrapper")[0];
    wrappershit.style.transform = "translateX(0px)";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.visibility = "hidden";
    // document.getElementById("header").style.transform = "translateX(0px)";
    // document.getElementById("content").style.transform = "translateX(0px)";
}

// function click_wa() {
//     document.getElementById("us-states").style.display = "none";
//     document.getElementById("washington-state").style.display = "block";
// }
