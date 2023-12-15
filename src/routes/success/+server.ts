import type { RequestHandler } from './$types';
import Stripe from 'stripe';

const stripe_key = import.meta.env.VITE_STRIPE_API_KEY;
const stripe = new Stripe(stripe_key, {
	apiVersion: '2023-10-16'
});
