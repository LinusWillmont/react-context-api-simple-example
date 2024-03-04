import { useContext, useEffect, useState } from "react";
import { PostContext } from "../App";

const INITIAL_POST = {
	title: "",
	content: "",
};

export default function CreatePost() {
	if (!localStorage.getItem("wipPost")) {
		localStorage.setItem("wipPost", JSON.stringify(INITIAL_POST));
	}
	const wipPost = localStorage.getItem("wipPost");

	const [post, setPost] = useState(JSON.parse(wipPost));
	const { posts, setPosts } = useContext(PostContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const updatedPost = { ...post, [name]: value };
		setPost(updatedPost);
		localStorage.setItem("wipPost", JSON.stringify(updatedPost));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setPosts([...posts, post]);
		setPost(INITIAL_POST);
		localStorage.clear();
	};

	// useEffect(() => {}, [handleChange]);

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input
					type="text"
					name="title"
					onChange={handleChange}
					value={post.title}
				></input>
			</label>
			<br />
			<label>
				Content:
				<textarea
					name="content"
					onChange={handleChange}
					value={post.content}
					cols={50}
					rows={5}
				></textarea>
			</label>
			<br />
			<input type="submit" value="Post!"></input>
		</form>
	);
}
