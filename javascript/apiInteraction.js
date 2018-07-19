
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
    relatedArtists ['Big Sean', 'Jeremih', 'J. Cole', '2 Chainz', 'Tyga', 'Bryson Tiller', 'Tory Lanez', 'Future', 'Wale', 'Meek Millz' ]; 
    
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






