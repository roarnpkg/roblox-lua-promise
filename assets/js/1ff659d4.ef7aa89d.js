"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{57784:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var o=a(87462),i=a(63366),n=(a(67294),a(3905)),r=["components"],l={sidebar_position:2},s="Installation",d={unversionedId:"Installation",id:"Installation",isDocsHomePage:!1,title:"Installation",description:"Method 1 - Quick and Dirty",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/roblox-lua-promise/docs/Installation",editUrl:"https://github.com/evaera/roblox-lua-promise/edit/master/docs/Installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started with Promises",permalink:"/roblox-lua-promise/docs/intro"},next:{title:"Tour of Promises",permalink:"/roblox-lua-promise/docs/Tour"}},u=[{value:"Method 1 - Quick and Dirty",id:"method-1---quick-and-dirty",children:[],level:3},{value:"Method 2 - Manual",id:"method-2---manual",children:[],level:3},{value:"Method 3 - Git Submodule",id:"method-3---git-submodule",children:[],level:3},{value:"Method 4 - Package Manager",id:"method-4---package-manager",children:[],level:3},{value:"Next",id:"next",children:[],level:2}],m={toc:u};function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"method-1---quick-and-dirty"},"Method 1 - Quick and Dirty"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In Roblox Studio, select the folder where you keep your third party modules / utilities."),(0,n.kt)("li",{parentName:"ol"},"Run this in the command bar:")),(0,n.kt)("textarea",{readonly:!0,onClick:function(e){return e.target.select()},style:{width:"100%"}},'\n   local Http = game:GetService("HttpService")\n   local HttpEnabled = Http.HttpEnabled\n   Http.HttpEnabled = true\n   local m = Instance.new("ModuleScript")\n   m.Parent = game:GetService("Selection"):Get()[1] or game:GetService("ServerScriptService")\n   m.Name = "Promise"\n   m.Source = Http:GetAsync("https://raw.githubusercontent.com/evaera/roblox-lua-promise/master/lib/init.lua")\n   game:GetService("Selection"):Set({m})\n   Http.HttpEnabled = HttpEnabled\n   '),(0,n.kt)("h3",{id:"method-2---manual"},"Method 2 - Manual"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/evaera/roblox-lua-promise/releases/latest"},"latest release")),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("em",{parentName:"li"},"Assets"),", click ",(0,n.kt)("inlineCode",{parentName:"li"},"Promise.lua")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("a",{parentName:"li",href:"https://rojo.space/"},"Rojo"),"? Put the file into your game directly."),(0,n.kt)("li",{parentName:"ul"},"Using Roblox Studio? Open the file, copy its contents, and paste into a ModuleScript and call it ",(0,n.kt)("inlineCode",{parentName:"li"},"Promise"),".")))),(0,n.kt)("h3",{id:"method-3---git-submodule"},"Method 3 - Git Submodule"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Add the Promise repository as a git submodule (ideally within a folder called ",(0,n.kt)("inlineCode",{parentName:"li"},"submodules"),") (tutorial ",(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/gitaarik/8735255"},"here"),")"),(0,n.kt)("li",{parentName:"ol"},"Update your ",(0,n.kt)("a",{parentName:"li",href:"https://rojo.space/docs/6.x/project-format/"},"Rojo configuration")," to point to the appropriate path and sync the file in.")),(0,n.kt)("h3",{id:"method-4---package-manager"},"Method 4 - Package Manager"),(0,n.kt)("p",null,"Using a package manager? The repository has a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/evaera/roblox-lua-promise/blob/master/rotriever.toml"},(0,n.kt)("inlineCode",{parentName:"a"},"rotriever.toml")),"."),(0,n.kt)("h2",{id:"next"},"Next"),(0,n.kt)("p",null,"Now, check out the ",(0,n.kt)("a",{parentName:"p",href:"/api/Promise"},"API reference"),"!"))}p.isMDXComponent=!0}}]);