$(document).ready(function () {
  $('.header__burger,.header__list').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
