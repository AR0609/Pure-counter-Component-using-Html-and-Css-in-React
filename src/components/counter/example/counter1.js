import { arrayOf } from 'prop-types';
import React, { useState } from 'react';
import Counter from '../index';

const Counter1 = () => {
	const [count, setCount] = useState(0);
	const array = ['100-200', '200-300', '300-400', '400-500'];

	const onincrement = () => {
		setCount(count + 1);
	};
	const ondecrement = () => {
		setCount(count - 1);
	};
	console.log(count, array.length, 'booo');
	return (
		<div>
			<div style={{ marginTop: '10px', marginBottom: '10px' }}>
				<Counter
					grey={true}
					width="202px"
					handleincrement={array.length - 1 > count && onincrement}
					handledecrement={count !== 0 && ondecrement}
					content={array[count]}></Counter>
			</div>
		</div>
	);
};

export default Counter1;
