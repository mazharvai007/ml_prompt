import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@utils/database';
import User from '@models/user';

const authHandler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],

	callbacks: {
		async session({ session }) {
			// Store the user id from MongoDB to session
			const sessionUser = await User.findOne({
				email: session.user.email,
			});

			session.user.id = sessionUser._id.toString();

			return session;
		},

		async signIn({ profile }) {
			try {
				await connectToDB();

				// check if a user already exists
				const userExists = await User.findOne({
					email: profile?.email,
				});

				// if not create a new user
				if (!userExists) {
					await User.create({
						email: profile?.email,
						username: profile?.name.replace(' ', '').toLowerCase(),
						image: profile?.picture,
					});
				}

				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
	},
	session: {
		jwt: true,
	},
	cookies: {
		sessionToken: {
			name: `__Secure-next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				secure: process.env.NODE_ENV === 'production',
			},
		},
	},
});

export { authHandler as GET, authHandler as POST };
