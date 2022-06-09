const settings = {
  "name": "jmksecurity-app",
  "state": {
    "frontity": {
      "url": "https://jmksecurity.net/",
      "title": "JMK Security",
      "description": "JMK SECURITY ARE TYRONE'S LEADING SECURITY & CCTV SYSTEMS SPECIALISTS IN DESIGN & INSTALLATION OF BESPOKE SECURITY & CCTV SYSTEMS THAT PROTECT HOMES, BUSINESSES & ASSETS ALL OVER IRELAND, NORTH AND SOUTH, COUNTRYWIDE. WE SPECIALISE IN CCTV TOWER HIRE AND WE ARE EXPERTS IN DOMESTIC AND COMMERCIAL CCTV SECURITY SYSTEMS INSTALLATION THROUGHOUT IRELAND AND THE UK. WE ALSO COMPLETE A WIDE VARIETY OF ELECTRICAL INSTALLATIONS AS A NICEIC APPROVED ELECTRICAL CONTRACTOR."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          "autoPrefetch": "in-view",
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.jmksecurity.net/",
          "homepage": "/homepage",
          "postsPage": "/news/"
        }
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-229077818-2",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
