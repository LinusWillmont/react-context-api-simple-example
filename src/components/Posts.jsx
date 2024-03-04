import { useContext } from "react";
import { PostContext } from "../App";

export default function Posts() {
	const { posts } = useContext(PostContext);
	console.log(posts);
	return (
		<>
			{posts.map((post) => {
				return (
					<div className="card">
						<h3>{post.title}</h3>
						<p>{post.content}</p>
					</div>
				);
			})}
		</>
	);
}
