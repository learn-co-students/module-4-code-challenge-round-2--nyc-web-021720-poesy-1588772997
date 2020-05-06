import React from "react";

class NewPoemForm extends React.Component {
	state = {
		author: "",
		title: "",
		content: "",
	};

	handleChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => console.log(this.state)
		);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		console.log("running");
		fetch("http://localhost:6001/poems", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify({
				author: e.target.author.value,
				title: e.target.title.value,
				content: e.target.content.value,
			}),
		})
			.then((response) => response.json())
			.then((poem) => {
				this.props.addnewPoem(poem);
			});
		this.setState({ newPoem: {} });
	};

	render() {
		let { author, title, content } = this.state;
		return (
			<form className="new-poem-form" onSubmit={this.handleSubmit}>
				<input
					placeholder="Title"
					name="title"
					value={title}
					onChange={this.handleChange}
				/>
				<input
					placeholder="Author"
					name="author"
					value={author}
					onChange={this.handleChange}
				/>
				<textarea
					placeholder="Write your masterpiece here..."
					name="content"
					value={content}
					onChange={this.handleChange}
					rows={10}
				/>
				<input type="submit" value="Share your masterpiece" />
			</form>
		);
	}
}

export default NewPoemForm;
