import discord from "../../../config/discord";
import database from "../../../config/database";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	providers: [
		Providers.Discord({
			scope: "identify email guilds",
			clientId: discord.oAuth2.ClientID,
			clientSecret: discord.oAuth2.ClientSecret
		})
	],

	callbacks: {
		session: (session, user) => {
			session.user.id = user.id;
			return session;
		}
	},

	database: database.address,
	secret: "test"
});
