jQuery(function() {



  let count = 0;
  let turn;

  $('.colom').on('click', function() {
    if (count % 2 === 0) {
      $(this).addClass('playerX');
      count++;
      $('h2').text(`It's your turn '0'`);
    } else if (!$(this).hasClass('playerO')) {
      $(this).addClass('playerO');
      count++;
      $('h2').text(`It's your turn 'X'`);
    }
    console.log(count);
  });

  $('button').on('click', function() {
    $('div').removeClass('playerO playerX');
    count = 0;
    $('h2').text(`'X' can start!`);
  });

});
