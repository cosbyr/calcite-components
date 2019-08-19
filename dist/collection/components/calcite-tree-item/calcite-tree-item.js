import { Host, h } from "@stencil/core";
import { chevronRight16F } from "@esri/calcite-ui-icons";
import { TreeSelectionMode } from "../../interfaces/TreeSelectionMode";
import { getElementDir } from "../../utils/dom";
import { SPACE, ENTER, LEFT, RIGHT, UP, DOWN, HOME, END } from "../../utils/keys";
import { nodeListToArray } from "../../utils/dom";
export class CalciteTreeItem {
    constructor() {
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Be sure to add a jsdoc comment describing your property for the generated readme file.
         * If your property should be hidden from documentation, you can use the `@internal` tag
         */
        this.expanded = false;
        this.selected = false;
        this.depth = -1;
        this.hasChildren = null;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillRender() {
        this.hasChildren = !!this.el.querySelector("calcite-tree");
        let parentTree = this.el.closest("calcite-tree");
        this.selectionMode = parentTree.selectionMode;
        this.depth = 0;
        let nextParentTree;
        while (parentTree) {
            nextParentTree = parentTree.parentElement.closest("calcite-tree");
            if (nextParentTree === parentTree) {
                break;
            }
            else {
                parentTree = nextParentTree;
                this.depth = this.depth + 1;
            }
        }
    }
    render() {
        const dir = getElementDir(this.el);
        const icon = this.hasChildren ? (h("svg", { class: "calcite-tree-chevron", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "16", viewBox: "0 0 16 16" },
            h("path", { d: chevronRight16F }))) : (h("svg", { class: "calcite-tree-indicator", height: "16", width: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
            h("circle", { cx: "8", cy: "8", r: "3" })));
        return (h(Host, { tabindex: "1", dir: dir, "aria-role": "treeitem", "aria-selected": this.selected
                ? "true"
                : this.selectionMode === TreeSelectionMode.Multi ||
                    this.selectionMode === TreeSelectionMode.MultiChildren
                    ? "false"
                    : undefined, "aria-expanded": this.hasChildren ? (this.expanded ? "true" : "false") : undefined },
            h("div", { class: "calcite-tree-node" },
                icon,
                h("slot", null)),
            h("div", { class: "calcite-tree-children", role: this.hasChildren ? "group" : undefined },
                h("slot", { name: "children" }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick(e) {
        const target = e.target;
        const originalTarget = e.originalTarget;
        const shouldSelect = target.parentElement === this.el || this.el === e.target;
        if (shouldSelect && this.hasChildren) {
            this.expanded = !this.expanded;
        }
        if (shouldSelect) {
            this.calciteTreeItemSelect.emit({
                modifyCurrentSelection: e.shiftKey,
                forceCollapse: originalTarget && !!originalTarget.closest("svg")
            });
        }
    }
    keyDownHandler(e) {
        let root;
        switch (e.keyCode) {
            case SPACE:
                this.selected = !this.selected;
                e.preventDefault();
                e.stopPropagation();
                break;
            case ENTER:
                // activates a node, i.e., performs its default action. For parent nodes, one possible default action is to open or close the node. In single-select trees where selection does not follow focus (see note below), the default action is typically to select the focused node.
                const link = nodeListToArray(this.el.children).find(e => e.matches("a"));
                if (link) {
                    link.click();
                    this.selected = true;
                }
                else {
                    this.selected = !this.selected;
                }
                e.preventDefault();
                e.stopPropagation();
                break;
            case LEFT:
                // When focus is on an open node, closes the node.
                if (this.hasChildren && this.expanded) {
                    this.expanded = false;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
                const parentItem = this.el.parentElement.closest("calcite-tree-item");
                if (parentItem && (!this.hasChildren || this.expanded === false)) {
                    parentItem.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a root node that is also either an end node or a closed node, does nothing.
                break;
            case RIGHT:
                // When focus is on a closed node, opens the node; focus does not move.
                if (this.hasChildren && this.expanded === false) {
                    this.expanded = true;
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
                // When focus is on a open node, moves focus to the first child node.
                if (this.hasChildren && this.expanded) {
                    this.el.querySelector("calcite-tree-item").focus();
                    break;
                }
                // When focus is on an end node, does nothing.
                break;
            case UP:
                const previous = this.el
                    .previousElementSibling;
                if (previous && previous.matches("calcite-tree-item")) {
                    previous.focus();
                }
                break;
            case DOWN:
                const next = this.el.nextElementSibling;
                if (next && next.matches("calcite-tree-item")) {
                    next.focus();
                }
                break;
            case HOME:
                root = this.el.closest("calcite-tree[root]");
                const firstNode = root.querySelector("calcite-tree-item");
                firstNode.focus();
                break;
            case END:
                root = this.el.closest("calcite-tree[root]");
                let currentNode = root.children[root.children.length - 1]; // last child
                let currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                while (currentTree) {
                    currentNode = currentTree.children[root.children.length - 1];
                    currentTree = nodeListToArray(currentNode.children).find(e => e.matches("calcite-tree"));
                }
                currentNode.focus();
                break;
        }
    }
    static get is() { return "calcite-tree-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-tree-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-tree-item.css"]
    }; }
    static get properties() { return {
        "expanded": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Be sure to add a jsdoc comment describing your property for the generated readme file.\nIf your property should be hidden from documentation, you can use the `@internal` tag"
            },
            "attribute": "expanded",
            "reflect": true,
            "defaultValue": "false"
        },
        "selected": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "selected",
            "reflect": true,
            "defaultValue": "false"
        },
        "depth": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "depth",
            "reflect": true,
            "defaultValue": "-1"
        },
        "hasChildren": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "has-children",
            "reflect": true,
            "defaultValue": "null"
        }
    }; }
    static get states() { return {
        "selectionMode": {}
    }; }
    static get events() { return [{
            "method": "calciteTreeItemSelect",
            "name": "calciteTreeItemSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "TreeItemSelectDetail",
                "resolved": "TreeItemSelectDetail",
                "references": {
                    "TreeItemSelectDetail": {
                        "location": "import",
                        "path": "../../interfaces/TreeItemSelect"
                    }
                }
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "click",
            "method": "onClick",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "keyDownHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}