(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{326:function(t,n,o){},327:function(t,n,o){},360:function(t,n,o){"use strict";o(326)},361:function(t,n,o){"use strict";o(327)},367:function(t,n,o){"use strict";o.r(n);var i={name:"UButton",components:{"u-icon":o(333).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},a=(o(360),o(42)),e=Object(a.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"u-button",class:"icon-"+t.iconPosition,on:{click:function(n){return t.$emit("click")}}},[t.loading?o("u-icon",{staticClass:"icon loading",attrs:{name:t.icon}}):t._e(),t._v(" "),t.icon&&!t.loading?o("u-icon",{staticClass:"icon",attrs:{color:"dark",name:t.icon}}):t._e(),t._v(" "),o("div",{staticClass:"u-button-content"},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,r=(o(44),o(45),o(67),o(90),o(9),o(26),o(30),o(61));var u={name:"UButtonGroup",mounted:function(){var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=Object(r.a)(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,u=!0,l=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return u=t.done,t},e:function(t){l=!0,e=t},f:function(){try{u||null==o.return||o.return()}finally{if(l)throw e}}}}(this.$el.children);try{for(n.s();!(t=n.n()).done;){var o=t.value.nodeName.toLowerCase();"button"!==o&&console.warn("u-button-group 的子元素应该全是 u-button，但是你写的是 ".concat(o))}}catch(t){n.e(t)}finally{n.f()}}},l=(o(361),{components:{UButton:e,UButtonGroup:Object(a.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"u-button-group"},[this._t("default")],2)}),[],!1,null,"73129922",null).exports},data:function(){return{loading:!0}}}),s=Object(a.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h4",[t._v("基本用法")]),t._v(" "),o("u-button",[t._v("默认按钮")]),t._v(" "),o("u-button",{staticClass:"bg-yellow"},[t._v("默认按钮")]),t._v(" "),o("u-button",{staticClass:"bg-green"},[t._v("默认按钮")]),t._v(" "),o("u-button",{staticClass:"bg-cyan"},[t._v("默认按钮")]),t._v(" "),o("u-button",{staticClass:"bg-red"},[t._v("默认按钮")]),t._v(" "),o("h4",[t._v("图标按钮")]),t._v(" "),o("u-button",{staticClass:"mr",attrs:{icon:"favorite-filling"}},[t._v("图标按钮")]),t._v(" "),o("u-button",{staticClass:"bg-yellow mr",attrs:{icon:"comment-filling"}},[t._v("图标按钮")]),t._v(" "),o("u-button",{staticClass:"bg-green mr",attrs:{icon:"check-item-filling"}},[t._v("图标按钮")]),t._v(" "),o("u-button",{staticClass:"bg-cyan mr",attrs:{icon:"folder-filling"}},[t._v("图标按钮")]),t._v(" "),o("u-button",{staticClass:"bg-red",attrs:{icon:"warning-filling"}},[t._v("图标按钮")]),t._v(" "),o("h4",[t._v("按钮组")]),t._v(" "),o("u-button-group",[o("u-button",{attrs:{icon:"favorite-filling"}},[t._v("按钮组")]),t._v(" "),o("u-button",{staticClass:"bg-yellow",attrs:{icon:"comment-filling"}},[t._v("按钮组")]),t._v(" "),o("u-button",{staticClass:"bg-green",attrs:{icon:"check-item-filling"}},[t._v("按钮组")]),t._v(" "),o("u-button",{staticClass:"bg-cyan",attrs:{icon:"folder-filling"}},[t._v("按钮组")]),t._v(" "),o("u-button",{staticClass:"bg-red",attrs:{icon:"warning-filling"}},[t._v("按钮组")])],1),t._v(" "),o("h4",[t._v("特殊按钮")]),t._v(" "),o("u-button",{staticClass:"bg-cyan mr",attrs:{icon:"loading",loading:""}},[t._v("旋转按钮")]),t._v(" "),o("u-button",{staticClass:"bg-gray",attrs:{icon:"dynamic-filling",iconPosition:"right",loading:""}},[t._v("旋转按钮")])],1)}),[],!1,null,null,null);n.default=s.exports}}]);