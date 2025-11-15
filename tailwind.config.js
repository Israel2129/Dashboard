/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'Lime-green': 'hsl(163, 72%, 41%)',
                red: 'hsl(356, 69%, 56%)',
                facebook: 'hsl(208, 92%, 53%)',
                twitter: 'hsl(203, 89%, 53%)',
                Yotube: 'hsl(348, 97%, 39%)',
                Toggle: 'hsl(230, 22%, 74%)',
                VeryDarkBlue: 'hsl(230, 17%, 14%)',
                VeryDarBlueTop: ' hsl(232, 19%, 15%)',
                DarkDesaturatedBlue: 'hsl(228, 28%, 20%)',
                DesaturatedBlue: 'hsl(228, 34%, 66%)',
                White: 'hsl(0, 0%, 100%)',
                VeryPaleBlue: 'hsl(225, 100%, 98%)',
                LightGrayishBlue: 'hsl(227, 47%, 96%)',
                DarkGrayishBlue: 'hsl(228, 12%, 44%)',
            },
        },
    },
    plugins: [],
}
