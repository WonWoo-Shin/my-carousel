import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root{
		--padding-width : 3em;
		--carousel-gap : 0.2vw;
		--carousel-padding : 60px;
		--arrow-color : rgba(255, 255, 255, 0.6);
		--border-radius : 4px;
		--title-height  : 2.8em;
		--title-margin : 0.5em;
		@media (max-width : 1500px){
			--carousel-padding : 4%;
		}
	}
	
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	overflow-x: hidden;
	
	&::-webkit-scrollbar{
		width: 16px;
	}
	&::-webkit-scrollbar-thumb {
    	height: 56px;
    	border-radius: 8px;
    	border: 4px solid transparent;
    	background-clip: content-box;
    	background-color: rgba(0,0,0,0.3);
	}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
	box-sizing: border-box;
}
`;
