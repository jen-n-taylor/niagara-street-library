import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet } from "@remix-run/react";
import globalStylesUrl from "./styles/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Niagara Street Library",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl
    }
  ]
}


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Niagara Street Library</h1>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
