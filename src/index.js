import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ChannelList extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      channelList: [],
    };
  }

	addChannel() {
		let adress = document.getElementById("addChannelInput").value;
		let newState = this.state.channelList.concat(adress);
		this.setState({
			channelList: newState,
		});
	}

  render() {
		const channelList = this.state.channelList;
		const channels = channelList.map((channelAdress, index) => {
			return (
				<li key={index}>
					{channelAdress}
				</li>
			);
		}

		)

		return (
			<div className="Frame Channel-List">
				<form>
					<input id="addChannelInput" />
					<button id="addChannelButton" onClick={() => this.addChannel()}>Add channel</button>
				</form>
				<div>
					<ol>{channels}</ol>
				</div>
			</div>
		);
  }
}

class ChannelFeed extends React.Component {
  render() {
		return (
			<div className="Frame Channel-Feed">
				ChannelFeed
			</div>
		);
  }
}

class MessageDetails extends React.Component {
  render() {
    return (
			<div className="Frame Message-Deatils">
				MessageDetails
			</div>
		);  
  }
}

class MessageStats extends React.Component {
	render() {
    return (
			<div className="Frame Message-Stats">
				MessageStats
			</div>
		);  
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="wrap">
				<ChannelList />
				<ChannelFeed />
				<MessageDetails />
				<MessageStats />
			</div>
		)			
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);