import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './core-26bd2899.js';
import { S as SPACE, E as ENTER, c as ESCAPE, T as TAB, D as DOWN, U as UP, H as HOME, b as END } from './keys-6415f679.js';
import { g as guid } from './guid-3edb1b93.js';
import { g as getElementDir, a as getElementTheme, b as getElementProp } from './dom-73b84262.js';
import { c as createProviderConsumer } from './index-df72ec0c.js';
var CalciteDropdown = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdrown, defaults to left */
        this.alignment = "left";
        /** specify the alignment of dropdrown, defaults to left */
        this.theme = "light";
        /** specify the scale of dropdrown, defaults to m */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        /** unique id for dropdown */
        /** @internal */
        this.dropdownId = "calcite-dropdown-" + guid();
        this.sortItems = function (items) { return items
            .sort(function (a, b) { return a.position - b.position; })
            .concat.apply([], _this.items.map(function (item) { return item.items; })); };
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        // validate props
        var alignment = ["left", "right", "center"];
        if (!alignment.includes(this.alignment))
            this.alignment = "left";
        var theme = ["light", "dark"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    };
    class_1.prototype.componentWillUpdate = function () {
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    };
    class_1.prototype.render = function () {
        var dir = getElementDir(this.el);
        var expanded = this.active.toString();
        return (h(Host, { dir: dir, active: this.active, id: this.dropdownId }, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": expanded }), h("div", { class: "calcite-dropdown-wrapper", role: "menu" }, h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.openDropdown = function (e) {
        if (e.target.slot === "dropdown-trigger") {
            this.openCalciteDropdown();
        }
    };
    class_1.prototype.closeCalciteDropdownOnClick = function (e) {
        if (this.active && e.target.offsetParent.id !== this.dropdownId)
            this.closeCalciteDropdown();
    };
    class_1.prototype.closeCalciteDropdownOnEvent = function () {
        this.closeCalciteDropdown();
    };
    class_1.prototype.keyDownHandler = function (e) {
        if (e.target.slot === "dropdown-trigger") {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (e.keyCode) {
                    case SPACE:
                    case ENTER:
                        this.openCalciteDropdown();
                        break;
                    case ESCAPE:
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (e.keyCode === ESCAPE || (e.shiftKey && e.keyCode === TAB)) {
                this.closeCalciteDropdown();
            }
        }
    };
    class_1.prototype.calciteDropdownItemKeyEvent = function (item) {
        var e = item.detail.item;
        var isFirstItem = this.itemIndex(e.target) === 0;
        var isLastItem = this.itemIndex(e.target) === this.items.length - 1;
        switch (e.keyCode) {
            case TAB:
                if (isLastItem && !e.shiftKey)
                    this.closeCalciteDropdown();
                if (isFirstItem && e.shiftKey)
                    this.closeCalciteDropdown();
                break;
            case DOWN:
                this.focusNextItem(e.target);
                break;
            case UP:
                this.focusPrevItem(e.target);
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
        }
    };
    class_1.prototype.registerCalciteDropdownGroup = function (e) {
        var items = {
            items: e.detail.items,
            position: e.detail.position
        };
        this.items.push(items);
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.closeCalciteDropdown = function () {
        this.active = false;
    };
    class_1.prototype.focusFirstItem = function () {
        var firstItem = this.items[0];
        firstItem.focus();
    };
    class_1.prototype.focusLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        lastItem.focus();
    };
    class_1.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.items[index + 1] || this.items[0];
        nextItem.focus();
    };
    class_1.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        prevItem.focus();
    };
    class_1.prototype.itemIndex = function (e) {
        return this.items.indexOf(e);
    };
    class_1.prototype.openCalciteDropdown = function () {
        this.active = !this.active;
        this.focusFirstItem();
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}:host{--calcite-dropdown-background-color:#fff;--calcite-dropdown-border-color:#eaeaea}:host([theme=dark]){--calcite-dropdown-background-color:#2b2b2b;--calcite-dropdown-border-color:#151515}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;visibility:visible}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:auto;width:auto;width:12.5rem;background:var(--calcite-dropdown-background-color);border:1px solid var(--calcite-dropdown-border-color);-webkit-box-shadow:0 0 12px 0 rgba(0,0,0,.15);box-shadow:0 0 12px 0 rgba(0,0,0,.15)}:host([alignment=right]) .calcite-dropdown-wrapper,:host([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=right]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:0;margin-right:auto;margin-left:auto}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var DropdownInterface = createProviderConsumer({
    requestedDropdownGroup: "",
    requestedDropdownItem: ""
}, function (subscribe, child) { return (h("context-consumer", { subscribe: subscribe, renderer: child })); });
var CalciteDropdownGroup = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.requestedDropdownGroup = "";
        this.requestedDropdownItem = "";
        /** optionally set a group title for display */
        this.grouptitle = null;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** unique id for dropdown group */
        /** @internal */
        this.dropdownGroupId = "calcite-dropdown-group-" + guid();
        this.sortItems = function (items) { return items.sort(function (a, b) { return a.position - b.position; }).map(function (a) { return a.item; }); };
        this.calciteDropdownItemHasChanged = createEvent(this, "calciteDropdownItemHasChanged", 7);
        this.registerCalciteDropdownGroup = createEvent(this, "registerCalciteDropdownGroup", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_2.prototype.componentDidLoad = function () {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.registerCalciteDropdownGroup.emit({
            items: this.items,
            position: this.groupPosition
        });
    };
    class_2.prototype.render = function () {
        var theme = getElementTheme(this.el);
        var scale = getElementProp(this.el, "scale", "m");
        var dropdownState = {
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem
        };
        var grouptitle = this.grouptitle ? (h("span", { class: "dropdown-title" }, this.grouptitle)) : null;
        return (h(Host, { theme: theme, scale: scale, id: this.dropdownGroupId }, grouptitle, h(DropdownInterface.Provider, { state: dropdownState }, h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_2.prototype.updateActiveItemOnChange = function (event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemHasChanged.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem
        });
    };
    class_2.prototype.registerCalciteDropdownItem = function (e) {
        var item = {
            item: e.detail.item,
            position: e.detail.position
        };
        this.items.push(item);
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_2.prototype.getGroupPosition = function () {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}:host{--calcite-dropdown-group-color:#404040;--calcite-dropdown-group-border-color:#eaeaea}:host([theme=dark]){--calcite-dropdown-group-color:#fff;--calcite-dropdown-group-border-color:#404040}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-dropdown-group-border-color);color:var(--calcite-dropdown-group-color);font-weight:600;word-wrap:break-word;cursor:default;font-size:.875rem;line-height:1.5}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var CalciteDropdownItem = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** @internal */
        this.requestedDropdownGroup = "";
        /** @internal */
        this.requestedDropdownItem = "";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** unique id for dropdown item */
        /** @internal */
        this.dropdownItemId = "calcite-dropdown-item-" + guid();
        /** id of containing group */
        /** @internal */
        this.currentDropdownGroup = this.el.parentElement.id;
        this.calciteDropdownItemSelected = createEvent(this, "calciteDropdownItemSelected", 7);
        this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.closeCalciteDropdown = createEvent(this, "closeCalciteDropdown", 7);
        this.registerCalciteDropdownItem = createEvent(this, "registerCalciteDropdownItem", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_3.prototype.componentDidLoad = function () {
        this.currentDropdownGroup = this.el.parentElement.id;
        this.itemPosition = this.getItemPosition();
        this.registerCalciteDropdownItem.emit({
            item: this.el,
            position: this.itemPosition
        });
    };
    class_3.prototype.componentDidUpdate = function () {
        this.determineActiveItem();
    };
    class_3.prototype.render = function () {
        var dir = getElementDir(this.el);
        var theme = getElementTheme(this.el);
        var scale = getElementProp(this.el, "scale", "m");
        var selected = this.active ? "true" : null;
        return (h(Host, { theme: theme, dir: dir, scale: scale, id: this.dropdownItemId, tabindex: "0", role: "menuitem", "aria-selected": selected }, h("slot", null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_3.prototype.onClick = function (e) {
        this.emitRequestedItem(e);
    };
    class_3.prototype.keyDownHandler = function (e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.emitRequestedItem(e);
                break;
            case ESCAPE:
                this.closeCalciteDropdown.emit();
                break;
            case TAB:
            case UP:
            case DOWN:
            case HOME:
            case END:
                this.calciteDropdownItemKeyEvent.emit({ item: e });
                break;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_3.prototype.determineActiveItem = function () {
        if (this.requestedDropdownItem === this.dropdownItemId) {
            this.active = true;
        }
        else if (this.requestedDropdownGroup === this.currentDropdownGroup) {
            this.active = false;
        }
    };
    class_3.prototype.emitRequestedItem = function (e) {
        this.calciteDropdownItemSelected.emit({
            requestedDropdownItem: e.target.id,
            requestedDropdownGroup: e.target.parentElement.id
        });
        this.closeCalciteDropdown.emit();
    };
    class_3.prototype.getItemPosition = function () {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-item"), this.el);
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return "\@charset \"UTF-8\";body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}:host{--calcite-dropdown-item-color:#6a6a6a;--calcite-dropdown-item-color-hover:#555;--calcite-dropdown-item-color-active:#404040;--calcite-dropdown-item-background-color-hover:#f3f3f3;--calcite-dropdown-item-background-color-pressed:#eaeaea;--calcite-dropdown-item-dot-active-color:#007ac2}:host([theme=dark]){--calcite-dropdown-item-color:#d4d4d4;--calcite-dropdown-item-color-hover:#eaeaea;--calcite-dropdown-item-color-active:#fff;--calcite-dropdown-item-background-color-hover:#202020;--calcite-dropdown-item-background-color-pressed:#151515;--calcite-dropdown-item-dot-active-color:#3db8ff}:host([scale=s]){--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host{display:block;font-size:.875rem;line-height:1.5;color:var(--calcite-dropdown-item-color);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;position:relative}:host(:active),:host(:focus),:host(:hover){background-color:var(--calcite-dropdown-item-background-color-hover);color:var(--calcite-dropdown-item-color-hover);text-decoration:none}:host(:active){background-color:var(--calcite-dropdown-item-background-color-pressed)}:host:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:grey;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}:host(:active):before,:host(:focus):before,:host(:hover):before{opacity:1}:host([dir=rtl]){padding:.5rem 2.25rem .5rem 1rem}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]){color:var(--calcite-dropdown-item-color-active);font-weight:500}:host([active]):before{opacity:1;color:var(--calcite-dropdown-item-dot-active-color)}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
//--------------------------------------------------------------------------
//
//  Inject Props
//
//--------------------------------------------------------------------------
DropdownInterface.injectProps(CalciteDropdownItem, [
    "requestedDropdownItem",
    "requestedDropdownGroup"
]);
export { CalciteDropdown as calcite_dropdown, CalciteDropdownGroup as calcite_dropdown_group, CalciteDropdownItem as calcite_dropdown_item };