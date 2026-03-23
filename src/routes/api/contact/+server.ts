import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';
import { NOTION_API_KEY, NOTION_DATABASE_ID } from '$env/static/private';
import type { RequestHandler } from './$types';

const notion = new Client({ auth: NOTION_API_KEY });

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();

		const { name, email, company, phone, service, timeline, budget, description, referral } =
			data;

		if (!name || !email || !description) {
			return json({ error: 'Name, email, and description are required.' }, { status: 400 });
		}

		await notion.pages.create({
			parent: { database_id: NOTION_DATABASE_ID },
			properties: {
				Name: {
					title: [{ text: { content: name } }]
				},
				Email: {
					email: email
				},
				Company: {
					rich_text: [{ text: { content: company || '' } }]
				},
				Phone: {
					phone_number: phone || null
				},
				Service: {
					rich_text: [{ text: { content: service || '' } }]
				},
				Timeline: {
					rich_text: [{ text: { content: timeline || '' } }]
				},
				Budget: {
					rich_text: [{ text: { content: budget || '' } }]
				},
				Description: {
					rich_text: [{ text: { content: description } }]
				},
				Referral: {
					rich_text: [{ text: { content: referral || '' } }]
				}
			}
		});

		return json({ success: true });
	} catch (err) {
		console.error('Notion API error:', err);
		return json({ error: 'Failed to submit form. Please try again.' }, { status: 500 });
	}
};
