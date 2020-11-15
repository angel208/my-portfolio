module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: theme => ({
        almostscreen: "90vh",
      }),
      inset: {
        100: "100%",
        negative: "-1000px",
      },
      colors: {
        "main-background": "#070707",
        "secondary-background": "#1E1E1E",
        "main-text": "#F1F1F1",
        "secondary-text": "#B2B2B2",
        primary: "#FE0000",
        secondary: "#FE0000",
        banner: "#202731",
      },
      backgroundImage: theme => ({
        "angel-profile-pic": "url('/images/banner-profile-pic.png')",
        "test-img": "url('/images/background2.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}
