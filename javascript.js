function ShowMobileMenu(){
  let menu=document.getElementById("nav__menu--mobile");
  let menuButton=document.getElementById("nav__menu--icon");
  let headerTitle=document.getElementById("header__title");
  let main=document.getElementsByTagName("main");
  let footer=document.getElementsByTagName("footer");
  menu.style.display="block";
  menu.className="animation--showMenu";//animation for the menu
  menuButton.style.display="none";
  headerTitle.style.display="none";
  main[0].style.display="none";
  footer[0].style.display="none";
}
function HideMobileMenu(){
  let menu = document.getElementById("nav__menu--mobile");
  menu.className="animation--hideMenu";//animation to hide the menu
  let menuButton=document.getElementById("nav__menu--icon");
  let headerTitle=document.getElementById("header__title");
  let main=document.getElementsByTagName("main");
  let footer=document.getElementsByTagName("footer");
  setTimeout(() => {
    HideElements();
  }, 200);
  function HideElements(){
    menu.style.display="none";
    menuButton.style.display="block";
    headerTitle.style.display="block";
    main[0].style.display="block";
    footer[0].style.display="block";
  }
}