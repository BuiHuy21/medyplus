$(document).ready(function () {
        $(".web-info-button").click(function (e) { 
                e.preventDefault();
                $('.info-content').toggle('show');
        });
});