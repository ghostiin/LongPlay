import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper } from './style';
import { useDebounce } from '../../hooks';

const SearchBar = ({ handleQuery }) => {
	const [ query, setQuery ] = useState('');
	const inputEl = useRef();
	useEffect(() => {
		// 进入页面自动focus
		inputEl.current.focus();
	}, []);

	const onInputChange = (e) => {
		setQuery(e.target.value);
	};
	const clearInput = () => {
		setQuery('');
	};
	const debouncedSearchTerm = useDebounce(query, 500);
	useEffect(
		() => {
			// 每次query改变 都回传给父组件
			handleQuery(debouncedSearchTerm);
		},
		[ debouncedSearchTerm, handleQuery ]
	);

	return (
		<InputWrapper>
			<input
				ref={inputEl}
				type='text'
				onChange={onInputChange}
				value={query}
				placeholder='&#xe6e1; SEARCH FOR ALBUMS'
			/>
			<i
				className='iconfont'
				onClick={clearInput}
				aria-hidden='true'
				style={query ? { display: 'block' } : { display: 'none' }}
			>
				&#xe69e;
			</i>
		</InputWrapper>
	);
};

SearchBar.propTypes = {
	handleQuery: PropTypes.func
};

SearchBar.defaultProps = {
	handleQuery: () => {}
};

export default React.memo(SearchBar);
