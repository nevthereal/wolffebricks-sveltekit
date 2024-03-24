import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const bricks: CustomThemeConfig = {
	name: 'bricks',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #3498db
		'--color-primary-50': '225 240 250', // #e1f0fa
		'--color-primary-100': '214 234 248', // #d6eaf8
		'--color-primary-200': '204 229 246', // #cce5f6
		'--color-primary-300': '174 214 241', // #aed6f1
		'--color-primary-400': '113 183 230', // #71b7e6
		'--color-primary-500': '52 152 219', // #3498db
		'--color-primary-600': '47 137 197', // #2f89c5
		'--color-primary-700': '39 114 164', // #2772a4
		'--color-primary-800': '31 91 131', // #1f5b83
		'--color-primary-900': '25 74 107', // #194a6b
		// secondary | #9b59b6
		'--color-secondary-50': '240 230 244', // #f0e6f4
		'--color-secondary-100': '235 222 240', // #ebdef0
		'--color-secondary-200': '230 214 237', // #e6d6ed
		'--color-secondary-300': '215 189 226', // #d7bde2
		'--color-secondary-400': '185 139 204', // #b98bcc
		'--color-secondary-500': '155 89 182', // #9b59b6
		'--color-secondary-600': '140 80 164', // #8c50a4
		'--color-secondary-700': '116 67 137', // #744389
		'--color-secondary-800': '93 53 109', // #5d356d
		'--color-secondary-900': '76 44 89', // #4c2c59
		// tertiary | #e67e22
		'--color-tertiary-50': '251 236 222', // #fbecde
		'--color-tertiary-100': '250 229 211', // #fae5d3
		'--color-tertiary-200': '249 223 200', // #f9dfc8
		'--color-tertiary-300': '245 203 167', // #f5cba7
		'--color-tertiary-400': '238 165 100', // #eea564
		'--color-tertiary-500': '230 126 34', // #e67e22
		'--color-tertiary-600': '207 113 31', // #cf711f
		'--color-tertiary-700': '173 95 26', // #ad5f1a
		'--color-tertiary-800': '138 76 20', // #8a4c14
		'--color-tertiary-900': '113 62 17', // #713e11
		// success | #2ecc71
		'--color-success-50': '224 247 234', // #e0f7ea
		'--color-success-100': '213 245 227', // #d5f5e3
		'--color-success-200': '203 242 220', // #cbf2dc
		'--color-success-300': '171 235 198', // #abebc6
		'--color-success-400': '109 219 156', // #6ddb9c
		'--color-success-500': '46 204 113', // #2ecc71
		'--color-success-600': '41 184 102', // #29b866
		'--color-success-700': '35 153 85', // #239955
		'--color-success-800': '28 122 68', // #1c7a44
		'--color-success-900': '23 100 55', // #176437
		// warning | #f1c40f
		'--color-warning-50': '253 246 219', // #fdf6db
		'--color-warning-100': '252 243 207', // #fcf3cf
		'--color-warning-200': '252 240 195', // #fcf0c3
		'--color-warning-300': '249 231 159', // #f9e79f
		'--color-warning-400': '245 214 87', // #f5d657
		'--color-warning-500': '241 196 15', // #f1c40f
		'--color-warning-600': '217 176 14', // #d9b00e
		'--color-warning-700': '181 147 11', // #b5930b
		'--color-warning-800': '145 118 9', // #917609
		'--color-warning-900': '118 96 7', // #766007
		// error | #e74c3c
		'--color-error-50': '251 228 226', // #fbe4e2
		'--color-error-100': '250 219 216', // #fadbd8
		'--color-error-200': '249 210 206', // #f9d2ce
		'--color-error-300': '245 183 177', // #f5b7b1
		'--color-error-400': '238 130 119', // #ee8277
		'--color-error-500': '231 76 60', // #e74c3c
		'--color-error-600': '208 68 54', // #d04436
		'--color-error-700': '173 57 45', // #ad392d
		'--color-error-800': '139 46 36', // #8b2e24
		'--color-error-900': '113 37 29', // #71251d
		// surface | #34495e
		'--color-surface-50': '225 228 231', // #e1e4e7
		'--color-surface-100': '214 219 223', // #d6dbdf
		'--color-surface-200': '204 210 215', // #ccd2d7
		'--color-surface-300': '174 182 191', // #aeb6bf
		'--color-surface-400': '113 128 142', // #71808e
		'--color-surface-500': '52 73 94', // #34495e
		'--color-surface-600': '47 66 85', // #2f4255
		'--color-surface-700': '39 55 71', // #273747
		'--color-surface-800': '31 44 56', // #1f2c38
		'--color-surface-900': '25 36 46' // #19242e
	}
};
