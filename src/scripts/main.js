$(document).ready(function() {
  console.log('ready!');

  $('form').on('submit', function(e) {
    e.preventDefault();

    var userEvenColor = $('.evenColor').val();
    console.log(userEvenColor);
    var userOddProp = $('.oddProp').val();
    var userOddValue = $('.oddPropVal').val();

    $('.rowEven').css('background-color', userEvenColor);
    $('.rowOdd').css(userOddProp, userOddValue);

  });

});
