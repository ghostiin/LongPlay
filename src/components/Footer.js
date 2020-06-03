import React from 'react';
import styled from 'styled-components';
import { LongDash } from './style';

const Wrapper = styled.div`
	font-size: 1.4rem;
	font-family: ${({ theme }) => theme.fonts.text.light};
	opacity: 0.3;
	text-align: center;
	left: 50%;
	transform: translateX(-50%);
	width: 90%;

	span {
		display: inline-block;
		vertical-align: middle;
	}
`;

const Footer = ({ className, children }) => {
	return (
		<Wrapper className={className}>
			{children}
			<LongDash />
			<span>©&nbsp;</span>
			<span>made by Ghostin&nbsp;</span>
			<span>2020&nbsp;</span>
		</Wrapper>
	);
};

export default Footer;
