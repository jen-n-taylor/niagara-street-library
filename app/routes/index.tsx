import type { LinksFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: stylesUrl}]
}

export default function IndexRoute() {
	return (
		<div>
			<h1>Books</h1>
			<nav>
				<ul>
					<li>
						<Link to="books">See Books</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}