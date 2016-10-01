class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: [],
      // targetSearch: 'react'
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('react');
  } 

  getYouTubeVideos (query) {
    this.props.searchYouTube({key: 'AIzaSyDXUp0ge_3OwhuELENgq3nraCLxemrEWm4', query: query, max: 5}, function(videos) {
      this.setState({currentVideo: videos[0], allVideos: videos});
    }.bind(this));
  }

  // searchHandler(newSearch) {
  //   this.setState({targetSearch: newSearch});
  // }
  
  clickHandler (video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    if (this.state.allVideos) {
      return (
        <div>
          <Nav getYouTubeVideos={this.getYouTubeVideos.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.allVideos} clickHandler={this.clickHandler.bind(this)}/>
          </div>
        </div>
      );
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

