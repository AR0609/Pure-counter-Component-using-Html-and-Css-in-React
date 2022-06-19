import React, { useState } from 'react';
import Counter from '../index';
const Counter3 = () => {
	const [count, setCount] = useState(0);

	const onincrement = () => {
		setCount(count + 1);
	};
	const ondecrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<Counter grey={false} vertical={true} width="52px" handleincrement={onincrement} handledecrement={ondecrement} content={count} />
		</div>
	);
};

export default Counter3;
