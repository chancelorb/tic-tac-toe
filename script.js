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
        if (one === 'o' && two === 'o' && tree === 'o') {alert('YOU WIN')};
        if (four === 'o' && five === 'o' && six === 'o') {alert('YOU WIN')};
        if (seven === 'o' && eight === 'o' && nine === 'o') {alert('YOU WIN')};
        if (one === 'o' && four === 'o' && seven === 'o') {alert('YOU WIN')};
        if (eight === 'o' && five === 'o' && two === 'o') {alert('YOU WIN')};
        if (tree === 'o' && six === 'o' && nine === 'o') {alert('YOU WIN')};
        if (seven === 'o' && five === 'o' && tree === 'o') {alert('YOU WIN')};
        if (one === 'o' && five === 'o' && nine === 'o') {alert('YOU WIN')};
        $('h2').text(`It's your turn '0'`);
        //console.log(playerBoard)
      } else {
        $(this).addClass('playerO');
        count++;
        $(this).attr('id', 'o');
        if (one === 'x' && two === 'x' && tree === 'x') {alert('YOU WIN')};
        if (four === 'x' && five === 'x' && six === 'x') {alert('YOU WIN')};
        if (seven === 'x' && eight === 'x' && nine === 'x') {alert('YOU WIN')};
        if (one === 'x' && four === 'x' && seven === 'x') {alert('YOU WIN')};
        if (eight === 'x' && five === 'x' && two === 'x') {alert('YOU WIN')};
        if (tree === 'x' && six === 'x' && nine === 'x') {alert('YOU WIN')};
        if (one === 'x' && five === 'x' && nine === 'x') {alert('YOU WIN')};
        if (seven === 'x' && five === 'x' && tree === 'x') {alert('YOU WIN')};
        $('h2').text(`It's your turn 'X'`);
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
    $('h2').text(`'X' can start!`);
  });
  /*$('.field').on('click', function() {
    let one = $('.one').attr('id');
    let two = $('.two').attr('id');
    let tree = $('.tree').attr('id');
    let four = $('.four').attr('id');
    let five = $('.five').attr('id');
    let six = $('.six').attr('id');
    let seven = $('.seven').attr('id');
    let eight = $('.eight').attr('id');
    let nine = $('.nine').attr('id');

    if (one === 'x' && two === 'x' && tree === 'x') {alert('YOU WIN')};
    if (four === 'x' && five === 'x' && six === 'x') {alert('YOU WIN')};
    if (seven === 'x' && eight === 'x' && nine === 'x') {alert('YOU WIN')};
    if (one === 'x' && four === 'x' && seven === 'x') {alert('YOU WIN')};
    if (eight === 'x' && five === 'x' && two === 'x') {alert('YOU WIN')};
    if (tree === 'x' && six === 'x' && nine === 'x') {alert('YOU WIN')};
    if (one === 'x' && five === 'x' && nine === 'x') {alert('YOU WIN')};
    if (seven === 'x' && five === 'x' && tree === 'x') {alert('YOU WIN')};
    if (one === 'o' && two === 'o' && tree === 'o') {alert('YOU WIN')};
    if (four === 'o' && five === 'o' && six === 'o') {alert('YOU WIN')};
    if (seven === 'o' && eight === 'o' && nine === 'o') {alert('YOU WIN')};
    if (one === 'o' && four === 'o' && seven === 'o') {alert('YOU WIN')};
    if (eight === 'o' && five === 'o' && two === 'o') {alert('YOU WIN')};
    if (tree === 'o' && six === 'o' && nine === 'o') {alert('YOU WIN')};
    if (seven === 'o' && five === 'o' && tree === 'o') {alert('YOU WIN')};
    if (one === 'o' && five === 'o' && nine === 'o') {alert('YOU WIN')};
  })*/

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
