import { Fragment, useEffect, useState } from 'react';
import SimpleInput from '../components/SimpleInput/SimpleInput';
import styles from './home.module.scss';

const Home = props => {
	const [sum, setSum] = useState(0);

	const [values, setValues] = useState({});

	useEffect(() => {
		let obj = {};
		for (let i = 1; i <= 10; i++) {
			for (let j = 1; j <= 10; j++) {
				obj[getColumnHeader(j) + i] = '';
			}
		}

		setValues(obj);
	}, []);

	function handleChange(e) {
		console.log(e.target.id, e.target.value);
		let value = e.target.value;

		let temp = { ...values };
		temp[e.target.id] = value;

		setValues(temp);

		if (value.includes('SUM:')) {
			let str = value.substring(value.indexOf(':') + 1, value.length);
			let cellArr = str.split(',');

			let sum = 0;
			for (let i = 0; i < cellArr.length; i++) {
				let input = document.getElementById(cellArr[i]);
				let value = input?.value;
				if (!isNaN(Number(value))) sum += Number(value);
				else sum = 0;
			}
			setSum(sum);
		}
	}

	function getColumnHeader(position) {
		let final = '';
		if (position > 26) {
			final += String.fromCharCode(64 + 26);
			getColumnHeader(position - 26);
		}

		final += String.fromCharCode(64 + position);
		return final;
	}

	function handleOnBlur(e, id) {
		console.log(e.target);
		if (e.target.value.includes('SUM:')) {
			let temp = { ...values };
			temp[id] = sum;

			console.log(temp);
			setValues(temp);
		}
	}

	let arr = [];

	for (let i = 0; i < 10; i++) {
		arr[i] = i;
	}

	return (
		<div className="container mt-5 mb-5">
			<div className="table-responsive">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th></th>
							{arr.map(item1 => {
								return <th key={item1}>{getColumnHeader(item1 + 1)}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{values &&
							arr.map(item1 => {
								return (
									<tr key={item1} id={item1}>
										<td>{item1 + 1}</td>
										{arr.map(item2 => {
											return (
												<td key={item2}>
													<SimpleInput
														id={getColumnHeader(item2 + 1) + Number(item1 + 1)}
														value={values[getColumnHeader(item2 + 1) + Number(item1 + 1)] || ''}
														handleChange={handleChange}
														handleOnBlur={handleOnBlur}
													/>
												</td>
											);
										})}
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
