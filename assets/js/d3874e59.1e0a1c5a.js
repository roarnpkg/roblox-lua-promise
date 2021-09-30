"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374],{16376:function(e,t,n){n.r(t),n.d(t,{HomepageFeatures:function(){return k},default:function(){return N}});var a=n(87462),r=n(63366),l=n(67294),o=n(3905),i=["components"],s={toc:[{value:"Why you should use Promises",id:"why-you-should-use-promises",children:[]},{value:"Example",id:"example",children:[]}]};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-you-should-use-promises"},"Why you should use Promises"),(0,o.kt)("p",null,"The way Roblox models asynchronous operations by default is by yielding (stopping) the thread and then resuming it when the future value is available. This model is not ideal because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Functions you call can yield without warning, or only yield sometimes, leading to unpredictable and surprising results. Accidentally yielding the thread is the source of a large class of bugs and race conditions that Roblox developers run into."),(0,o.kt)("li",{parentName:"ul"},"It is difficult to deal with running multiple asynchronous operations concurrently and then retrieve all of their values at the end without extraneous machinery."),(0,o.kt)("li",{parentName:"ul"},"When an asynchronous operation fails or an error is encountered, Lua functions usually either raise an error or return a success value followed by the actual value. Both of these methods lead to repeating the same tired patterns many times over for checking if the operation was successful."),(0,o.kt)("li",{parentName:"ul"},"Yielding lacks easy access to introspection and the ability to cancel an operation if the value is no longer needed.")),(0,o.kt)("p",null,"This Promise implementation attempts to satisfy these traits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An object that represents a unit of asynchronous work"),(0,o.kt)("li",{parentName:"ul"},"Composability"),(0,o.kt)("li",{parentName:"ul"},"Predictable timing")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise.new")," returns synchronously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'local HttpService = game:GetService("HttpService")\n\n-- A light wrapper around HttpService\n-- Ideally, you do this once per project per async method that you use.\nlocal function httpGet(url)\n    return Promise.new(function(resolve, reject)\n        local result = HttpService:JSONDecode(HttpService:GetAsync(url))\n\n        if result.ok then\n            resolve(result.data)\n        else\n            reject(result.error)\n        end\n    end)\nend\n\n-- Usage\nhttpGet("https://some-api.example")\n    :andThen(function(body)\n        print("Here\'s the web api result:", body)\n    end)\n    :catch(function(err)\n        warn("Web api encountered an error:", err)\n    end)\n')))}c.isMDXComponent=!0;var u=n(36742),m=n(52263),d=n(56698),h=n(86010),p="heroBanner_PAbV",y="buttons_2tNn",f="features_3cQC",v="featureSvg_1mXg",g=[{title:"Versatile, composable, predictable",description:"Promises model asynchronous operations in a way that makes them delightful to work with. You can easily chain together multiple async functions and you don't have to worry about accidentally yielding."},{title:"Rich API",description:"This library includes many utility functions beyond the basic functionality which make composing and creating Promises a breeze."},{title:"Cancellation",description:"On second thought, we don't want that value anymore. Promises support cancellation, which allows you to prematurely stop an async task and clean up if needed."}];function b(e){var t=e.image,n=e.title,a=e.description;return l.createElement("div",{className:(0,h.Z)("col col--4")},t&&l.createElement("div",{className:"text--center"},l.createElement("img",{className:v,alt:n,src:t})),l.createElement("div",{className:"text--center padding-horiz--md"},l.createElement("h3",null,n),l.createElement("p",null,a)))}function k(){return g?l.createElement("section",{className:f},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},g.map((function(e,t){return l.createElement(b,(0,a.Z)({key:t},e))}))))):null}function w(){var e=(0,m.Z)().siteConfig;return l.createElement("header",{className:(0,h.Z)("hero",p)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:y},l.createElement(u.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function N(){var e=(0,m.Z)(),t=e.siteConfig,n=e.tagline;return l.createElement(d.Z,{title:t.title,description:n},l.createElement(w,null),l.createElement("main",null,l.createElement(k,null),l.createElement("div",{className:"container"},l.createElement(c,null))))}}}]);