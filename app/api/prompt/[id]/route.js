import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

/**
 * Get the prompt by ID
 * @param {*} request
 * @param {*} param1
 * @returns
 */

export const GET = async (request, { params }) => {
	try {
		await connectToDB();

		const prompt = await Prompt.findById(params.id).populate('creator');

		if (!prompt) return new Response('Prompt Not Found!', { status: 404 });

		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		return new Response('Internal Server Error', { status: 500 });
	}
};

/**
 * Edit/Update the prompt by Id
 * @param {*} request
 * @param {*} param1
 * @returns
 */

export const PATCH = async (request, { params }) => {
	const { prompt, tag } = await request.json();

	try {
		await connectToDB();

		// Find the existing prompt by ID
		const existingPrompt = await Prompt.findById(params.id);

		if (!existingPrompt) {
			return new Response('Prompt Not Found!', { status: 404 });
		}

		// Update the prompt with New Data
		existingPrompt.prompt = prompt;
		existingPrompt.tag = tag;

		// Store the updated prompt into DB
		await existingPrompt.save();

		return new Response(`This Prompt ${params.id} Updated Successfully`, {
			status: 200,
		});
	} catch (error) {
		return new Response('Error Updating Prompt', { status: 500 });
	}
};

/**
 * Delete prompt by ID
 * @param {*} request
 * @param {*} param1
 * @returns
 */

export const DELETE = async (request, { params }) => {
	try {
		await connectToDB();

		// Find the Prompt by ID and remove it
		await Prompt.findByIdAndDelete(params.id);

		return new Response(`This Prompt ${params.id} ID delete Successfully`, {
			status: 200,
		});
	} catch (error) {
		return new Response('Error Deleting Prompt', { status: 500 });
	}
};
