import React from "react";

class Poem extends React.Component {
	state = {
		wasRead: false,
	};

	handleClick = () => {
		this.setState((previousState) => {
			return { wasRead: !previousState.wasRead };
		});
	};
	render() {
		let { title, author, content } = this.props.poem;
		return (
			<div>
				<h3>Title: {title}</h3>
				<p>{content}</p>
				<p>
					<strong>- By: {author}</strong>
				</p>
				{this.state.wasRead ? (
					<button onClick={this.handleClick}>Read!</button>
				) : (
					<button onClick={this.handleClick}>Mark as read</button>
				)}
				{/* <button onClick={this.handleClick}>Mark as read</button> */}
			</div>
		);
	}
}

export default Poem;
