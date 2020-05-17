import * as sapper from "@sapper/server";
import compression from "compression";
import sirv from "sirv";
import { createApolloServerExpress } from "./graphql/index.ts";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";


const createSapperAndApolloServer = async () => {
	const app = await createApolloServerExpress();

	app.use(
		compression({ threshold: 0 }),
		sirv("static", { dev: true }),
		sapper.middleware(),
	);

	return app;
};

createSapperAndApolloServer().then((app) => {
	app.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
});

export { createSapperAndApolloServer, sapper };
