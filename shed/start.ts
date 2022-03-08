import { serve } from "https://deno.land/std@0.128.0/http/server.ts";

import { handler as hello } from "./build/dev/javascript/vercel_gleam_runtime/dist/hello.mjs";
import { handler as puppiesList } from "./build/dev/javascript/vercel_gleam_runtime/dist/puppies/list.mjs";

await serve(
	(req) => {
		const url = new URL(req.url);

		if (url.pathname === "/") {
			const gleamResp = hello();

			return new Response(gleamResp.body, {
				status: gleamResp.status,
				headers: Object.fromEntries(gleamResp.headers),
			});
		}

		if (url.pathname === "/puppies/list") {
			const gleamResp = puppiesList();

			return new Response(gleamResp.body, {
				status: gleamResp.status,
				headers: Object.fromEntries(gleamResp.headers),
			});
		}

		return new Response("Not found", { status: 404 });
	},
	{ port: 8000 },
);

console.log("http://localhost:8000/");
