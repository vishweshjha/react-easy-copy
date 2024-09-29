"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var CopyToClipboard = function (_a) {
    var text = _a.text, children = _a.children;
    var _b = (0, react_1.useState)(false), isCopied = _b[0], setIsCopied = _b[1];
    var copyToClipboard = function () {
        navigator.clipboard.writeText(text).then(function () {
            setIsCopied(true);
            setTimeout(function () { return setIsCopied(false); }, 2000);
        }, function (err) { return console.error('Failed to copy text: ', err); });
    };
    return react_1.default.createElement(react_1.default.Fragment, null, children(isCopied, copyToClipboard));
};
exports.default = CopyToClipboard;
