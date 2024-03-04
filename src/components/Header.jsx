import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
	const app = useContext(AppContext);
	return <h1>{app}</h1>;
}
