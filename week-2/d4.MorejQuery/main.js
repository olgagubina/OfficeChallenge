// PARTNER EXERCISE 1
var sauce = $('p:contains("Brisket")').data().sauce;
// alert(sauce);

// PARTNER EXERCISE 2

// $('li').on("click", function(){
//     this.remove();
// });


// JUST EXAMPLE (add event-listner)

// VER 1
// $('button').click(function () {
//     var name = $('#my-input').val();
//     $('ul').append('<li>' + name + '</li>');
//     bindEvents();// add the event-listner to every <li>
// });
  
// var bindEvents = function () {
//     $('li').off(); //clean up the existing events, not to dupplicate them
//     $('li').click(function () {
//       $(this).remove();
//     });
// }

// bindEvents(); //to bind event for already coming from HTML hard-code

// VER 2
$('button').click(function () {
    var name = $('#my-input').val();
    $('ul').append('<li>' + name + '</li>');
});

$('ul').on('click', 'li', function () {
    $(this).remove();
  });

//EXAMPLE (to reach the neibhours at the DOM)
$('button').on('click', function() {
    var relevantInput = $(this).closest("div").find("input").val();
  }) //closest - up, find - down