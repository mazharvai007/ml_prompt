'use client';

import React, { useEffect, useState } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const response = await fetch('/api/prompt');
		const data = await response.json();

		setPosts(data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	// Filtering prompt by users input
	const promptFilter = (searchText) => {
		const regex = new RegExp(searchText, 'i');

		return posts.filter(
			(post) =>
				regex.test(post.creator.username) ||
				regex.test(post.prompt) ||
				regex.test(post.tag)
		);
	};

	const handleSearchChange = (e) => {
		clearTimeout(searchTimeout);
		setSearchText(e.target.value);

		setSearchTimeout(
			setTimeout(() => {
				const result = promptFilter(e.target.value);
				setSearchResults(result);
			}, 500)
		);
	};

	const handleTagClick = (tagName) => {
		setSearchText(tagName);

		const result = promptFilter(tagName);
		setSearchResults(result);
	};

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

			{searchText ? (
				<PromptCardList
					data={searchResults}
					handleTagClick={handleTagClick}
				/>
			) : (
				<PromptCardList data={posts} handleTagClick={handleTagClick} />
			)}
		</section>
	);
};

export default Feed;
