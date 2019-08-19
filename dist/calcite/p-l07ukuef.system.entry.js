System.register(["./p-4546c12d.system.js","./p-bc1dd3a3.system.js","./p-f0691b49.system.js","./p-2701c14c.system.js"],function(e){"use strict";var t,i,l,r,s,n,c,o,a,h,d,u,f,p,m,v,g;return{setters:[function(e){t=e.r;i=e.c;l=e.h;r=e.H;s=e.g},function(e){n=e.S;c=e.E;o=e.L;a=e.R;h=e.U;d=e.D;u=e.H;f=e.b},function(e){p=e.a;m=e.g;v=e.n},function(e){g=e.b}],execute:function(){var y;(function(e){e["Single"]="single";e["Multi"]="multi";e["Children"]="children";e["MultiChildren"]="multi-children"})(y||(y={}));var M=e("calcite_tree",function(){function e(e){t(this,e);this.lines=false;this.root=true;this.theme="light";this.size="m";this.selectionMode=y.Single;this.calciteTreeSelect=i(this,"calciteTreeSelect",7)}e.prototype.componentWillUpdate=function(){};e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.theme=p(this.el);this.lines=e?e.lines:this.lines;this.size=e?e.size:this.size;this.selectionMode=e?e.selectionMode:this.selectionMode;this.root=e?false:true};e.prototype.render=function(){var e=m(this.el);return l(r,{tabindex:this.root?"1":undefined,dir:e,"aria-role":this.root?"tree":undefined,"aria-multiselectable":this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren},l("slot",null))};e.prototype.onFocus=function(){if(this.root){var e=this.el.querySelector("calcite-tree-item[selected]");var t=this.el.querySelector("calcite-tree-item");(e||t).focus()}};e.prototype.onClick=function(e){var t=e.target;var i=v(t.querySelectorAll("calcite-tree-item"));var l=this.selectionMode!==null&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===y.Children||this.selectionMode===y.MultiChildren));var r=e.detail.modifyCurrentSelection&&(this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren);var s=this.selectionMode===y.MultiChildren||this.selectionMode===y.Children;var n=!r&&((this.selectionMode===y.Single||this.selectionMode===y.Multi)&&i.length<=0||(this.selectionMode===y.Children||this.selectionMode===y.MultiChildren));var c=this.selectionMode===y.Children||this.selectionMode===y.MultiChildren;if(this.root){var o=[];if(l){o.push(t)}if(s){i.forEach(function(e){o.push(e)})}if(n){var a=v(this.el.querySelectorAll("calcite-tree-item[selected]"));a.forEach(function(e){if(!o.includes(e)){e.selected=false}})}if(c&&!e.detail.forceCollapse){t.expanded=true}if(r){window.getSelection().removeAllRanges()}if(r&&t.selected||s&&e.detail.forceCollapse){o.forEach(function(e){e.selected=false})}else{o.forEach(function(e){e.selected=true})}}if(this.root){e.preventDefault();e.stopPropagation()}this.calciteTreeSelect.emit({selected:v(this.el.querySelectorAll("calcite-tree-item")).filter(function(e){return e.selected})})};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}:host{display:block;outline:none;--calcite-tree-text:#404040;--calcite-tree-text-hover:#2b2b2b;--calcite-tree-line:transparent;--calcite-tree-line-hover:transparent;--calcite-tree-line-active:transparent;--calcite-tree-chevron:#bfbfbf;--calcite-tree-chevron-hover:#50a7da;--calcite-tree-chevron-active:#007ac2;--calcite-tree-indicator:#bfbfbf;--calcite-tree-indicator-hover:#50a7da;--calcite-tree-indicator-active:#007ac2;--calcite-tree-vertical-padding:0.375rem;--calcite-tree-icon-padding-start:0.375rem;--calcite-tree-icon-padding-end:0;--calcite-tree-children-indent-start:0.5rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:0.75rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:-0.875rem;--calcite-tree-line-position-end:0}:host([size=s]){--calcite-tree-vertical-padding:0.25rem;--calcite-tree-icon-padding-start:0.25rem;--calcite-tree-icon-padding-end:0;--calcite-tree-children-padding-start:0.375rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:-0.5rem;--calcite-tree-line-position-end:0}:host([theme=dark]){--calcite-tree-text:#d4d4d4;--calcite-tree-text-hover:#eaeaea;--calcite-tree-line:transparent;--calcite-tree-line-hover:transparent;--calcite-tree-line-active:transparent;--calcite-tree-chevron:#555;--calcite-tree-chevron-hover:#007ac2;--calcite-tree-chevron-active:#3db8ff;--calcite-tree-indicator:#555;--calcite-tree-indicator-hover:#007ac2;--calcite-tree-indicator-active:#3db8ff}:host([lines]){--calcite-tree-line:#d4d4d4;--calcite-tree-line-active:#007ac2;--calcite-tree-line-hover:#50a7da}:host([lines][theme=dark]){--calcite-tree-line:#404040;--calcite-tree-line-active:#3db8ff;--calcite-tree-line-hover:#007ac2}:host([dir=rtl]){--calcite-tree-icon-padding-end:0.375rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.5rem;--calcite-tree-children-padding-end:0.75rem;--calcite-tree-line-position-end:-0.875rem}:host([dir=rtl]),:host([dir=rtl][size=s]){--calcite-tree-icon-padding-start:0;--calcite-tree-children-padding-start:0;--calcite-tree-line-position-start:0}:host([dir=rtl][size=s]){--calcite-tree-icon-padding-end:0.25rem;--calcite-tree-children-padding-end:0.375rem;--calcite-tree-line-position-end:-0.5rem}:host([root]) ::slotted(calcite-tree-item){border-left:none;margin-left:0;padding-left:0}"},enumerable:true,configurable:true});return e}());var C=e("calcite_tree_item",function(){function e(e){t(this,e);this.expanded=false;this.selected=false;this.depth=-1;this.hasChildren=null;this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7)}e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");var e=this.el.closest("calcite-tree");this.selectionMode=e.selectionMode;this.depth=0;var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.render=function(){var e=m(this.el);var t=this.hasChildren?l("svg",{class:"calcite-tree-chevron",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16"},l("path",{d:g})):l("svg",{class:"calcite-tree-indicator",height:"16",width:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l("circle",{cx:"8",cy:"8",r:"3"}));return l(r,{tabindex:"1",dir:e,"aria-role":"treeitem","aria-selected":this.selected?"true":this.selectionMode===y.Multi||this.selectionMode===y.MultiChildren?"false":undefined,"aria-expanded":this.hasChildren?this.expanded?"true":"false":undefined},l("div",{class:"calcite-tree-node"},t,l("slot",null)),l("div",{class:"calcite-tree-children",role:this.hasChildren?"group":undefined},l("slot",{name:"children"})))};e.prototype.onClick=function(e){var t=e.target;var i=e.originalTarget;var l=t.parentElement===this.el||this.el===e.target;if(l&&this.hasChildren){this.expanded=!this.expanded}if(l){this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceCollapse:i&&!!i.closest("svg")})}};e.prototype.keyDownHandler=function(e){var t;switch(e.keyCode){case n:this.selected=!this.selected;e.preventDefault();e.stopPropagation();break;case c:var i=v(this.el.children).find(function(e){return e.matches("a")});if(i){i.click();this.selected=true}else{this.selected=!this.selected}e.preventDefault();e.stopPropagation();break;case o:if(this.hasChildren&&this.expanded){this.expanded=false;e.preventDefault();e.stopPropagation();break}var l=this.el.parentElement.closest("calcite-tree-item");if(l&&(!this.hasChildren||this.expanded===false)){l.focus();e.preventDefault();e.stopPropagation();break}break;case a:if(this.hasChildren&&this.expanded===false){this.expanded=true;e.preventDefault();e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case h:var r=this.el.previousElementSibling;if(r&&r.matches("calcite-tree-item")){r.focus()}break;case d:var s=this.el.nextElementSibling;if(s&&s.matches("calcite-tree-item")){s.focus()}break;case u:t=this.el.closest("calcite-tree[root]");var p=t.querySelector("calcite-tree-item");p.focus();break;case f:t=this.el.closest("calcite-tree[root]");var m=t.children[t.children.length-1];var g=v(m.children).find(function(e){return e.matches("calcite-tree")});while(g){m=g.children[t.children.length-1];g=v(m.children).find(function(e){return e.matches("calcite-tree")})}m.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}:host,calcite-tab[is-active]{display:block}:host{cursor:pointer;outline:none}::slotted(a),:host{color:var(--calcite-tree-text)}::slotted(a){font-size:.875rem;line-height:1.5;text-decoration:none}.calcite-tree-children{-webkit-transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.15s cubic-bezier(.215,.44,.42,.88),opacity .15s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;height:0;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;-webkit-transform-origin:top;transform-origin:top;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);border-left:2px solid var(--calcite-tree-line)}:host([expanded]) .calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}.calcite-tree-node{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;position:relative}.calcite-tree-node:before{content:\"\";height:100%;width:2px;background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([depth=\"1\"]) .calcite-tree-node:before{display:none}:host([selected]) .calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([selected]) .calcite-tree-node:before{background:var(--calcite-tree-line-active)}:host([selected]) .calcite-tree-node ::slotted(a){color:var(--calcite-tree-text-active)}:host([selected]) .calcite-tree-node .calcite-tree-indicator{opacity:1}:host([selected]) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-active)}:host([selected]) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-active)}.calcite-tree-node:hover,:host(:focus) .calcite-tree-node,:host([selected]) .calcite-tree-node:hover{font-weight:500;color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before,:host([selected]) .calcite-tree-node:hover:before{background:var(--calcite-tree-line-hover)}.calcite-tree-node:hover ::slotted(a),:host(:focus) .calcite-tree-node ::slotted(a),:host([selected]) .calcite-tree-node:hover ::slotted(a){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{opacity:1}.calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}.calcite-tree-chevron,.calcite-tree-indicator{-ms-flex:0 0 1rem;flex:0 0 1rem;width:1rem;height:1rem;margin-right:var(--calcite-tree-icon-padding-start);margin-left:var(--calcite-tree-icon-padding-end);margin-top:.125rem}.calcite-tree-chevron{-webkit-transition:-webkit-transform .15s cubic-bezier(.215,.44,.42,.88);transition:-webkit-transform .15s cubic-bezier(.215,.44,.42,.88);transition:transform .15s cubic-bezier(.215,.44,.42,.88);transition:transform .15s cubic-bezier(.215,.44,.42,.88),-webkit-transform .15s cubic-bezier(.215,.44,.42,.88);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host([expanded]) .calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-tree-indicator{-webkit-transition:opacity .15s cubic-bezier(.215,.44,.42,.88);transition:opacity .15s cubic-bezier(.215,.44,.42,.88);opacity:0;fill:transparent}:host([children]) .calcite-tree-indicator{opacity:0}"},enumerable:true,configurable:true});return e}())}}});