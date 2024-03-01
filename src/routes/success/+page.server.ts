import type { PageServerLoad } from './$types';
import Stripe from 'stripe';
import { error } from '@sveltejs/kit';
import { STRIPE_API_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_API_KEY, {
	apiVersion: '2023-10-16',
	typescript: true
});

export const load: PageServerLoad = async ({ url }) => {
	const sessionId = url.searchParams.get('id');
	if (!sessionId) {
		throw error(404, 'No Order Provided');
	}
	const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items']
	});
	return { checkoutSession };
};
