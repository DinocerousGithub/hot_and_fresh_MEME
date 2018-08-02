$(document).ready(function(){
  console.log('app.js sanity check');

  $('.jumbotron').click(function(){
    var colorArray = ["rgb(0 ,246, 255)", "rgb(25,214,25)", "rgb(178 ,98, 162)", "rgb(221,107,0)", "rgb(18,237,149)"];

    var rng = Math.random();
    rng = rng * 10 / 2;
    rng = Math.round(rng)

    console.log(rng)
    $(this).css('background-color', colorArray[rng] );
  }); // NOTE: closes jumbotron rng









}); // NOTE: closes document.ready()
