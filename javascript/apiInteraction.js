
//sets up Spotify

function setupSpotify () {
    var spotifyApi = new SpotifyWebApi();

    // Grabbing access token using Spotify Web API
    $.ajax({
        url: 'https://accounts.spotify.com/api/token',
        headers: {
         'Authorization': 'Basic ' + btoa( "11061422aa1046b9ab9b1c6eb0193619" + ":" + "cfa323c2f0414388a8538fd11aa57206") //client ID and client secret from Spotify for Dev Dashboard
       }
       }).success(function(response) {
       // Your token will be in response.access_token
       
           spotifyApi.setAccessToken(response.access_token);
          
       });
}



//var for user input artist
var originalArtist="";


// Querys the Spotify API for the Spotify Artist ID - 1 ajax call
spotifyApi.searchArtists( artist, {}, function (err, data) {
    if (err) console.error(err);
    else console.log('Artist ID', data);
    console.log()
  });

  var originalArtistID = '';


// Query the Spotify API with originalArtistID and return related artists
function returnRelatedArtists () {

    //store the related artists in an array
    relatedArtists { //make into 10 objects
        name : ['Big Sean', 'Jeremih', 'J. Cole', '2 Chainz', 'Tyga', 'Bryson Tiller', 'Tory Lanez', 'Future', 'Wale', 'Meek Millz' ]; 
        URL :  [ 'https://open.spotify.com/artist/0c173mlxpT3dSFRgMO8XPh?si=MB9-ujSXRCmOfRJHOxfzKA', 'https://open.spotify.com/artist/3KV3p5EY4AvKxOlhGHORLg?si=-g_6vSYyQl6rQ1eH7UkFLQ', 'https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5?si=DILl--Q8TjqAvJfx1s_BMQ', 'https://open.spotify.com/artist/17lzZA2AlOHwCwFALHttmp?si=Al9bICUAR4i6n8nYLtcufg', 'https://open.spotify.com/artist/5LHRHt1k9lMyONurDHEdrp?si=4McXNt2ySWq0wLRg86clkA', 'https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs?si=dzdch5d8RjOrzMHDZpiZzw', 'https://open.spotify.com/artist/2jku7tDXc6XoB6MO2hFuqg?si=ic1WO0xyQaiIqYd60loooA', 'https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i?si=G8iTkn5SRIGYVYrTUdKcjQ', 'https://open.spotify.com/artist/67nwj3Y5sZQLl72VNUHEYE?si=I3sRihgSTQyLtTAET1JV7Q', 'https://open.spotify.com/artist/20sxb77xiYeusSH8cVdatc?si=WCmMmsT4QXe8ncDx1hvNOg'];
    };
    //populate the array into relatedArtistsDiv 

        $('#artistname').on('click',

    )
            for (i = 0; i < relatedArtists.name.length; i++) {
                $('#relatedArtist').append(relatedArtists.name[i]);

            }
        
    
}




//event handler for onclick in relatedArtistsDiv

//Query the spotify API to return relatedArtist top tracks

//populate the relatedArtist top tracks into Playlist Div






