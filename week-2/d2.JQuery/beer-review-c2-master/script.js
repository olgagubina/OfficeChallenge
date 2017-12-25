
var beers = [];


function addBeer(){
var name = $('.beer-input').val();
var category = $('.category-input').val();
var beerObj = {};
beerObj.name = name;
beerObj.category = category;
beers.push(beerObj);
}

function renderBeers() {
    $('.beers-list').html('');
    for (var i=0; i<beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + ' ' + beers[i].category + '</li>');
    }
}

$('.beer-form').on('click', '.post-beer', function(){
    addBeer();
    renderBeers();
});







