/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import { Small, MetaList } from '../components';

export const Striped = styled.div`
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-direction: column;
		background: linear-gradient(
			  90deg,
			  rgba(255,255,255,0.2) 1px,
			  rgba(0,0,0,0) 1px,
			  rgba(0,0,0,0) 0),
			${p => p.theme[p.color]};
		background-size: 180px auto;

		& h1 {
			margin: 0;
		}

		& a {
			color: inherit;
		}
	}
`;

const LundegaardLink = styled.a`
	position: absolute;
	left: 50px;
	bottom: 50px;

	border-bottom-color: transparent !important;
`;

/* eslint-disable max-len */
export const Lundegaard = () => (
	<LundegaardLink href="https://lundegaard.eu">
		<svg width="100" viewBox="0 0 63 14" xmlns="http://www.w3.org/2000/svg">
			<title>lundegaard</title>
			<g fill="#ffffff">
				<path d="M61.487.689c.09 0 .14-.04.14-.107 0-.065-.05-.102-.137-.102h-.128v.21h.125z" />
				<path d="M61.362 1.046h-.13V.373h.269c.093 0 .153.017.197.059a.216.216 0 0 1 .067.156c0 .086-.044.146-.142.188l.156.27h-.147l-.14-.25h-.13v.25z" />
				<path d="M60.955.718c0 .266.228.482.508.482s.507-.216.508-.482a.496.496 0 0 0-.508-.481.497.497 0 0 0-.508.481m-.114 0c0-.326.278-.59.622-.59.343 0 .622.264.622.59 0 .327-.279.59-.622.59-.344 0-.622-.263-.622-.59M38.75 4.589h3.758V2.972H38.75zm1.74 3.49c-.255 0-.388-.114-.405-.34V7.5c0-.26.135-.389.408-.389h2.015V5.62h-2.177c-1.267 0-2.125.813-2.125 2.029v.112h.002c.044 1.162.888 1.935 2.134 1.935h2.166V8.079H40.49zm4.748 0c-.255 0-.388-.114-.405-.34V7.5c0-.26.135-.389.407-.389h1.934v.969h-1.936zm3.912-3.077c0-1.215-.86-2.03-2.126-2.03h-3.526V4.59h3.267c.272 0 .409.129.409.388v.644h-2.096c-1.266 0-2.124.812-2.124 2.028v.112h.002c.044 1.162.887 1.935 2.133 1.935h4.06V5.002zm2.792-2.04c-1.28 0-2.138.814-2.138 2.03v4.704h1.975v-4.73c0-.259.137-.388.409-.388h1.368V2.962h-1.614zM33.621 4.977c0-.26.135-.388.408-.388h1.43c.273 0 .408.129.408.388v1.672c0 .258-.135.386-.408.386H33.62V4.977zm-1.988 3.916c0 1.216.846 2.033 2.113 2.033h1.688c.273 0 .408.13.408.389v.258c-.017.226-.15.34-.406.34h-3.399v1.616h3.603c1.247 0 2.09-.773 2.135-1.935v-.128c0-1.215-.858-2.028-2.124-2.028h-1.622c-.273 0-.409-.128-.409-.387v-.397l2.084-.001c1.28 0 2.138-.815 2.138-2.03v-1.62c0-1.216-.858-2.03-2.138-2.03H33.77c-1.267 0-2.137.814-2.137 2.03v3.89zM58.2 7.692c0 .232-.11.361-.33.386h-1.509c-.273 0-.408-.128-.408-.386V4.977c0-.26.135-.389.408-.389h1.84v3.104zm0-7.565v2.845h-2.084c-1.28 0-2.138.815-2.138 2.03v2.664c0 1.216.858 2.03 2.138 2.03h1.934c1.267 0 2.125-.814 2.125-2.03V.127H58.2zm-31.54 4.85c0-.26.136-.388.408-.388h1.527c.272 0 .408.129.408.388v.581H26.66v-.581zm.408 3.103c-.272 0-.409-.13-.409-.388v-.647h4.32V5.003c0-1.216-.859-2.03-2.139-2.03h-2.03c-1.268 0-2.126.814-2.126 2.03v2.663c0 1.215.858 2.03 2.125 2.03h3.501V8.08h-3.242zM8.352 7.692c0 .258-.136.388-.408.388h-1.43c-.273 0-.409-.13-.409-.388v-4.73H4.13v4.704c0 1.216.858 2.03 2.125 2.03h1.934c1.28 0 2.139-.814 2.139-2.03V2.962H8.352v4.73zm4.608-2.726c0-.259.136-.388.408-.388h1.43c.273 0 .409.13.409.388v4.73h1.975V4.992c0-1.216-.858-2.03-2.125-2.03h-1.934c-1.28 0-2.139.814-2.139 2.03v4.704h1.975v-4.73zm9.097 3.115h-1.84c-.273 0-.409-.13-.409-.39V4.978c0-.26.136-.388.409-.388h1.84v3.49zM22.055.128v2.844h-2.084c-1.28 0-2.138.815-2.138 2.03v2.664c0 1.215.858 2.03 2.138 2.03h4.06V.127h-1.976zM0 7.668c0 1.215.858 2.03 2.139 2.03h1.57V8.08H2.383c-.273 0-.409-.13-.409-.388V.127H0v7.54z" />
			</g>
		</svg>
	</LundegaardLink>
);
/* eslint-enable max-len */

const Fronted = ({ children, ...rest }) => {
	const [
		title,
		subtitle,
		meta,
		footer,
		...restChildren
	] = React.Children.toArray(children);

	return (
		<Striped {...rest}>
			{title}
			<h2 sx={{ variant: 'styles.subtitle.secondary', pb: 3, mb: 4 }}>
				{subtitle.props.children}
			</h2>
			<MetaList>{meta.props.children}</MetaList>
			<p>
				<Small as="span">{footer.props.children}</Small>
			</p>
			<Lundegaard />

			{restChildren}
		</Striped>
	);
};

Fronted.defaultProps = {
	color: 'blue',
};

export default Fronted;
