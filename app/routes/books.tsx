import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import stylesUrl from "~/styles/books.css";

export const links: LinksFunction = () => {
	return [{rel: "stylesheet", href: stylesUrl}]
}

export default function BooksRoute() {
    return (
      <div>
        <h2>Library</h2>
        <main>
          <Outlet />
          </main>
        </div>
    )
}