var arrayOfStrings = hellworld.split('&artistNumber=');


//$arraOfBigEvents
 var arraOfBigEvents = [ "Hi", "Hello", "Bonjour", "Hola" ];
var i=0;

var url = '//api.songkick.com/api/3.0/artists/'+arrayOfStrings[1]+'/calendar.json?apikey=6JgL1tEvlxLEhL62&jsoncallback=?';

$.getJSON(url, function(data) {
  var events = data.resultsPage.results.event;
  //console.log(events); 
  var lifeisgreat = 'something new';
  
  keyWordsearch();
  
  

  events.forEach(function(item, index, array) {
    var event2 = ''+array[index].displayName+'';
	//if (event != ''){
	arraOfBigEvents[i] = event2;
	i++;
	//}
  // window.document.writeln(' '+event2+'');
  // window.document.writeln('<br>');
   
  });
  //document.write(lifeisgreat);
 // document.writeln(arraOfBigEvents);
  
var iframe = document.createElement('iframe');
  
  var html = '<body>Foo</body>';
document.body.appendChild(iframe);
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html+arraOfBigEvents);
iframe.contentWindow.document.close();

  
});
//document.writeln(arraOfBigEvents);
