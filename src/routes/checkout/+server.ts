import type { RequestHandler } from './$types';
import Stripe from 'stripe';
import { STRIPE_API_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_API_KEY, {
	apiVersion: '2023-10-16'
});

const getProductPrice = async (id: string) => {
	try {
		const product = await stripe.products.retrieve(id);
		const priceId = product.default_price;
		return priceId;
	} catch (error) {
		console.log(error);
	}
};

export const POST: RequestHandler = async ({ request, url }) => {
	const data = await request.json();
	const items: CartItem[] = data.items;
	const email = data.userEmail;

	const lineItems: any = [];
	for (let item of items) {
		const price = await getProductPrice(item.id);
		lineItems.push({ price: price, quantity: item.quantity });
	}

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		allow_promotion_codes: true,
		customer_email: email,
		success_url: `${url.origin}/success?id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${url.origin}/cancel`
	});

	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};
