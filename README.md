# gatsby-plugin-adobe-launch

Easily add Adobe DTM to your Gatsby site. Uses a Adobe Launch direct call with the event name `gatsbyRouteChange` by default,
to log a page view.

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-adobe-launch',
    options: {
      scriptUrl: 'YOUR_ADOBE_LAUNCH_SCRIPT_URL',

      // Include Adobe Launch in development.
      // Defaults to false meaning Launch will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before DTM is loaded
      defaultDataLayer: { platform: 'gatsby' },

      dataLayerName: 'YOUR_DATA_LAYER_NAME',
      // defaults to gatsbyRouteChange
      routeChangeEventName: 'gatsbyRouteChange',
    },
  },
];
```
