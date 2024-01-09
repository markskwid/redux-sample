import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authAction } from "../store/auth";
const Header = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();

	const logout = () => dispatch(authAction.logout());
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>

			{isAuthenticated && (
				<nav>
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={logout}>Logout</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
