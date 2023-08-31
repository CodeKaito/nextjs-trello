'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var solid_1 = require("@heroicons/react/20/solid");
var react_1 = require("react");
var image_1 = require("next/image");
var BoardStore_1 = require("@/store/BoardStore");
var getUrl_1 = require("@/lib/getUrl");
function TodoCard(_a) {
    var _this = this;
    var todo = _a.todo, index = _a.index, id = _a.id, innerRef = _a.innerRef, draggableProps = _a.draggableProps, dragHandleProps = _a.dragHandleProps;
    var deleteTask = BoardStore_1.useBoardStore().deleteTask;
    var _b = react_1.useState(null), imageUrl = _b[0], setImageUrl = _b[1];
    react_1.useEffect(function () {
        if (todo.image) {
            var fetchImage = function () { return __awaiter(_this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getUrl_1["default"](todo.image)];
                        case 1:
                            url = _a.sent();
                            if (url) {
                                setImageUrl(url.toString());
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchImage();
        }
    }, [todo]);
    return (React.createElement("div", __assign({ className: "bg-white rounded-md space-y-2 drop-shadow-md" }, draggableProps, dragHandleProps, { ref: innerRef }),
        React.createElement("div", { className: "flex justify-between items-center p-5" },
            React.createElement("p", null, todo.title),
            React.createElement("button", { onClick: function () { return deleteTask(index, todo, id); }, className: "text-red-500 hover:text-red-700" },
                React.createElement(solid_1.XCircleIcon, { className: "ml-5 h-8 w-8" }))),
        imageUrl && (React.createElement("div", { className: "h-full w-full rounded-b-md" },
            React.createElement(image_1["default"], { src: imageUrl, alt: "Task image", width: 400, height: 200, className: "w-full object-contain rounded-b-md" })))));
}
exports["default"] = TodoCard;
