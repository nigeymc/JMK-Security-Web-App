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
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp.jmksecurity.net/",
          "homepage": "/homepage",
          "postsPage": "/news"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
