// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { SupabaseClient, Session } from '@supabase/supabase-js';

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface Product {
	id: string;
	slug: string;
	title: string;
	price: number;
	designer: string;
	description: string;
	parts: number;
	img_main: ImageURL;
	img_1: ImageUrl;
	img_2: ImageUrl;
}

interface CartItem {
	id: string;
	quantity: number;
}

declare type ImageUrl = string;

interface CheckoutSession {
	id: string;
	object: string;
	after_expiration: null | any;
	allow_promotion_codes: boolean;
	amount_subtotal: number;
	amount_total: number;
	automatic_tax: {
		enabled: boolean;
		status: null | any;
	};
	billing_address_collection: null | any;
	cancel_url: string;
	client_reference_id: null | any;
	client_secret: null | any;
	consent: null | any;
	consent_collection: null | any;
	created: number;
	currency: string;
	currency_conversion: null | any;
	custom_fields: any[];
	custom_text: {
		after_submit: null | any;
		shipping_address: null | any;
		submit: null | any;
		terms_of_service_acceptance: null | any;
	};
	customer: null | any;
	customer_creation: string;
	customer_details: {
		address: {
			city: null | any;
			country: string;
			line1: null | any;
			line2: null | any;
			postal_code: null | any;
			state: null | any;
		};
		email: string;
		name: string;
		phone: null | any;
		tax_exempt: string;
		tax_ids: any[];
	};
	customer_email: null | any;
	expires_at: number;
	invoice: null | any;
	invoice_creation: {
		enabled: boolean;
		invoice_data: {
			account_tax_ids: null | any;
			custom_fields: null | any;
			description: null | any;
			footer: null | any;
			metadata: {};
			rendering_options: null | any;
		};
	};
	line_items: {
		object: string;
		data: {
			id: string;
			object: string;
			amount_discount: number;
			amount_subtotal: number;
			amount_tax: number;
			amount_total: number;
			currency: string;
			description: string;
			price: {
				id: string;
				object: string;
				active: boolean;
				billing_scheme: string;
				created: number;
				currency: string;
				custom_unit_amount: null | any;
				livemode: boolean;
				lookup_key: null | any;
				metadata: {};
				nickname: null | any;
				product: string;
				recurring: null | any;
				tax_behavior: string;
				tiers_mode: null | any;
				transform_quantity: null | any;
				type: string;
				unit_amount: number;
				unit_amount_decimal: string;
			};
			quantity: number;
		}[];
		has_more: boolean;
		url: string;
	};
	livemode: boolean;
	locale: null | any;
	metadata: {};
	mode: string;
	payment_intent: string;
	payment_link: null | any;
	payment_method_collection: string;
	payment_method_configuration_details: {
		id: string;
		parent: null | any;
	};
	payment_method_options: {};
	payment_method_types: string[];
	payment_status: string;
	phone_number_collection: {
		enabled: boolean;
	};
	recovered_from: null | any;
	setup_intent: null | any;
	shipping_address_collection: null | any;
	shipping_cost: null | any;
	shipping_details: null | any;
	shipping_options: any[];
	status: string;
	submit_type: null | any;
	subscription: null | any;
	success_url: string;
	total_details: {
		amount_discount: number;
		amount_shipping: number;
		amount_tax: number;
	};
	ui_mode: string;
	url: null | any;
}
