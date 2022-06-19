import React, { useState } from 'react';
import Counter from '../index';
const Counter5 = () => {
	const [count, setCount] = useState(0);

	const onincrement = () => {
		setCount(count + 1);
	};
	const ondecrement = () => {
		setCount(count - 1);
	};
	return (
		<div style={{ marginTop: '20px' }}>
			<Counter grey={true} width="134px" contentgrey={true} handleincrement={onincrement} handledecrement={ondecrement} content={count} />
		</div>
	);
};

export default Counter5;
