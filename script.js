jQuery(function() {



  let count = 0;
  let x = [];
  let o = [];
  let optionOne = [one,two,tree];
  let optionTWo = [one,four,seven];
  let optionThree = [four,five,six];
  let optionFour = [seven,eigth,nine];
  let optionFive = [two,five,eigth];
  let optionSix = [tree,six,nine];
  let optionSeven = [one,five,nine];
  let optionEight = [tree,five,seven]

  $('.colom').on('click', function() {

    if (!$(this).hasClass('playerO') && !$(this).hasClass('playerX')) {
      if (count % 2 === 0) {
        $(this).addClass('playerX');
        count++;
        x.push(this.id);
        $('h2').text(`It's your turn '0'`);
      } else {
        $(this).addClass('playerO');
        count++;
        o.push(this.id);
        $('h2').text(`It's your turn 'X'`);
      }
    } else if (count === 9) {
      alert('GAME IS OVER')
    } else {
      $('h2').text(`Find an empty box!`);
    }
    if ()
  });

  $('button').on('click', function() {
    $('div').removeClass('playerO playerX');
    count = 0;
    $('h2').text(`'X' can start!`);
  });

});
