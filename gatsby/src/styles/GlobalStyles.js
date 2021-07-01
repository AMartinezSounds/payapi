import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 :root {
	 --dark-pink: #ba4270;
	 --water-white: #fbfcfe;
	 --san-juan-blue: #36536b;
	 --lightSan-juan-blue: #6c8294;
	 --mirage-blue: #1b262f;
	 --charm-pink: #da6d97; 
 }
 html {
	 font-size: 10px;
	 background-color: #edf3f8;
	 overflow-x: hidden;
 }
 body {
	 overflow-x: hidden;
 }
 ul {
	 list-style: none;
	 padding-left: 0;
 }
 .button {
	 cursor: pointer;
	 color: var(--water-white);
	 background-color: var(--dark-pink);
	 border-radius: 50px;
	 padding: 15px 45px;
	 font-size: 1.5em;
	 transition: all 0.3s linear;
	 &:hover {
		 background-color: var(--charm-pink);
	 }
}
 .emailInput {
    font-size: 1.5em;
    border: none;
    padding: 15px 45px;
    border-radius: 50px;
    margin-bottom: 2rem;
    position: relative;
    &:focus {
	outline: none;
    }
  }
  .buttonEmail {
	border: none;
	cursor: pointer;
	color: var(--water-white);
	background-color: var(--dark-pink);
	border-radius: 50px;
	padding: 15px 82px;
	font-size: 1.5em;
	transition: all 0.3s linear;
	&:hover {
		background-color: var(--charm-pink);
	}
 }
 .aboutUsButton {
	 border-radius: 50px;
	 font-size: 1.7rem;
	 border: 1px solid var(--water-white);
	 color: var(--water-white);
	 padding: 20px 35px;
	 transition: all 0.3s linear;
	 &:hover {
		 background-color: var(--water-white);
		 color: var(--mirage-blue);
	 }
 }
 .error {
	 color: red;
	 position: absolute;
 }
 @media(min-width: 700px){
	.inLine {
   	 display: flex;
	 position: relative;
  	}
	.emailInput {
		margin-bottom: 0;
		padding: 15px 30px;
		width: 445px;
	}
	.buttonEmail{
		padding: 5px 40px;
		z-index: 2;
		position:absolute;
		right: 0;
		height: 100%;
	}
 }
 @media(min-width: 1300px){
	 
 }
`;

export default GlobalStyles;
