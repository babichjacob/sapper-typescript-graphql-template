import * as sapper from "@sapper/server";
import compression from "compression";
import express from "express";
import sirv from "sirv";
import { createApolloServer } from "./graphql/index.ts";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";


const createSapperAndApolloServer = async (graphqlPath) => {
	const app = express();

	const apolloServer = await createApolloServer();

	apolloServer.applyMiddleware({ app, path: graphqlPath });

	app.use(
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		sapper.middleware(),
	);

	return app;
};

createSapperAndApolloServer("/graphql").then((app) => {
	app.listen(PORT, (err) => {
		if (err) console.log("error", err);
	});
});

export { sapper };
