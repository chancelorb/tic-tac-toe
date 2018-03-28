jQuery(function() {


  let count = 0;
  let playerBoard = [];


  $('.colom').on('click', function() {
    let one = $('.one').attr('id');
    let two = $('.two').attr('id');
    let tree = $('.tree').attr('id');
    let four = $('.four').attr('id');
    let five = $('.five').attr('id');
    let six = $('.six').attr('id');
    let seven = $('.seven').attr('id');
    let eight = $('.eight').attr('id');
    let nine = $('.nine').attr('id');
    if (!$(this).hasClass('playerO') && !$(this).hasClass('playerX')) {
      if (count % 2 === 0) {
        $(this).addClass('playerX');
        count++;
        $(this).attr('id', 'x');
        $('h2').text(`It's your turn '0'`);
        if (one === 'o' && two === 'o' && tree === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (four === 'o' && five === 'o' && six === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (seven === 'o' && eight === 'o' && nine === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (one === 'o' && four === 'o' && seven === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (eight === 'o' && five === 'o' && two === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (tree === 'o' && six === 'o' && nine === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (seven === 'o' && five === 'o' && tree === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        if (one === 'o' && five === 'o' && nine === 'o') {$('.winner').text(`O IS THE WINNER`); alert('O is the winner')};
        //console.log(playerBoard)
      } else {
        $(this).addClass('playerO');
        count++;
        $(this).attr('id', 'o');
        $('h2').text(`It's your turn 'X'`);
        if (one === 'x' && two === 'x' && tree === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (four === 'x' && five === 'x' && six === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (seven === 'x' && eight === 'x' && nine === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (one === 'x' && four === 'x' && seven === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (eight === 'x' && five === 'x' && two === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (tree === 'x' && six === 'x' && nine === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (one === 'x' && five === 'x' && nine === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        if (seven === 'x' && five === 'x' && tree === 'x') {$('.winner').text(`X IS THE WINNER`); alert('X is the winner')};
        //console.log(playerBoard)
      }
    } else if (count === 9) {
      alert('GAME IS OVER')
    } else {
      $('h2').text(`Find an empty box!`);
    }

  });

  $('button').on('click', function() {
    $('div').removeClass('playerO playerX');
    count = 0;
    $('.one').removeAttr('id');
    $('.two').removeAttr('id');
    $('.tree').removeAttr('id');
    $('.four').removeAttr('id');
    $('.five').removeAttr('id');
    $('.six').removeAttr('id');
    $('.seven').removeAttr('id');
    $('.eight').removeAttr('id');
    $('.nine').removeAttr('id');
    $('h2').text(`'X' can start!`);
  });

});



//_________________________________________________________
/*class car {
    makeCar(model, color, fuel) {
      this.model = model;
      this.color = color;
      this.fuel = fuel;
      }
      drive() {
        this.fuel--;
        return "vroom!";
      }
      refuel() {
        this.fuel = 100;
    }
};

const celica = new car('Toy-Yoda Celica', 'limegreen');
const civic = new car('Honda Civic', 'lemonchiffon');

class carManufacturer {
  constructor{
    this.name = name;
    this.inventory = [];
  }

  buildCars(model, color, count) {
    for (let i = 0; i < count; i++){
    ]]]]this.inventory.push(new car(model, color, fuel));
    }
  }
};

*/
