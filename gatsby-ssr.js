const React = require('react')

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  let prod = process.env.NODE_ENV === 'production'

  if (prod || pluginOptions.includeInDevelopment) {
    const scriptUrl =
      (prod ? pluginOptions.prodScriptUrl : pluginOptions.devScriptUrl) || ''
    //const dataLayerName = pluginOptions.dataLayerName || 'c';
    //const defaultDataLayer = pluginOptions.defaultDataLayer || {};
    //const dataLayer = () => {
    //  return {
    //    __html: `window.${dataLayerName} = ${JSON.stringify(
    //      defaultDataLayer
    //    )};`,
    //  };
    //}

    setHeadComponents([
      //<>
      //<script
      //  key={`gatsby-plugin-adobe-dtm-datalayer`}
      //  id={`gatsby-plugin-adobe-dtm-datalayer`}
      //  dangerouslySetInnerHTML={dataLayer()}
      ///>
      <script
        key={`gatsby-plugin-adobe-dtm`}
        id="dpal"
        src={scriptUrl}
        async
      />,
      //</>,
    ])
  }
}
