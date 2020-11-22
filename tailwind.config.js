module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: theme => ({
        almostscreen: "90vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "50vh": "50vh",
      }),
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        "8/10": "80%",
        "7/10": "70%",
        "5/10": "50%",
        "3/10": "30%",
      },
      inset: {
        100: "100%",
        80: "80%",
        70: "70%",
        50: "50%",
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
