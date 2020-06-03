import styled from 'styled-components';

export const LongDash = styled.div`
	width: 100%;
	height: ${({ height }) => height || '0.1rem'};
	border-top: 1px solid ${({ theme }) => theme.colors.sub || '#fff'};
	opacity: inherit;
	margin-bottom: 0.8rem;
`;
