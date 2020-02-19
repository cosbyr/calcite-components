import{r as e,h as t,H as s,g as i}from"./p-dde25702.js";import{H as n}from"./p-f4073644.js";import{g as r}from"./p-c526d604.js";import{d as o,u as l,c as a}from"./p-6d07ea8f.js";const h=class{constructor(t){e(this,t),this.offsetDistance=o,this.offsetSkidding=0,this.open=!1,this.placement="auto",this.theme="light",this._referenceElement=this.getReferenceElement(),this.getId=()=>this.el.id||`calcite-tooltip-${r()}`,this.addReferenceAria=()=>{const{_referenceElement:e}=this;e&&!e.hasAttribute("aria-describedby")&&e.setAttribute("aria-describedby",this.getId())},this.addReferenceListeners=()=>{const{_referenceElement:e}=this;e&&(e.addEventListener("mouseenter",this.show),e.addEventListener("mouseleave",this.hide),e.addEventListener("focus",this.show),e.addEventListener("blur",this.hide))},this.removeReferenceListeners=()=>{const{_referenceElement:e}=this;e&&(e.removeEventListener("mouseenter",this.show),e.removeEventListener("mouseleave",this.hide),e.removeEventListener("focus",this.show),e.removeEventListener("blur",this.hide))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?this.createPopper():this.destroyPopper()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferenceListeners(),this._referenceElement=this.getReferenceElement(),this.addReferenceListeners(),this.addReferenceAria(),this.createPopper()}componentDidLoad(){this.addReferenceListeners(),this.addReferenceAria(),this.createPopper()}componentDidUnload(){this.removeReferenceListeners(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:s}=this,i=this.getModifiers();e?l({el:t,modifiers:i,placement:s,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:s}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[s,t]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:s,_referenceElement:i}=this,n=this.getModifiers();this.popper=a({el:e,modifiers:n,open:t,placement:s,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{_referenceElement:e,open:i}=this,r=e&&i;return t(s,{role:"tooltip",class:{[n.hydratedInvisible]:!r},"aria-hidden":r?"false":"true",id:this.getId()},t("div",{class:"arrow",ref:e=>this.arrowEl=e}),t("div",{class:"container"},t("slot",null)))}get el(){return i(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":root{--calcite-ui-blue:#007ac2;--calcite-ui-blue-hover:#2890ce;--calcite-ui-blue-press:#00619b;--calcite-ui-green:#35ac46;--calcite-ui-green-hover:#50ba5f;--calcite-ui-green-press:#288835;--calcite-ui-yellow:#edd317;--calcite-ui-yellow-hover:#f9e54e;--calcite-ui-yellow-press:#d9bc00;--calcite-ui-red:#d83020;--calcite-ui-red-hover:#e65240;--calcite-ui-red-press:#a82b1e;--calcite-ui-background:#f8f8f8;--calcite-ui-foreground:#fff;--calcite-ui-foreground-hover:#f3f3f3;--calcite-ui-foreground-press:#eaeaea;--calcite-ui-text-1:#151515;--calcite-ui-text-2:#4a4a4a;--calcite-ui-text-3:#6a6a6a;--calcite-ui-border-1:#cacaca;--calcite-ui-border-2:#dfdfdf;--calcite-ui-border-3:#eaeaea;--calcite-ui-border-hover:#9f9f9f;--calcite-ui-border-press:#757575}:host([theme=dark]){--calcite-ui-blue:#00a0ff;--calcite-ui-blue-hover:#0087d7;--calcite-ui-blue-press:#47bbff;--calcite-ui-green:#36da43;--calcite-ui-green-hover:#11ad1d;--calcite-ui-green-press:#44ed51;--calcite-ui-yellow:#ffc900;--calcite-ui-yellow-hover:#f4b000;--calcite-ui-yellow-press:#ffe24d;--calcite-ui-red:#fe583e;--calcite-ui-red-hover:#f3381b;--calcite-ui-red-press:#ff7465;--calcite-ui-background:#202020;--calcite-ui-foreground:#2b2b2b;--calcite-ui-foreground-hover:#353535;--calcite-ui-foreground-press:#404040;--calcite-ui-text-1:#fff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-hover:#757575;--calcite-ui-border-press:#9f9f9f}:root{--calcite-border-radius:3px}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}.hydrated--invisible{visibility:hidden}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]),:host([data-popper-escaped]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16)}.arrow,.arrow:before{position:absolute;width:8px;height:8px;z-index:-1}.arrow:before{content:\"\";-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.16);box-shadow:0 0 16px 0 rgba(0,0,0,.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:.8125rem;line-height:1.5}"}};export{h as calcite_tooltip};