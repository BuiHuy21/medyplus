$(document).ready(function () {
        $(".web-info-button").click(function (e) { 
                e.preventDefault();
               $(this).find(".info-content").toggle("show");
               $(this).siblings().toggle("hide")
        });
        $(".nav-icon").click(function (e) { 
                e.preventDefault();
                $(".navbar").addClass("active")
                $(".cover").addClass("active")
        });
        $(".nav-icon").click(function (e) { 
                e.preventDefault();
                $(".cover").addClass("active")
        });k
});