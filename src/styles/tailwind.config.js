module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#EC6F4A',
            },
            fontFamily: {
                sans: ['Comic Sans MS', 'sans-serif'],
                // sans: ['Helvetica Neue', 'sans-serif'],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '0.5rem',
                    md: '2rem'
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
