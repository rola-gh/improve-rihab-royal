
//
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if (this.scrollY > 70)
//             $('nav').addClass("sticky");
//         else
//             $('nav').removeClass("sticky");
//
//     });
// },


$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });
});

//
function isSubmitted() {
    alert("شكراً لتواصلك معنا");
}