import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const isVisibleState = useSelector((state) => state.counter.isVisible);

	const dispatch = useDispatch();

	const increment = () => {
		dispatch(counterAction.increment());
	};

	const decrement = () => {
		dispatch(counterAction.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterAction.toggle());
	};

	const increase = () => {
		dispatch(counterAction.increase(5));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			{isVisibleState && <div className={classes.value}>{counter}</div>}

			<div>
				<button onClick={increase}>Plus 5</button>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
