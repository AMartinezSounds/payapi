import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg-pattern-circle.svg';

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
 textarea {
	 resize: none;
	 padding: 0rem 1.5rem !important; 
	 height: 100px;
 }
 input[type=checkbox] {
    transform: scale(1.7);
    background: transparent;
    margin-right: 2rem;

}
 input:invalid {
	 border: 1px solid red;
 }
 label {
	 font-size: 1.3rem;
	 color: var(--lightSan-juan-blue);
 }

 .pageBackground {
	background-image: url(${bg});
  	background-repeat: no-repeat;
  	background-position: 200px -600px;
 }

 .flexColumn {
	 display: flex;
	 flex-direction: column;
 }

 .linkButton {
	 font-size: 1.5rem;
	 border-radius: 50px;
	 cursor: pointer;
	 transition: all 0.3s linear;
	 background: transparent;
 }

 .checkbox-with-label {
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
 }
 
 .button {
	color: var(--water-white);
	background-color: var(--dark-pink);
	padding: 15px 45px;
	&:hover {
		background-color: var(--charm-pink);
	}
}

  .pricingButton {
      padding: 10px 25px;
      border: 1px solid var(--san-juan-blue);
      color: var(--san-juan-blue);
        &:hover {
        background-color: var(--san-juan-blue);
        color: var(--water-white);
       }
   }
 .emailInput {
    border: none;
    border-radius: 50px;
    font-size: 1.5rem;
    padding: 15px 45px;
    margin-bottom: 2rem;
    position: relative;
    &:focus {
	outline: none;
    }
  }
  .buttonEmail {
	border: none;
	color: var(--water-white);
	background-color: var(--dark-pink);
	padding: 15px 82px;
	&:hover {
		background-color: var(--charm-pink);
	}
 }
  button.pricingButton{
	margin-left: auto;
	margin-right: auto;
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
 .contactForm {
	 margin-inline: auto;
	 height: 500px;
	 justify-content: space-between;
	 align-items: center;
 }
 .contactInput {
	background: transparent;
	margin-top: 0;
	padding: 1.5rem 1.5rem;
	font-size: 1.5rem;
	width: 100%;
	min-width: 325px;
	box-sizing: border-box;
	border: 0;
	border-bottom: 1px solid var(--lightSan-juan-blue);
	&:active, &:focus {
		outline: none;
	}
 }
 @media(min-width: 500px){
	 .pageBackground{
		background-position: 300px -600px;
	 }
 }
 @media(min-width: 700px){
	.checkbox-with-label {
	 height: 3rem;
	 display: flex;
	 justify-content: center;
	 align-items: center;
 }
	.inLine {
   	 display: flex;
	 position: relative;
  	}
	.pageBackground {
		background-position: 400px -500px;
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
	.contactInput{
		min-width: 445px;
	}
 }

 @media(min-width: 1300px){
	 .pageBackground {
		background-position: 800px -600px;
	 }
	.pricingButton {
      	   padding: 10px 35px;
           font-size: 1.8rem;
           margin-left: 0;
           margin-right: auto;
        }
	.contactForm {
		width: 50%;
		height: 600px;
		align-items: flex-start;
	}
	label {
		margin-left: 0;
	}
	button.pricingButton{
	margin-left: 0;
	margin-right: auto;
  }
 }
`;

export default GlobalStyles;
