$(document).ready(function() {
    var musicData = {
        "bigsean": {
            songIds: [
                '5NkfVQS8BkceRgoSQwcW6H',
                '0SGkqnVQo9KPytSri1H6cF',
                '7FYH5AW3bVfZHJIQpq3UOA',
                '1jQsKN68yE94tMYml0wHMd'
            ],
            image: 'assets/images/bigsean.png'
        },
        "jermih": {
            songIds: [
                '3oCJJksC12uFxkt3RQ7rbV',
                '0PJIbOdMs3bd5AT8liULMQ',
                '3WjyiSbfR74pjWXQ3IaFKJ',
                '08zJpaUQVi9FrKv2e32Bah'
            ],
            image: 'assets/images/jeremih.png'
        },
        
    }

    var $relatedArtistsContainer = $(".related-artist-player-list");

    var handleArtistClick = function() {
        var artistName = $(this).attr('data-author');
        $relatedArtistsContainer.empty();
        
        if (musicData.hasOwnProperty(artistName)) {
            var songs = musicData[artistName].songIds;
            
            for (var i = 0; i < songs.length; i ++) {
                /*
                <li>
                <img class="list-cover" src="assets/images/bigsean.png" />
                  <div class="list-info">
                    <iframe src="https://open.spotify.com/embed/track/5NkfVQS8BkceRgoSQwcW6H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                          
                  </div>
              </li>
              */
             var element = $("<li>");
             var imgCover = $("<img class='list-cover' />");
             imgCover.attr('src', musicData[artistName].image);

             var iframeWrapper = $("<div>").addClass('list-info');
             iframeWrapper.append('<iframe src="https://open.spotify.com/embed/track/' + songs[i] + '" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>')

             element.append(imgCover, iframeWrapper);
             $relatedArtistsContainer.append(element);
             
            }
        } else {
            $relatedArtistsContainer.append("<li>Artist was not supported</li>");
        }
    }



    // Listen for artist clicks
    $(".info-title").on('click', handleArtistClick);
})