 
   const menuIcon = document.querySelector('.menu-icon');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);



$(".menu-icon").click(function(){
  $(".container").toggleClass("see");
});

// $(document).ready(function(){
//     $(".menu-icon").click(function(){
//         $(".container").hide("1000");
//     });
//      $(".menu-icon").click(function(){
//         $(".container").show("1000");
//     });
// });