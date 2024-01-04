import type { PageServerLoad } from './$types';
import Stripe from 'stripe';
import { error } from '@sveltejs/kit';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_KEY, {
	apiVersion: '2023-10-16',
	typescript: true
});

export const load: PageServerLoad = async ({ url }) => {
	let sessionId = url.searchParams.get('id');
	if (!sessionId) {
		throw error(404, 'No Order Provided');
	}
	let checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items']
	});
	return { checkoutSession };
};
