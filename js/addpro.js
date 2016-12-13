$("header").load("hearder.html");
$("footer").load("footer.html");
$("#file").mouseleave(function () {
    var html="";
    $.each($(this)[0].files,function (i,index) {
        html+=" "+index.name;
    });
    $("#file_names").html(html);
});