const settings = {
  "name": "jmksecurity-app",
  "state": {
    "frontity": {
      "url": "https://jmksecurity.net/",
      "title": "JMK Security",
      "description": "Bespoke security systems that protect your people, processes and assets."
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
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
