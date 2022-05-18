const settings = {
  "name": "jmksecurity-app",
  "state": {
    "frontity": {
      "url": "https://jmksecurity.net/",
      "title": "JMK Security",
      "description": "Tyrone's leading Security & CCTV Specialists in designing & fitting bespoke security & CCTV systems that protect Ireland's homes, businesses & assets."
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
