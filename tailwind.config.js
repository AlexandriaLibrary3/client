module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary5: 'var(--color-primary5)',
        primary10: 'var(--color-primary10)',
        primary20: 'var(--color-primary20)',
        primary30: 'var(--color-primary30)',
        primary40: 'var(--color-primary40)',
        primary50: 'var(--color-primary50)',
        primary60: 'var(--color-primary60)',
        primary70: 'var(--color-primary70)',
        primary80: 'var(--color-primary80)',
        primary90: 'var(--color-primary90)',

        secondary5: 'var(--color-secondary5)',
        secondary10: 'var(--color-secondary10)',
        secondary20: 'var(--color-secondary20)',
        secondary30: 'var(--color-secondary30)',
        secondary40: 'var(--color-secondary40)',
        secondary50: 'var(--color-secondary50)',
        secondary60: 'var(--color-secondary60)',
        secondary70: 'var(--color-secondary70)',
        secondary80: 'var(--color-secondary80)',
        secondary90: 'var(--color-secondary90)',

        gray5: 'var(--color-gray5)',
        gray10: 'var(--color-gray10)',
        gray20: 'var(--color-gray20)',
        gray30: 'var(--color-gray30)',
        gray40: 'var(--color-gray40)',
        gray50: 'var(--color-gray50)',
        gray60: 'var(--color-gray60)',
        gray70: 'var(--color-gray70)',
        gray80: 'var(--color-gray80)',
        gray90: 'var(--color-gray90)',

        accent5: 'var(--color-accent5)',
        accent10: 'var(--color-accent10)',
        accent20: 'var(--color-accent20)',
        accent30: 'var(--color-accent30)',
        accent40: 'var(--color-accent40)',
        accent50: 'var(--color-accent50)',
        accent60: 'var(--color-accent60)',
        accent70: 'var(--color-accent70)',
        accent80: 'var(--color-accent80)',
        accent90: 'var(--color-accent90)',

        warning5: 'var(--color-warning5)',
        warning10: 'var(--color-warning10)',
        warning50: 'var(--color-warning50)',
        warning60: 'var(--color-warning60)',

        success5: 'var(--color-success5)',
        success10: 'var(--color-success10)',
        success50: 'var(--color-success50)',
        success60: 'var(--color-success60)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
