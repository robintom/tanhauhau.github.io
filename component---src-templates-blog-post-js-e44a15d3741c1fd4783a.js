(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{192:function(t,e,a){"use strict";a.r(e);a(20);var n=a(0),r=a.n(n),i=a(195),o=a(197),l=(a(29),a(219)),s=a(202),c=a.n(s);var u=function(t){var e=t.siteLanguage,a=void 0===e?"en":e,n=t.meta,i=void 0===n?[]:n,o=t.title,s=t.description,u=t.image,m=t.twitterImage,p=t.url,d=t.post,h=l.data,g=h.site,f=h.file.publicURL,y=s||g.siteMetadata.description,b=""+g.siteMetadata.siteUrl+(m||u||f),E=d.tags?d.tags.split(","):[];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+g.siteMetadata.title,meta:[{name:"description",content:y},{name:"image",content:b},{property:"og:image",content:b},{property:"og:title",content:o},{property:"og:description",content:y},{property:"og:type",content:"website"},{name:"twitter:site",content:"@lihautan"},{name:"twitter:card",content:m?"summary_large_image":"summary"},{name:"twitter:creator",content:g.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:y},{name:"twitter:image",content:b}].concat(E.length>0?{name:"keywords",content:E.join(", ")}:[]).concat(i)}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:g.siteMetadata.author},copyrightHolder:{"@type":"Person",name:g.siteMetadata.author},copyrightYear:"2019",creator:{"@type":"Person",name:g.siteMetadata.author},publisher:{"@type":"Organization",name:g.siteMetadata.author,logo:{"@type":"ImageObject",url:f}},datePublished:d.date,dateModified:d.lastUpdated||d.date,description:y,headline:o,inLanguage:a,url:g.siteMetadata.siteUrl+"/"+p,name:o,image:{"@type":"ImageObject",url:b},mainEntityOfPage:g.siteMetadata.siteUrl+"/"+p})),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:[{"@type":"ListItem",item:{"@id":g.siteMetadata.siteUrl,name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":g.siteMetadata.siteUrl+"/"+p,name:o},position:2}]})))},m=a(203),p=a(194);a.d(e,"pageQuery",function(){return h});var d=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,l=a.next,s=a.heroImageUrl,c=a.heroTwitterImageUrl,d=t.fields.wip;return r.a.createElement(o.a,{location:this.props.location,title:e},r.a.createElement(u,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,image:s,twitterImage:c,url:t.fields.slug,post:t.frontmatter}),r.a.createElement("h1",null,d?"WIP: ":null,t.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-.5)})},t.frontmatter.date,t.frontmatter.lastUpdated&&r.a.createElement("span",{style:{fontStyle:"italic",marginLeft:Object(p.a)(.2)}},"(Last updated: ",t.frontmatter.lastUpdated,")")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement(m.a,{url:this.props.location.href}),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(i.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,l&&r.a.createElement(i.a,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →"))))},n}(r.a.Component),h=(e.default=d,"1450996661")},193:function(t,e,a){var n;t.exports=(n=a(196))&&n.default||n},194:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return c});var n=a(200),r=a.n(n),i=a(201),o=a.n(i);a(180);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"},li:{marginBottom:0},"li > p":{marginBottom:0},"li > ul":{marginTop:0}}};var l=new r.a(o.a);var s=l.rhythm,c=l.scale},195:function(t,e,a){"use strict";a.d(e,"b",function(){return m});var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(59),s=a.n(l);a.d(e,"a",function(){return s.a});a(193);var c=r.a.createContext({});function u(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,o=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(c.Consumer,null,function(t){return r.a.createElement(u,{data:e,query:a,render:n||i,staticQueryData:t})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},196:function(t,e,a){"use strict";a.r(e);a(20);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=a(85),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},197:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(195),o=a(194);var l=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,l=e.children;return t="/"===a.pathname?null:r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement("main",null,l),r.a.createElement("footer",{style:{marginTop:Object(o.a)(2)}},"Built with ",r.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",r.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",r.a.createElement(i.a,{to:"/notes"},"notes")," • ",r.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},n}(r.a.Component);e.a=l},203:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a(0),r=a.n(n),i=a(194);function o(t){var e=t.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{style:{marginBottom:Object(i.a)(1)}}),r.a.createElement("p",null,"Thank you for your time reading through this article.",r.a.createElement("br",null),"It means a lot to me."),r.a.createElement("p",null," If you like what you have just read,",r.a.createElement("br",null),r.a.createElement("a",{href:l(e)},"Tweet about it")," so I will write more related articles;",r.a.createElement("br",null),"If you disagree or you have opinions about this article,",r.a.createElement("br",null),r.a.createElement("a",{href:s(e)},"Tweet about it too")," so I can take your suggestions and improve on it."))}function l(t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent("Insightful article from @lihautan")+"&url="+t}function s(t){return"https://twitter.com/intent/tweet?text="+encodeURIComponent("I disgree with @lihautan's article")+"&url="+t}},219:function(t){t.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau",siteUrl:"https://lihautan.com"}},file:{publicURL:"/static/profile-pic-65797d16af424cddbffebd0e19ab2f56.png"}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e44a15d3741c1fd4783a.js.map