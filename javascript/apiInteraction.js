
var spotifyApi = new SpotifyWebApi();

//var artist = userInputArtist
var artist="Bone thugs and harmony";
//spotifyApi.setAccessToken('')

// Querys the Spotify API for the Spotify Artist ID - 1 ajax call
spotifyApi.searchArtists( artist, {}, function (err, data) {
    if (err) console.error(err);
    else console.log('Artist ID', data);
    console.log()
  });





// use the artist ID to query Spotify and return related artists

function returnRelatedArtists () {

    var queryURL = "https://api.spotify.com/v1/artists/{id}/related-artists" + artist + "&type=track&limit=1";
}


//the user will click on a related artist, and the artist they click on will query the api to return that artist's music

function returnRelatedArtistMusic () {



}




