(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[2087],{1839:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return c},default:function(){return m}});var n=o(22122),r=o(19756),a=(o(15007),o(64983)),i=o(99536),s=["components"],c={},d={_frontmatter:c},p=i.Z;function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.mdx)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"run-time-architecture"},"Run time architecture"),(0,a.mdx)("p",null,"A PWA Studio storefront's runtime architecture describes how each of its pieces interact with the Adobe Commerce or Magento Open Source application after deployment.\nThe following sections describe characteristics for the runtime architecture of storefronts built using PWA Studio.\nMany of these characteristics follow the principles of ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/architecture/blob/master/design-documents/service-isolation.md"},"service isolation"),"."),(0,a.mdx)("h2",{id:"api-only-relationships"},"API-only relationships"),(0,a.mdx)("p",null,"A PWA Studio storefront application communicates with it's backend application using its external API.\nThose external API services communicate with the backend application's internal service modules and returns any results through that same external API."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"GraphQL")," is the preferred API to use for client data and store behavior.\n",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/graphql/"},"GraphQL API")," coverage increases with every Adobe Commerce and Magento Open Source release, but\nuntil full coverage is complete, developers can use the ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.3/rest/bk-rest.html"},(0,a.mdx)("strong",{parentName:"a"},"REST API"))," to fill in existing coverage gaps."),(0,a.mdx)("p",null,"To make secure, admin-authorized calls, configure the storefront's ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/upward/"},"UPWARD")," server to make the request using REST or RPC."),(0,a.mdx)("p",null,"Use ",(0,a.mdx)("strong",{parentName:"p"},"HTTPS")," when passing requests through the UPWARD server to static and media resources in the backend application."),(0,a.mdx)("h2",{id:"one-way-coupling"},"One-way coupling"),(0,a.mdx)("p",null,"The coupling between a PWA Studio storefront and it's backend application should go in one direction.\nThe storefront has a dependency on the backend, which is attached as a service, but\nthe backend application should not have a dependency on the storefront."),(0,a.mdx)("h2",{id:"decoupled-deployments"},"Decoupled deployments"),(0,a.mdx)("p",null,"A PWA Studio storefront and its backing Adobe Commerce or Magento Open Source instance should be deployed as separate instances on separate hardware.\nUsing ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/upward/"},"UPWARD")," allows you to deploy these applications using different technology stacks with the dependency configured at build-time."),(0,a.mdx)("p",null,"Another option is to deploy the storefront to the backend server directly using the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/magento/upward-php"},"PHP implementation of UPWARD"),".\nThis is a possible option if using ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/production-deployment/adobe-commerce/"},"Adobe Commerce hosted in the Cloud"),"."),(0,a.mdx)("h2",{id:"storefront-replacement-mechanism"},"Storefront replacement mechanism"),(0,a.mdx)("p",null,"A PWA Studio storefront replaces the frontend theme for the Adobe Commerce or Magento Open Source backend application."),(0,a.mdx)("p",null,"Since the coupling between the storefront and the backend application is one way, the backend does not know to direct front end traffic to the storefront.\nThis means that the frontend theme, such as Luma, is still available by connecting directly to the backend server."),(0,a.mdx)("p",null,"Use a ",(0,a.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_proxy"},"reverse proxy")," in your backend server to route incoming frontend traffic to the storefront application.\nIf you are using the ",(0,a.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/tutorials/production-deployment/adobe-commerce/"},"Cloud for Adobe Commerce")," service to also host your storefront application, then the ",(0,a.mdx)("inlineCode",{parentName:"p"},"magento-upward-connector")," module handles the frontend replacement."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-storefront-architecture-run-time-index-md-9cc902c94c87c4ab5140.js.map