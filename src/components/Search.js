import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './UI/Input';

const Wrapper = styled.div`margin: 4rem auto;`;
const onInputChange = () => {};
const Search = (props) => {
	return (
		<Wrapper>
			<Input placeholder=" Search" onChange={onInputChange} />
		</Wrapper>
	);
};

export default Search;
