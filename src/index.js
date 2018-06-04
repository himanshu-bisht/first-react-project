import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1n027DP0_5Ss";
const API_KEY = "AIzaSyBRGyJaVOEhry_Tnc6YSRCitK1D0ivHgf8";
// Downwards data flow.
class App extends Component {
  constructor(props){
      // Props is available anywhere in the code
      super(props);
      this.state = {
        videos:[],
        selectedVideo:null

      };
      this.videoSearch('Dragon Ball Super')
  }


  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
              videos: videos,
              selectedVideo: videos[0]
            });
          });
  }


  render() {
      return (
        <div>
          <SearchBar
           onSearchTermChange={(term) => this.videoSearch(term)}/>
           <div className="container-fluid rest-body">
             <div className="row">
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
              onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
              videos={ this.state.videos } />
            </div>
          </div>
        </div>
      );
  }
};

ReactDOM.render(<App />, document.querySelector("#main-container"));
