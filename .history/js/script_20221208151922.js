$(document).ready(function () {
        $(".web-info-button").click(function (e) { 
                e.preventDefault();
               $(this).find(".info-content").toggle("show");
               $(this).siblings().toggle("")
        });
});