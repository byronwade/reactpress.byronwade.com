/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
	content: [
		    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	// All Tailwind utilities are prefixed `tw-` so they can NEVER collide with
	// WordPress admin class names (fixed=table-layout, sticky=sticky posts,
	// inline, columns-2, block, table, …). This makes adding Tailwind utilities
	// to wp-admin markup safe. App/admin Tailwind usage must use the tw- prefix;
	// modifiers go before it (e.g. hover:tw-bg-primary).
	prefix: "tw-",
	theme: {
    	extend: {
    		// WordPress admin (wp-admin) design tokens — "Fresh" scheme, WP 6.1.x.
    		// Source-verified in docs/WORDPRESS-DESIGN-SYSTEM.md. Use these when
    		// converting index.css to Tailwind so utilities hit exact WP values
    		// (real WordPress breakpoints, not Tailwind's sm/md/lg).
    		screens: {
    			'wp-sm': '600px',
    			'wp-md': '782px',
    			'wp-fold': '960px'
    		},
    		fontFamily: {
    			wp: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif']
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			wp: '3px',
    			'wp-input': '4px'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			// WordPress "Fresh" admin color scheme (verified against index.css).
    			wp: {
    				blue: '#2271b1',
    				'blue-hover': '#135e96',
    				'blue-active': '#0a4b78',
    				chrome: '#1d2327',
    				'chrome-2': '#2c3338',
    				notice: '#d63638',
    				success: '#00a32a',
    				warning: '#dba617',
    				info: '#72aee6',
    				bg: '#f0f0f1',
    				text: '#3c434a',
    				'text-muted': '#646970',
    				'text-subtle': '#50575e',
    				'menu-text': '#c3c4c7',
    				border: '#c3c4c7',
    				'border-light': '#dcdcde',
    				'border-input': '#8c8f94',
    				icon: '#a7aaad'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};