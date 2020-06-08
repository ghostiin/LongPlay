import styled, { createGlobalStyle } from 'styled-components';

export const OriginWrapper = styled.div`margin: 5rem 8rem;`;
export const SecondStyle = createGlobalStyle`
    body {
        /* background-color: ${({ theme }) => theme.colors.dark} */
        background-image: linear-gradient(to bottom,
        ${({ theme }) => theme.colors.main},
        ${({ theme }) => theme.colors.main} 80%,
        ${({ theme }) => theme.colors.dark} 80%);
        background-repeat: no-repeat;
        background-size: cover;
		
    }
`;

export const PlayerStyle = createGlobalStyle`
    body {
        /* background-color: ${({ theme }) => theme.colors.main} */
       background-color:  ${({ theme }) => theme.colors.main}
    }
`;

export const LongDash = styled.div`
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '0.1rem'};
	border-top: 1px solid ${({ theme }) => theme.colors.sub || '#fff'};
	opacity: inherit;
	margin-bottom: 0.8rem;
`;

export const HorizonLine = styled.div`
	height: 1px;
	width: ${({ width }) => width || '80%'};
	border: none;
	border-top: 1px solid ${({ theme }) => theme.colors.sub || '#fff'};
	opacity: 0.5;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;
