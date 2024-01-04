import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import type { CartItem } from '../../app';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_KEY, {
	apiVersion: '2023-10-16'
});

const store_domain = import.meta.env.VITE_STORE_DOMAIN;

const getProductPrice = async (id: string) => {
	try {
		const product = await stripe.products.retrieve(id);
		const priceId = product.default_price;
		return priceId;
	} catch (error) {
		console.log(error);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const items: CartItem[] = data.items;

	let lineItems: any = [];
	for (let item of items) {
		const price = await getProductPrice(item.id);
		lineItems.push({ price: price, quantity: item.quantity });
	}

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		allow_promotion_codes: true,
		success_url: `${store_domain}/success?id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${store_domain}/cancel`
	});

	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
