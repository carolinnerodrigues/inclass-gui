import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

const Table = ({ headers, striped, children }) => {
	let currentClassName = 'table-rt table-responsible';

	if (striped) {
		currentClassName = currentClassName + ' table-striped-rt';
	}

	return (
		<table className={currentClassName}>
			<thead>
				<tr>
					{
						headers.map((header, index) => {
							return (<th key={index}>{header}</th>);
						})
					}
				</tr>
			</thead>
			<tbody key="tbody">
				{children}
			</tbody>
		</table>
	);
}

Table.TableItem = ({ children, handleClick, valueHandleClick }) => {
	return (
		<>
			{handleClick && (
				<tr onClick={() => handleClick(valueHandleClick)}>
					{children}
				</tr>
			)}
			{!handleClick && (
				<tr>
					{children}
				</tr>
			)}
		</>
	);
};

Table.TableItem.Element = ({ children, rowSpan, className }) => {
	return <td className={className} key={children} rowSpan={rowSpan}>{children}</td>
};

Table.TableItem.Line = ({ colSpan }) => {
	return (
		<tr className="line" colSpan={colSpan}>
			<td colSpan={colSpan} height="5"></td>
		</tr>
	);
};

Table.propTypes = {
	headers: PropTypes.array.isRequired,
	striped: PropTypes.bool
};

Table.TableItem.propTypes = {
	handleClick: PropTypes.func
};

export default Table;