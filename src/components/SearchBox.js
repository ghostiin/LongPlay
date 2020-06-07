import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import Input from './UI/Input';

const Wrapper = styled.div`margin: 4rem auto;`;

const SearchBox = React.forwardRef((props, ref) => {
	const [ term, setTerm ] = useState('');
	const { handleInput } = props;
	const debounceTerm = useCallback(debounce(handleInput, 500), []);
	const onInputChange = (e) => {
		setTerm(e.target.value);
		debounceTerm(e.target.value);
	};

	return (
		<Wrapper>
			<Input ref={ref} placeholder=" Search" value={term} onChange={onInputChange} />
		</Wrapper>
	);
});

export default SearchBox;
