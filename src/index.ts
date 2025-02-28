import { Elysia } from "elysia";

const app = new Elysia()
	.get("/", () => {
		return "Hello Elysia CI/CD";
	})
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
