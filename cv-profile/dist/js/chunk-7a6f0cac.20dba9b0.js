(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a6f0cac"],{1060:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-container",{staticClass:"px-5",attrs:{fluid:""}},[i("p",{staticClass:"display-1 text-justify text-truncate",staticStyle:{color:"black"}},[e._v(" About me ")]),i("p",{staticClass:"text-justify text-sm-body-2 text-md-body-1 text-lg-body-1 text-xl-body-1 black--text"},[e._v(" A well-qualified and inspirational graduate student who can not only have a solid understanding of musical theory and aims to develop more knowledge of music composition. Anqi has excellent skills playing a range of music instruments including piano, guitar and Guzheng(Chinese traditional instrument), she likes to create background music for video games and movies. Right now, she is looking for a chance to have any intership experience become part of team in any Music department/ company studio ")]),i("v-treeview",{attrs:{items:e.items,"open-all":!0},scopedSlots:e._u([{key:"prepend",fn:function(t){var n=t.item,s=t.open;return[n.file?i("v-icon",[e._v(" "+e._s(e.files[n.file])+" ")]):i("v-icon",[e._v(" "+e._s(s?"mdi-folder-open":"mdi-folder")+" ")])]}}])})],1)],1)},s=[],a={data:function(){return{isExpand:!0,files:{address:"mdi-map-marker",time:"mdi-clock-time-one",education:" mdi-school",teaching:"mdi-human-male-board-poll ",item:"mdi-star-three-points"},items:[{id:1,name:"Experience :",children:[{id:2,name:"Senior Music Teacher",file:"teaching",children:[{id:19,name:"Liyin Private Music School (Part time) - Shenyang, LiaoNing, China",file:"address",children:[{id:22,name:"",file:"item",children:[]}]},{id:20,name:"May 2015 - Present",file:"time",children:[{id:20,name:"May 2015 - Present",children:[]}]}]},{id:3,name:"Junior Music Teacher",file:"teaching",children:[{id:23,name:"Shenyang National Music School (Part time) - Shenyang, LiaoNing, China",file:"address",children:[{id:22,name:"",file:"item",children:[]}]},{id:20,name:"May 2015 - Present",file:"time",children:[{id:20,name:"May 2015 - Present",file:"item",children:[]}]}]}]},{id:5,name:"Education :",file:"education",children:[{id:24,name:"Bachelor Degree :",file:"education",children:[{id:7,name:"Shenyang Convervatory of Music :",children:[{id:8,name:"Shenyang, Liaoning, China",file:"address",children:[{id:25,name:"Shenyang, Liaoning, China",file:"item"}]},{id:9,name:"Sep 2016 - Jun 2019",file:"time",children:[{id:26,name:"Sep 2016 - Jun 2019",file:"item"}]}]}]}]}]}},computed:{expand:function(){return this.isExpand}},methods:{expandTree:function(){return this.isExpand=!0,this.isExpand},closeTree:function(){return this.isExpand=!1,this.isExpand}}},d=a,r=i("2877"),c=i("6544"),o=i.n(c),h=i("7496"),l=i("a523"),u=i("132d"),p=i("3835"),v=i("b85c"),f=i("2909"),m=i("5530"),b=(i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("ac1f"),i("841c"),i("4de4"),i("d81d"),i("b64b"),i("159b"),i("4ec9"),i("fa9e"),i("ade3")),g=(i("caad"),i("a9e3"),i("0789")),y=i("3206"),C=i("a9ad"),O=i("58df"),S=i("80d2"),w=Object(O["a"])(C["a"],Object(y["a"])("treeview")),k={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},disablePerNode:Boolean,expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:function(e){return["leaf","independent"].includes(e)}}},j=w.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:Object(m["a"])({level:Number,item:{type:Object,default:function(){return null}},parentIsDisabled:Boolean},k),data:function(){return{hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}},computed:{disabled:function(){return Object(S["k"])(this.item,this.itemDisabled)||!this.disablePerNode&&this.parentIsDisabled&&"leaf"===this.selectionType},key:function(){return Object(S["k"])(this.item,this.itemKey)},children:function(){var e=this,t=Object(S["k"])(this.item,this.itemChildren);return t&&t.filter((function(t){return!e.treeview.isExcluded(Object(S["k"])(t,e.itemKey))}))},text:function(){return Object(S["k"])(this.item,this.itemText)},scopedProps:function(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon:function(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren:function(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created:function(){this.treeview.register(this)},beforeDestroy:function(){this.treeview.unregister(this)},methods:{checkChildren:function(){var e=this;return new Promise((function(t){if(!e.children||e.children.length||!e.loadChildren||e.hasLoaded)return t();e.isLoading=!0,t(e.loadChildren(e.item))})).then((function(){e.isLoading=!1,e.hasLoaded=!0}))},open:function(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel:function(){var e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot:function(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot:function(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent:function(){var e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle:function(){var e=this;return this.$createElement(u["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){return e.open()}))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox:function(){var e=this;return this.$createElement(u["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:function(t){t.stopPropagation(),e.isLoading||e.checkChildren().then((function(){e.$nextTick((function(){e.isSelected=!e.isSelected,e.isIndeterminate=!1,e.treeview.updateSelected(e.key,e.isSelected),e.treeview.emitSelected()}))}))}}},[this.computedIcon])},genLevel:function(e){var t=this;return Object(S["f"])(e).map((function(){return t.$createElement("div",{staticClass:"v-treeview-node__level"})}))},genNode:function(){var e=this,t=[this.genContent()];return this.selectable&&t.unshift(this.genCheckbox()),this.hasChildren?t.unshift(this.genToggle()):t.unshift.apply(t,Object(f["a"])(this.genLevel(1))),t.unshift.apply(t,Object(f["a"])(this.genLevel(this.level))),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:Object(b["a"])({},this.activeClass,this.isActive),on:{click:function(){e.openOnClick&&e.hasChildren?e.checkChildren().then(e.open):e.activatable&&!e.disabled&&(e.isActive=!e.isActive,e.treeview.updateActive(e.key,e.isActive),e.treeview.emitActive())}}}),t)},genChild:function(e,t){return this.$createElement(j,{key:Object(S["k"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,disablePerNode:this.disablePerNode,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper:function(){var e=this;if(!this.isOpen||!this.children)return null;var t=[this.children.map((function(t){return e.genChild(t,e.disabled)}))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},t)},genTransition:function(){return this.$createElement(g["a"],[this.genChildrenWrapper()])}},render:function(e){var t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}}),x=j,I=i("7560"),A=i("d9bd");function _(e,t,i){var n=Object(S["k"])(e,i);return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function E(e,t,i,n,s,a,d){if(e(t,i,s))return!0;var r=Object(S["k"])(t,a);if(r){for(var c=!1,o=0;o<r.length;o++)E(e,r[o],i,n,s,a,d)&&(c=!0);if(c)return!0}return d.add(Object(S["k"])(t,n)),!1}var P=Object(O["a"])(Object(y["b"])("treeview"),I["a"]).extend({name:"v-treeview",provide:function(){return{treeview:this}},props:Object(m["a"])({active:{type:Array,default:function(){return[]}},dense:Boolean,disabled:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:function(){return[]}},multipleActive:Boolean,open:{type:Array,default:function(){return[]}},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:function(){return[]}}},k),data:function(){return{level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}},computed:{excludedItems:function(){var e=new Set;if(!this.search)return e;for(var t=0;t<this.items.length;t++)E(this.filter||_,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler:function(){var e=this,t=Object.keys(this.nodes).map((function(t){return Object(S["k"])(e.nodes[t].item,e.itemKey)})),i=this.getKeys(this.items),n=Object(S["a"])(i,t);if(n.length||!(i.length<t.length)){n.forEach((function(t){return delete e.nodes[t]}));var s=Object(f["a"])(this.selectedCache);this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(S["h"])(s,Object(f["a"])(this.selectedCache))||this.emitSelected()}},deep:!0},active:function(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value:function(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open:function(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created:function(){var e=this,t=function(t){return e.returnObject?Object(S["k"])(t,e.itemKey):t};this.buildTree(this.items);var i,n=Object(v["a"])(this.value.map(t));try{for(n.s();!(i=n.n()).done;){var s=i.value;this.updateSelected(s,!0,!0)}}catch(c){n.e(c)}finally{n.f()}var a,d=Object(v["a"])(this.active.map(t));try{for(d.s();!(a=d.n()).done;){var r=a.value;this.updateActive(r,!0)}}catch(c){d.e(c)}finally{d.f()}},mounted:function(){var e=this;(this.$slots.prepend||this.$slots.append)&&Object(A["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((function(t){return e.updateOpen(e.returnObject?Object(S["k"])(t,e.itemKey):t,!0)})),this.emitOpen())},methods:{updateAll:function(e){var t=this;Object.keys(this.nodes).forEach((function(i){return t.updateOpen(Object(S["k"])(t.nodes[i].item,t.itemKey),e)})),this.emitOpen()},getKeys:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=0;i<e.length;i++){var n=Object(S["k"])(e[i],this.itemKey);t.push(n);var s=Object(S["k"])(e[i],this.itemChildren);s&&t.push.apply(t,Object(f["a"])(this.getKeys(s)))}return t},buildTree:function(e){for(var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;n<e.length;n++){var s,a=e[n],d=Object(S["k"])(a,this.itemKey),r=null!=(s=Object(S["k"])(a,this.itemChildren))?s:[],c=this.nodes.hasOwnProperty(d)?this.nodes[d]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},o={vnode:c.vnode,parent:i,children:r.map((function(e){return Object(S["k"])(e,t.itemKey)})),item:a};if(this.buildTree(r,d),!this.nodes.hasOwnProperty(d)&&null!==i&&this.nodes.hasOwnProperty(i)?o.isSelected=this.nodes[i].isSelected:(o.isSelected=c.isSelected,o.isIndeterminate=c.isIndeterminate),o.isActive=c.isActive,o.isOpen=c.isOpen,this.nodes[d]=o,r.length&&"independent"!==this.selectionType){var h=this.calculateState(d,this.nodes),l=h.isSelected,u=h.isIndeterminate;o.isSelected=l,o.isIndeterminate=u}!this.nodes[d].isSelected||"independent"!==this.selectionType&&0!==o.children.length||this.selectedCache.add(d),this.nodes[d].isActive&&this.activeCache.add(d),this.nodes[d].isOpen&&this.openCache.add(d),this.updateVnodeState(d)}},calculateState:function(e,t){var i=t[e].children,n=i.reduce((function(e,i){return e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e}),[0,0]),s=!!i.length&&n[0]===i.length,a=!s&&(n[0]>0||n[1]>0);return{isSelected:s,isIndeterminate:a}},emitOpen:function(){this.emitNodeCache("update:open",this.openCache)},emitSelected:function(){this.emitNodeCache("input",this.selectedCache)},emitActive:function(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache:function(e,t){var i=this;this.$emit(e,this.returnObject?Object(f["a"])(t).map((function(e){return i.nodes[e].item})):Object(f["a"])(t))},handleNodeCacheWatcher:function(e,t,i,n){var s=this;e=this.returnObject?e.map((function(e){return Object(S["k"])(e,s.itemKey)})):e;var a=Object(f["a"])(t);Object(S["h"])(a,e)||(a.forEach((function(e){return i(e,!1)})),e.forEach((function(e){return i(e,!0)})),n())},getDescendants:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.nodes[e].children;(t=i).push.apply(t,Object(f["a"])(n));for(var s=0;s<n.length;s++)i=this.getDescendants(n[s],i);return i},getParents:function(e){var t=this.nodes[e].parent,i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register:function(e){var t=Object(S["k"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister:function(e){var t=Object(S["k"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent:function(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){this.multipleActive||this.activeCache.forEach((function(e){i.nodes[e].isActive=!1,i.updateVnodeState(e),i.activeCache.delete(e)}));var n=this.nodes[e];n&&(t?this.activeCache.add(e):this.activeCache.delete(e),n.isActive=t,this.updateVnodeState(e))}},updateSelected:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.nodes.hasOwnProperty(e)){var n=new Map;if("independent"!==this.selectionType){var s,a=Object(v["a"])(this.getDescendants(e));try{for(a.s();!(s=a.n()).done;){var d=s.value;Object(S["k"])(this.nodes[d].item,this.itemDisabled)&&!i||(this.nodes[d].isSelected=t,this.nodes[d].isIndeterminate=!1,n.set(d,t))}}catch(y){a.e(y)}finally{a.f()}var r=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=r.isIndeterminate,n.set(e,t);var c,o=Object(v["a"])(this.getParents(e));try{for(o.s();!(c=o.n()).done;){var h=c.value,l=this.calculateState(h,this.nodes);this.nodes[h].isSelected=l.isSelected,this.nodes[h].isIndeterminate=l.isIndeterminate,n.set(h,l.isSelected)}}catch(y){o.e(y)}finally{o.f()}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,n.set(e,t);var u,f=Object(v["a"])(n.entries());try{for(f.s();!(u=f.n()).done;){var m=Object(p["a"])(u.value,2),b=m[0],g=m[1];this.updateVnodeState(b),"leaf"===this.selectionType&&this.isParent(b)||(!0===g?this.selectedCache.add(b):this.selectedCache.delete(b))}}catch(y){f.e(y)}finally{f.f()}}},updateOpen:function(e,t){var i=this;if(this.nodes.hasOwnProperty(e)){var n=this.nodes[e],s=Object(S["k"])(n.item,this.itemChildren);s&&!s.length&&n.vnode&&!n.vnode.hasLoaded?n.vnode.checkChildren().then((function(){return i.updateOpen(e,t)})):s&&s.length&&(n.isOpen=t,n.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))}},updateVnodeState:function(e){var t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded:function(e){return!!this.search&&this.excludedItems.has(e)}},render:function(e){var t=this,i=this.items.length?this.items.filter((function(e){return!t.isExcluded(Object(S["k"])(e,t.itemKey))})).map((function(e){var i=x.options.methods.genChild.bind(t);return i(e,t.disabled||Object(S["k"])(e,t.itemDisabled))})):this.$slots.default;return e("div",{staticClass:"v-treeview",class:Object(m["a"])({"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense},this.themeClasses)},i)}}),T=Object(r["a"])(d,n,s,!1,null,"3ef040d4",null);t["default"]=T.exports;o()(T,{VApp:h["a"],VContainer:l["a"],VIcon:u["a"],VTreeview:P})},6062:function(e,t,i){"use strict";var n=i("6d61"),s=i("6566");n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},"841c":function(e,t,i){"use strict";var n=i("c65b"),s=i("d784"),a=i("825a"),d=i("1d80"),r=i("129f"),c=i("577e"),o=i("dc4a"),h=i("14c3");s("search",(function(e,t,i){return[function(t){var i=d(this),s=void 0==t?void 0:o(t,e);return s?n(s,t,i):new RegExp(t)[e](c(i))},function(e){var n=a(this),s=c(e),d=i(t,n,s);if(d.done)return d.value;var o=n.lastIndex;r(o,0)||(n.lastIndex=0);var l=h(n,s);return r(n.lastIndex,o)||(n.lastIndex=o),null===l?-1:l.index}]}))},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=chunk-7a6f0cac.20dba9b0.js.map