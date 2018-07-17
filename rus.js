<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
var currentLocation = window.location;
var hellworld = ''+currentLocation+'';
 var arrayOfStrings = hellworld.split('&artistNumber=');
 var arrayOfStrings2 = arrayOfStrings[0].split('?artistName=');
</script>
<body>
<table>
<tr>
<td style="display:block" valign="top" width="300">


This is SongKick
<script>



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

</script>



 



</td>
<td valign="top" width="300">
This is Youtube 
    <div id="buttons">
    <label> <input id="query" value='' type="text"/><button id="search-button"  onclick="keyWordsearch()">Search</button></label>    
    <div id="container">
    <h1>Search Results</h1>
    <ul id="results"></ul>
    </div>  
 
           
<script>
 function keyWordsearch(){
    gapi.client.setApiKey('AIzaSyAMmC6PUKtNNBVo1xRtKN4yZgTdMYA5vY0');
    gapi.client.load('youtube', 'v3', function(){
            makeRequest();
    });
}
function makeRequest(){
    var q = arrayOfStrings2[1];
    var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet', 
            maxResults: 10
    });
    request.execute(function(response)  {                                                                                    
            $('#results').empty()
            var srchItems = response.result.items;                      
            $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;  
            vidThumburl =  item.snippet.thumbnails.default.url;                 
            vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';                
			
			     $('#results').append('<pre>' + vidTitle + vidThumbimg +   '</pre>');                      
    })  
  })  
}
 </script> 
 <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
 <script src="https://apis.google.com/js/client.js?onload=googleApiClientReady">   </script>

</td>
</tr>
</table>
</body>