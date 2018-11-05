import React from 'react';
import ReactDOM from 'react-dom';
import Twitter from 'twitter';
import './index.css';

class ShowTweet extends React.Component {
	constructor() {
		super();
		this.Client = new Twitter({
			consumer_key: 'TNB2MJIezNoqifmPgR1XwBlCl',
		  consumer_secret: 'G9RIdrdUQ0l2AI1ElVSjscKi0rpZdhWevHakFWLE3NkfR9jC5H',
		  access_token_key: '716908535729131520-2Te05zRGis7hBtiiV5nzB0fR1Sxh5cW',
		  access_token_secret: 'mK9gRzArOoLiqmAspt0qpUCqC3X1DRnSpY2dY5fI1CWvQ'
		});

		this.searchTwitter = this.searchTwitter.bind(this);
	}

	searchTwitter(){
	   this.Client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
	   console.log(tweets);
	 });
	}

  render() {
		return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Test App</h1>
        </header>
        <button style = {{height: "50px", width: "150px"}} onClick = {this.searchTwitter}> CLICK ME </button>
      </div>
    );
	}
}


//The first is the component to render
//The second is the element in which the component should be rendered. “Mounts” it onto the real DOM element mountNode (special variable)
ReactDOM.render(<ShowTweet />, document.getElementById('root'));
