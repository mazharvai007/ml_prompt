'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Button from './Button';

const Nav = () => {
	const { data: session } = useSession();

	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		const ourProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		};

		ourProviders();
	}, []);

	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image
					src="/assets/images/logo.svg"
					width={30}
					height={30}
					alt="Promptopia Logo"
					className="object-contain"
				/>
				<p className="logo_text">PromptSave</p>
			</Link>

			{/* Desktop Nav */}
			<div className="sm:flex hidden">
				{session?.user ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-prompt" className="black_btn">
							Create Post
						</Link>
						<Button
							title="Sign Out"
							type="button"
							onClick={signOut}
							className="outline_btn"
						/>

						<Link href="/profile">
							<Image
								src={session?.user.image}
								width={34}
								height={34}
								className="rounded-full"
								alt="profile"
								onClick={() => {}}
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<Button
									key={provider.name}
									title="Sign In"
									type="button"
									onClick={() => signIn(provider.id)}
									className="black_btn"
								/>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{session?.user ? (
					<div className="flex">
						<Image
							src={session?.user.image}
							width={34}
							height={34}
							className="rounded-full"
							alt="profile"
							onClick={() => setToggleDropdown((prev) => !prev)}
						/>

						{toggleDropdown && (
							<div className="dropdown">
								<Link
									href="/profile"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									Profile
								</Link>

								<Link
									href="/create-prompt"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									Create Post
								</Link>
								<Button
									title="Sign Out"
									type="button"
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
									className="black_btn mt-5 w-full"
								/>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<Button
									key={provider.name}
									title="Sign in"
									type="button"
									onClick={() => signIn(provider.id)}
									className="black_btn"
								/>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
