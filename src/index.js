import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from './components/Search_bar'
import VideoList from './components/Video_list'
import VideoDetail from './components/Video_detail'

const API_KEY = 'AIzaSyA5hRzVsrfhA_P59Y0rEu610Nt2k-chEtg';


class App extends Component{
  constructor(){
    super()
    this.state={
      videos:[],
      selectVideo:null
    }
    this.videoSearch('cat')
  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term: term },(videos) => {
      this.setState({
        videos:videos,
        selectVideo:videos[0]
      })
      // key and state are the same, {{videos:videos}} => ({videos})
    })

  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
    return(
      <div>
       <SearchBar onSearchTermChange={videoSearch}/>
         <VideoDetail video={this.state.selectVideo}/>
          <VideoList
         onVideoSelect = {selectVideo => this.setState({selectVideo})}
         videos ={this.state.videos}
         />
     </div>

    )
  }

}

ReactDOM.render(<App/>, document.querySelector('.container'))
