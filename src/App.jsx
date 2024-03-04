import { createContext, useState } from "react";
import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

export const AppContext = createContext("Next-gen Social Media");
export const PostContext = createContext(null);

function App() {
	const [posts, setPosts] = useState([
		{ title: "Hello, world!", content: "React context is great :)" },
		{ title: "But...", content: "It's a little confusing at first!" },
	]);
	const APP_NAME = "Next-gen Social Media";

	return (
		<>
			<AppContext.Provider value={APP_NAME}>
				<Header />
			</AppContext.Provider>
			<PostContext.Provider value={{ posts, setPosts }}>
				<CreatePost />
				<Posts />
			</PostContext.Provider>
		</>
	);
}

export { App };
