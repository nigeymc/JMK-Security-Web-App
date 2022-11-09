const settings = {
  name: "jmksecurity-app",
  state: {
    frontity: {
      url: "https://jmksecurity.net/",
      title: "JMK Security",
      description:
        "Tyrone based JMK Security are an Irish CCTV and security systems installation business. We provide specialist security solutions including CCTV, access control, ANPR and intruder alarm systems for domestic and commercial customers throughout Northern Ireland, Ireland and the UK. We can design and install bespoke security and CCTV systems that protect homes, businesses and assets. We also offer CCTV mobile eco tower hire countrywide. As a NICEIC Approved Electrical Contractor we also complete a wide variety of electrical installations. We offer security solutions for homes, office, shop, factory and warehouse.",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
          autoPrefetch: "in-view",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wp.jmksecurity.net/",
          homepage: "/homepage",
          postsPage: "/news/",
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingIds: ["UA-229077818-2", "G-BZJDMG0RKT"],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
