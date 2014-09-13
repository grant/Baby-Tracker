/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var ajax = require('ajax');

ajax({
  url: 'http://sleepybaby.herokuapp.com',
  type: 'json'
}, function(data) {
//   console.log('Quote of the day is: ' + data.contents.quote);
}, function(error) {
//   console.log('The ajax request failed: ' + error);
});

var main = new UI.Card({
  title: 'Sleepy Baby',
  icon: 'images/menu_icon.png',
//   subtitle: 'Track the wellness of your baby',
  body: 'Loading...'
});

main.show();

// var m = new UI.Menu({
//   sections: [{
//     title: 'First section',
//     items: [{
//       title: 'First Item',
//       subtitle: 'Some subtitle',
//       icon: 'images/item_icon.png'
//     }, {
//       title: 'Second item',
//       subtitle: 'Some subtitle',
//       body: 'awegawgeaweg'
//     }]
//   }]
// });

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
