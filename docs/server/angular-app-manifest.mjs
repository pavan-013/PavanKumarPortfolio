
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/PavanKumarPortfolio/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5245, hash: '27086aa71f357971f36deb8f15de7d3a4894ba6e61846ed6dc92b34019103678', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1186, hash: 'df2447e374c5c167e5059281f1da5fdd87faac5147a877826f96cbe31d15a5c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2HJVGGTV.css': {size: 236136, hash: 'bv6wZRoRCak', text: () => import('./assets-chunks/styles-2HJVGGTV_css.mjs').then(m => m.default)}
  },
};
