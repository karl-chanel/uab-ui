(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{403:function(i,e,l){},439:function(i,e,l){"use strict";l(403)},453:function(i,e,l){"use strict";l.r(e);l(397);var t={components:{UIcon:l(347).a},data:function(){return{text:!1,timer:null,icons:["column-4","add","add-circle","adjust","arrow-up-circle","arrow-right-circle","arrow-down","ashbin","arrow-right","browse","bottom","back","bad","arrow-double-left","arrow-left-circle","arrow-double-right","caps-lock","camera","chart-bar","attachment","code","close","check-item","calendar","comment","column-vertical","column-horizontal","complete","chart-pie","cry","customer-service","delete","direction-down","copy","cut","data-view","direction-down-circle","direction-right","direction-up","discount","direction-left","download","electronics","drag","elipsis","export","explain","edit","eye-close","email","error","favorite","file-common","file-delete","file-add","film","fabulous","file","folder-close","filter","good","hide","home","history","file-open","forward","import","image-text","keyboard-26","keyboard-9","link","layout","fullscreen-shrink","layers","lock","fullscreen-expand","map","meh","menu","loading","help","minus-circle","modular","notification","mic","more","pad","operation","play","print","mobile-phone","minus","navigation","pdf","prompt","move","refresh","run-up","picture","run-in","pin","save","search","share","scanning","security","sign-out","select","stop","success","smile","switch","setting","survey","task","skip","text","time","telephone-out","toggle-left","toggle-right","telephone","top","unlock","user","upload","work","training","warning","zoom-in","zoom-out","add-bold","arrow-left-bold","arrow-up-bold","close-bold","arrow-down-bold","minus-bold","arrow-right-bold","select-bold","arrow-up-filling","arrow-down-filling","arrow-left-filling","arrow-right-filling","caps-unlock-filling","comment-filling","check-item-filling","clock-filling","delete-filling","decline-filling","dynamic-filling","intermediate-filling","favorite-filling","layout-filling","help-filling","history-filling","filter-filling","file-common-filling","news-filling","edit-filling","fullscreen-expand-filling","smile-filling","rise-filling","picture-filling","notification-filling","user-filling","setting-filling","switch-filling","work-filling","task-filling","success-filling","warning-filling","folder-filling","map-filling","prompt-filling","meh-filling","cry-filling","top-filling","home-filling","sorting"]}},methods:{copyText:function(i){var e=this;if("span"===i.target.localName){var l=document.getElementById("input");l.value=i.target.innerText,l.select(),document.execCommand("copy"),this.text=i.target.innerText,clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((function(){e.text=!1}),1e3)}}}},n=(l(439),l(55)),o=Object(n.a)(t,(function(){var i=this,e=i.$createElement,l=i._self._c||e;return l("div",[l("h4",[i._v("图标集合")]),i._v(" "),l("div",{staticClass:"icon-gather",on:{click:i.copyText}},i._l(i.icons,(function(e){return l("div",{staticClass:"icon-box"},[l("u-icon",{staticClass:"icon",attrs:{name:e}}),i._v(" "),l("span",[i._v(i._s(e))])],1)})),0),i._v(" "),l("textarea",{attrs:{id:"input"}}),i._v(" "),l("transition",{attrs:{name:"fade"}},[i.text?l("span",{staticClass:"copy"},[i._v("复制成功："+i._s(i.text))]):i._e()])],1)}),[],!1,null,"15e45cbb",null);e.default=o.exports}}]);