import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@utils/database';
import User from '@models/user';

const authHandlers = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],

	/**
	 * Check which user is online
	 * @param {*} param0
	 * @returns
	 */
	async session({ session }) {
		const sessionUser = await User.findOne({ email: session.user.email });

		session.user.id = sessionUser._id.toString();

		return session;
	},

	/**
	 * User Sign in
	 * @param {*} param0
	 * @returns
	 */
	async signIn({ profile }) {
		try {
			await connectToDB();

			// check if a user already exists
			const userExists = await User.findOne({ email: profile.email });

			// if not create a new user
			if (!userExists) {
				await User.create({
					email: profile.email,
					username: profile.name.replace(' ', '').toLowerCase(),
					image: profile.picture,
				});
			}

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	},
});

export { authHandlers as GET, authHandlers as POST };
