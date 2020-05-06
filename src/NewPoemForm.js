import React from "react";

class NewPoemForm extends React.Component {
	render() {
		let { author, title, content } = this.props.newPoem;
		return (
			<form className="new-poem-form">
				<input
					placeholder="Title"
					name="Title"
					value={title}
					onChange={this.props.handleChange}
				/>
				<input
					placeholder="Author"
					name="Author"
					value={author}
					onChange={this.props.handleChange}
				/>
				<textarea
					placeholder="Write your masterpiece here..."
					name="Content"
					value={content}
					onChange={this.props.handleChange}
					rows={10}
				/>
				<input type="submit" value="Share your masterpiece" />
			</form>
		);
	}
}

export default NewPoemForm;
