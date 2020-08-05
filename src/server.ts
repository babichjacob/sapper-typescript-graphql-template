import * as sapper from "@sapper/server"; // eslint-disable-line import/no-unresolved
import compression from "compression";
import express, { Express } from "express";
import sirv from "sirv";
import { createApolloServer } from "./graphql";

const PORT = process.env.PORT; // eslint-disable-line prefer-destructuring
const mode = process.env.NODE_ENV;
const dev = mode === "development";

const createSapperAndApolloServer = async (graphqlPath: string): Promise<Express> => {
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
	app.listen(PORT, (err?: any): void => { // eslint-disable-line
		if (err) console.log("error", err);
	});
});
