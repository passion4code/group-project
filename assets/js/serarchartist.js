var arrayOfStrings2 = arrayOfStrings[0].split('?artistName=');


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


