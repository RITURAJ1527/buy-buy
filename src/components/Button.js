import styled from 'styled-components';

export const ButtonContainer =styled.button`
	text-transform: capitalize;
	font-size: 1rem;
	background: #001a33;
	border: 0.05rem solid var(--lightBlue);
	border-color: ${prop =>
			prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	
	color: ${prop =>
			prop.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition : all 0.3s ease-in-out;
	&:hover{
		background :${prop =>
			prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
		color : var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;