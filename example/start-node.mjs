import * as http from "http";

import { handler as hello } from "./build/dev/javascript/vercel_gleam_runtime/dist/api/hello.mjs";
import { handler as puppiesList } from "./build/dev/javascript/vercel_gleam_runtime/dist/api/puppies/list.mjs";

const doStuff = (req) => {
	const url = new URL(req.url, "http://localhost:8000");

	if (url.pathname === "/") {
		return hello();
	}

	if (url.pathname === "/puppies/list") {
		return puppiesList();
	}

	return null;
};

http.createServer((req, res) => {
	// const domReq = new Request(req.url, {
	// 	method: req.method,
	// 	headers: req.headers,
	// });
	const domRes = doStuff(req);

	if (!domRes) {
		res.writeHead(404);
		res.end("Not found");
		return;
	}

	res.writeHead(domRes.status, Object.fromEntries(domRes.headers));
	res.end(domRes.body);
}).listen(8000);
