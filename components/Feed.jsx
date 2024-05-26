'use client';

import React, { useEffect, useState } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
	const [searchText, setSearchText] = useState('');
	const [posts, setPosts] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	const fetchPosts = async () => {
		const response = await fetch('/api/prompt');
		const data = await response.json();

		setPosts(data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const handleSearchChange = (e) => {};

	const handleTagClick = () => {};

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for a tag or a username"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input peer"
				/>
			</form>

			<PromptCardList data={posts} handleTagClick={handleTagClick} />
		</section>
	);
};

export default Feed;
