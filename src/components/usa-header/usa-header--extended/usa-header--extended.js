module.exports = {
  "modifier": "usa-header--extended",
  "title": "Extended header",
  "nav": {
    "menu": {
      "label": "Menu"
    },
    "aria_label": "Primary navigation",
    "items": [
      {
        "label": "<Current section>",
        "current": true,
        "id": "extended-nav-section-one",
        "subnav": [
          {
            "label": "<Navigation link>"
          },
          {
            "label": "<Navigation link>"
          },
          {
            "label": "<Navigation link>"
          },
          {
            "label": "<Navigation link>"
          }
        ]
      },
      {
        "label": "<Section>",
        "id": "extended-nav-section-two",
        "subnav": [
          {
            "label": "<Navigation link>"
          },
          {
            "label": "<Navigation link>"
          },
          {
            "label": "<Navigation link>"
          }
        ]
      },
      {
        "label": "<Simple link>"
      }
    ]
  }
}