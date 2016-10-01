var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      type: 'video',
      maxResults: options.max,
      videoEmbeddable: true
    },
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    fail: function(data) {
      console.log('error');
    }
    
  });
};

window.searchYouTube = searchYouTube;


// {key: 'AIzaSyDXUp0ge_3OwhuELENgq3nraCLxemrEWm4', query: $('.form-control').val(), max: 5}