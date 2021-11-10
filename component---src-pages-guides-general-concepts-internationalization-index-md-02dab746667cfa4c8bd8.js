(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[7626],{53803:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return p}});var t=n(22122),o=n(19756),i=(n(15007),n(64983)),r=n(99536),s=["components"],l={},m={_frontmatter:l},d=r.Z;function p(e){var a=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)(d,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"internationalization"},"Internationalization"),(0,i.mdx)("p",null,"Internationalization (i18n) is a feature that lets you localize content for a culture, region, or language.\nThis feature is often associated with localization (l10n), which is the process of transforming content for a specific locale."),(0,i.mdx)("h2",{id:"internationalization-in-adobe-commerce-and-magento-open-source-versus-pwa-studio"},"Internationalization in Adobe Commerce and Magento Open Source versus PWA Studio"),(0,i.mdx)("p",null,"The Adobe Commerce and Magento Open Source applications include an i18n feature that provides translated text to the frontend theme.\nThis feature uses dictionary files inside language packages to provide translation data for the application when it renders a page.\nThe language packages themselves are extensions the application installs using Composer."),(0,i.mdx)("p",null,"For more information, see the core documentation topic: ",(0,i.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/translations/xlate.html"},"Translations overview"),"."),(0,i.mdx)("p",null,"The tight coupling between each applications' i18n feature and the frontend theme makes it difficult to use the same translation mechanisms in PWA Studio storefronts.\nInstead, PWA Studio provides its own i18n feature that follows a similar design as the one in Adobe Commerce and Magento Open Source."),(0,i.mdx)("h2",{id:"how-it-works"},"How it works"),(0,i.mdx)("p",null,"PWA Studio provides a context provider for translations called the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/App/localeProvider.js"},"LocaleProvider"),".\nThis context provider contains translation data from dictionary files and supplies them to its child components."),(0,i.mdx)("p",null,"The i18n feature in PWA Studio is an implementation of the ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/"},"react-intl")," library.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"LocaleProvider")," component in PWA Studio wraps around the library's ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/components/#intlprovider"},"IntlProvider")," and provides it with translation data."),(0,i.mdx)("p",null,"This library also provides ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/api#formatmessage"},"formatMessage()")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/components#formattedmessage"},"FormattedMessage")," to localize text in child components under ",(0,i.mdx)("inlineCode",{parentName:"p"},"LocaleProvider"),".\nYou must at least supply values for ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," and a ",(0,i.mdx)("inlineCode",{parentName:"p"},"defaultMessage")," fallback when you use either the function or component."),(0,i.mdx)("p",null,"The following code samples produce the same results:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <p className={classes.text}>\n    <FormattedMessage\n      id={"component.loremIpsum"}\n      defaultMessage={"Lorem Ipsum"}\n    />\n  </p>\n);\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const translatedText = formatMessage({\n  id: "component.loremIpsum",\n  defaultMessage: "Lorem Ipsum",\n});\n\nreturn <p className={classes.text}>{translatedText}</p>;\n')),(0,i.mdx)("p",null,"The i18n feature uses the ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," parameter to look up the localized text from the dictionary files, which the feature supplies to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LocaleProvider"),"."),(0,i.mdx)("h2",{id:"translation-dictionaries"},"Translation dictionaries"),(0,i.mdx)("p",null,"Translation dictionary files contain key/value pairs for localized text.\nPWA Studio's i18n feature uses a similar dictionary approach for translation files as Adobe Commerce and Magento Open Source, but\ninstead of a CSV format, it uses JSON."),(0,i.mdx)("h3",{id:"filename-format"},"Filename format"),(0,i.mdx)("p",null,"Dictionary files must be inside an ",(0,i.mdx)("inlineCode",{parentName:"p"},"i18n")," directory and use their target locale for their filename."),(0,i.mdx)("p",null,"Instead of the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IETF_language_tag"},"standard ISO language tag")," the filename format follow's the following convention for specifying locale:\n",(0,i.mdx)("inlineCode",{parentName:"p"},"<language id in lowercase>_<country id in uppercase>.json"),".\nFor example: ",(0,i.mdx)("inlineCode",{parentName:"p"},"en_US.json"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"en_GB.json"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"fr_FR.json"),"."),(0,i.mdx)("h3",{id:"id-formats"},"ID formats"),(0,i.mdx)("p",null,"The JSON object's keys act as unique IDs for localized text.\nThey map a placeholder string value in components to the actual rendered text."),(0,i.mdx)("p",null,"PWA Studio recommends and uses a ",(0,i.mdx)("strong",{parentName:"p"},"dot notation format")," in its components.\nThis format uses the component name and descriptor to form the ID value."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "accountMenu.orderHistoryLink": "Order History",\n  "autocomplete.resultSummary": "{resultCount} items"\n}\n')),(0,i.mdx)("p",null,"This approach helps identify which component renders the text and provides a unique value for the ID."),(0,i.mdx)("p",null,"However, the i18n feature in PWA Studio does not limit you to the dot notation format.\nFor example, in Adobe Commerce and Magento Open Source, the original ",(0,i.mdx)("inlineCode",{parentName:"p"},"en_US")," locale text identifies the translated text in the application."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "About Us": "About Us",\n  "Hi, {name}": "Hi, {name}"\n}\n')),(0,i.mdx)("p",null,"PWA Studio's i18n feature allows you to use this notation in your own components and storefront.\nBoth approach have their pros and cons, and developers are free to choose which approach works for them when they develop their own components and storefronts."),(0,i.mdx)("h3",{id:"message-syntax"},"Message syntax"),(0,i.mdx)("p",null,"The i18n feature accepts the same ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/core-concepts/icu-syntax"},"message syntax")," as the underlying ",(0,i.mdx)("inlineCode",{parentName:"p"},"react-intl")," library.\nAlong with static text, this syntax supports variables, dates, and even conditional formatting."),(0,i.mdx)("p",null,"To translate text with variables, pass in a mapping object to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"values")," prop in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"FormattedMessage")," component."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <FormattedMessage\n    id="component.greeting"\n    defaultMessage="Hi, {name}"\n    values={{\n      name: "Veronica",\n    }}\n  />\n);\n')),(0,i.mdx)("p",null,"When using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"formatMessage()")," function, pass in the mapping object as the second parameter."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const text = formatMessage(\n    { id:"component.greeting", defaultMessage="Hi, {name}"},\n    { name: currentUser.firstname }\n);\n')),(0,i.mdx)("p",null,"For more details, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://formatjs.io/docs/core-concepts/icu-syntax"},"message syntax")," documentation at FormatJS."),(0,i.mdx)("h2",{id:"language-packages-and-plugins"},"Language packages and plugins"),(0,i.mdx)("p",null,"Language packages provide translation data for one or more locales.\nThey are also used to override the text in the same locale."),(0,i.mdx)("p",null,"Unlike the Adobe Commerce and Magento Open Source applications, which install language packages through Composer, PWA Studio storefronts install language packages as NPM dependencies."),(0,i.mdx)("p",null,"An NPM dependency is a language package if it meets the following criteria:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The package contains an intercept file"),(0,i.mdx)("li",{parentName:"ul"},"The intercept file sets the special feature ",(0,i.mdx)("inlineCode",{parentName:"li"},"i18n")," flag to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," for the package"),(0,i.mdx)("li",{parentName:"ul"},"The package contains an ",(0,i.mdx)("inlineCode",{parentName:"li"},"i18n")," directory"),(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"i18n")," directory contains a dictionary file with a locale formatted name")),(0,i.mdx)("h2",{id:"build-process"},"Build process"),(0,i.mdx)("p",null,"To optimize runtime performance, the i18n feature compiles all the translation data during the build process."),(0,i.mdx)("p",null,"The following is a high level summary of the actions the i18n feature takes to compile the translation data:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Scans all ",(0,i.mdx)("inlineCode",{parentName:"p"},"i18n")," folders within installed modules that declare ",(0,i.mdx)("inlineCode",{parentName:"p"},"i18n")," support through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"specialFeatures")," flag")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Scans the project's root directory for an ",(0,i.mdx)("inlineCode",{parentName:"p"},"i18n")," directory")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Generates an object with locales as keys that map to an array of files matching that locale")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Merges the files in the arrays to create a single dictionary object for a locale"),(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"NOTE:")," The dictionary files in the project itself are the last files merged and the final overrides for translations.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Creates a virtual module from this object that exposes a ",(0,i.mdx)("inlineCode",{parentName:"p"},"__fetchLocaleData__")," function")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Generates a dynamic import in the application for the virtual module"))),(0,i.mdx)("h2",{id:"runtime-process"},"Runtime process"),(0,i.mdx)("p",null,"During runtime, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"LocaleProvider")," component uses the ",(0,i.mdx)("inlineCode",{parentName:"p"},"__fetchLocaleData__")," function to get the correct translation data for the current locale."),(0,i.mdx)("p",null,"If a components changes the value of the current locale during runtime, the application sends a GraphQL query to verify the new value.\nEven if you install a language package plugin for a locale, you must enable the locale on the backend to use the translations in the storefront UI."),(0,i.mdx)("p",null,"For example, if you use a store switcher and you provide an ",(0,i.mdx)("inlineCode",{parentName:"p"},"i18n/fr_FR.json")," file, you must enable the French locale in the backend application to make the store switcher work."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-internationalization-index-md-02dab746667cfa4c8bd8.js.map