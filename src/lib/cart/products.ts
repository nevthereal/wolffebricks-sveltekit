import ag_main from '$lib/img/ag_front.png';
import ag_1 from '$lib/img/ag_back.png';
import ag_2 from '$lib/img/original/ig-11.png';
import ab_main from '$lib/img/ab_front.png';
import ab_1 from '$lib/img/ab_back.png';
import ab_2 from '$lib/img/original/ig-88.png';
import bs_main from '$lib/img/barc_speeder.png';
import bs_1 from '$lib/img/barc_speeder_back.png';
import bs_2 from '$lib/img/original/barc_speeder.png';
import at_main from '$lib/img/atrt.png';
import at_1 from '$lib/img/atrt_back.png';
import at_2 from '$lib/img/original/at-rt.png';
import cd_main from '$lib/img/crab_droid.png';
import cd_1 from '$lib/img/crab_droid_back.png';
import cd_2 from '$lib/img/original/crab_droid.png';
import dd_main from '$lib/img/droideka.png';
import dd_1 from '$lib/img/droideka_side.png';
import dd_2 from '$lib/img/original/droideka.png';
import rc_main from '$lib/img/rancor.png';
import rc_1 from '$lib/img/rancor_side.png';
import rc_2 from '$lib/img/original/rancor.png';

export const products = [
	{
		id: import.meta.env.VITE_PRODUCT_AG,
		slug: 'assassin-gray',
		title: 'Gray Assassin Droid',
		price: 2,
		designer: 'William',
		description:
			'The Assassin Droid is ideal for hunting bounty or serving in a gang. It offers many details and is minifigure-scaled.',
		parts: 25,
		img_main: ag_main,
		img_1: ag_1,
		img_2: ag_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_AB,
		slug: 'assassin-black',
		title: 'Black Assassin Droid',
		price: 2,
		designer: 'William',
		description:
			'The Assassin Droid is ideal for hunting bounty or serving in a gang. It offers many details and is minifigure-scaled.',
		parts: 25,
		img_main: ab_main,
		img_1: ab_1,
		img_2: ab_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_AT,
		slug: 'at-rt',
		title: 'AT-RT Walker',
		price: 5,
		designer: 'William',
		description:
			'This All-Terrain Recon Transporter is ideal for every MOC. Since it is not too big, you can build it multiple times and display or put it in your base or battle field! It is capable of holding a trooper and 2 weapons!',
		parts: 71,
		img_main: at_main,
		img_1: at_1,
		img_2: at_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_BS,
		slug: 'barc-speeder',
		title: 'BARC Speeder',
		price: 7.5,
		designer: 'William',
		description:
			'The BARC (Biker Advanced Recon Commando) Speeder are light and optimal to use them in quantity for your Mocs!',
		parts: 119,
		img_main: bs_main,
		img_1: bs_1,
		img_2: bs_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_CD,
		slug: 'crab-droid',
		title: 'Crab Droid',
		price: 2.5,
		designer: 'William',
		description:
			'The Crab Droid is an important part of the separatist droid army and was designed by the Techno-Union. It offers many details and is minifigure-scaled.',
		parts: 78,
		img_main: cd_main,
		img_1: cd_1,
		img_2: cd_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_DD,
		slug: 'droideka',
		title: 'Droideka',
		price: 3,
		designer: 'William',
		description:
			'The high-detailed and minifig-scaled Droideka served in the droid army of the Seperatists in the clone wars. You can roll him up, like in the movies.',
		parts: 35,
		img_main: dd_main,
		img_1: dd_1,
		img_2: dd_2
	},
	{
		id: import.meta.env.VITE_PRODUCT_RC,
		slug: 'rancor',
		title: 'Rancor',
		price: 20,
		designer: 'William',
		description:
			"The horrifying Rancor, inspired by Star Wars Episode VI: Return of The Jedi, is minifig-scaled and inevitable for your next Jabba's Palace Build.",
		parts: 392,
		img_main: rc_main,
		img_1: rc_1,
		img_2: rc_2
	}
];

export function getProductData(id: string) {
	const productData = products.find((product) => product.id === id);

	if (productData == undefined) {
		return undefined;
	}

	return productData;
}

export function getProductPage(slug: string) {
	const productData = products.find((product) => product.slug === slug);

	if (productData == undefined) {
		return undefined;
	}

	return productData;
}
