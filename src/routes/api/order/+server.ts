import type { RequestHandler } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_KEY, {
	apiVersion: '2023-10-16',
	typescript: true
});

export const GET: RequestHandler = async (context) => {
	const { params, url } = context;
	const sessionId = url.searchParams.get('id')!;

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] });

		return new Response(JSON.stringify({ session: session }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	} catch (error) {
		console.error(error);

		return new Response(JSON.stringify({ error: 'Failed to retrieve session' }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	}
};
