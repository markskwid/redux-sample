import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuth);
	return (
		<>
			<Header />
			{!isAuthenticated ? <Auth /> : <UserProfile />}
			<Counter />
		</>
	);
}

export default App;
