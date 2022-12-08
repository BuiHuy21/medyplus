$(document).ready(function () {
        $(".web-info-button").click(function (e) { 
                e.preventDefault();
               $(this).find(".info-content").toggle("show");
               $(this).siblings().toggle("hide");
               $(".sl-language").toggleClass("sl-language-in-active")
        });
        $(".nav-icon").click(function (e) { 
                e.preventDefault();
                $(".navbar").addClass("active")
                $(".cover").addClass("active")
        });
       $('.cover').click(function (e) { 
        e.preventDefault();
        $(".navbar").removeClass("active")
        $(".cover").removeClass("active")
       });
});