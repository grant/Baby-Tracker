/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

// Show loading screen
// var loadingCard = new UI.Card({
//   title: 'Sleepy Baby',
//   icon: 'images/menu_icon.png',
// //   subtitle: 'Track the wellness of your baby',
//   body: 'Loading...'
// });
// loadingCard.show();

// Load the data
ajax({
//   url: 'http://sleepybaby.herokuapp.com/sleeps',
  url: 'http://www.mocky.io/v2/5414ad79e37eca0f198e2db7',
  type: 'json'
}, function(dataObj) {
  var data = dataObj.sleeps;
  
  //loadingCard.hide();
  var menuSections = [];
  for (var i = 0; i < data.length; ++i) {
    var dataItem = data[i];
    var section = {
      items: [{
        title: dataItem.date,
        subtitle: ''+dataItem.total_time
      }]
    };
    menuSections.push(section);
  }
  
  var sleepMenu = new UI.Menu({
    sections: menuSections
  });
  sleepMenu.show();
  
  sleepMenu.on('select', function(e) {
    var index = e.sectionIndex;
    var detailCard = new UI.Card();
    var itemData = data[index];
    detailCard.title(itemData.date);
    detailCard.subtitle(itemData.total_time);
    var body = '';
    body += 'Awake: ' + itemData.awake + '%';
    body += '\n';
    body += 'Deep: ' + itemData.deep + '%';
    detailCard.body(body);
    detailCard.show();
  });
}, function(error) {
  console.log('The ajax request failed: ' + JSON.stringify(error));
});

// main.on('click', 'up', function(e) {
//   var menu = new UI.Menu({
//     sections: [{
//       items: [{
//         title: 'Pebble.js',
//         icon: 'images/menu_icon.png',
//         subtitle: 'Can do Menus'
//       }, {
//         title: 'Second Item',
//         subtitle: 'Subtitle Text'
//       }]
//     }]
//   });
//   menu.on('select', function(e) {
//     console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//     console.log('The item is titled "' + e.item.title + '"');
//   });
//   menu.show();
// });

// main.on('click', 'select', function(e) {
//   var wind = new UI.Window();
//   var textfield = new UI.Text({
//     position: new Vector2(0, 50),
//     size: new Vector2(144, 30),
//     font: 'gothic-24-bold',
//     text: 'Text Anywhere!',
//     textAlign: 'center'
//   });
//   wind.add(textfield);
//   wind.show();
// });

// main.on('click', 'down', function(e) {
//   var card = new UI.Card();
//   card.title('A Card');
//   card.subtitle('Is a Window');
//   card.body('The simplest window type in Pebble.js.');
//   card.show();
// });
