import React, { useState } from 'react';
import Counter from '../index';
const Counter4 = () => {
	const [count, setCount] = useState(0);

	const onincrement = () => {
		setCount(count + 1);
	};
	const ondecrement = () => {
		setCount(count - 1);
	};
	return (
		<div style={{ marginTop: '20px' }}>
			<Counter grey={true} vertical={true} width="52px" handleincrement={onincrement} handledecrement={ondecrement} content={count} />
		</div>
	);
};

export default Counter4;
