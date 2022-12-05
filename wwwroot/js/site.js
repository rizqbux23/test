// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("li.dropdown").each(function () {
    if ($("ul.dropdown-menu", this).children("li.nav-item").length == 0) {
        $(this).hide();
    }
});