import React, { useState } from 'react';
import Counter from '../index';
const Counter2 = () => {
	const [count, setCount] = useState(0);
	const array = ['100-200', '200-300', '300-400', '400-500'];

	const onincrement = () => {
		setCount(count + 1);
	};
	const ondecrement = () => {
		setCount(count - 1);
	};
	return (
		<div style={{ marginTop: '10px', marginBottom: '10px' }}>
			<Counter
				grey={false}
				width="210px"
				handleincrement={array.length - 1 > count && onincrement}
				handledecrement={count !== 0 && ondecrement}
				content={array[count]}></Counter>
		</div>
	);
};

export default Counter2;
