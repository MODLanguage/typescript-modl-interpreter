"use strict";
exports.__esModule = true;
exports.ModlBoolNull = exports.ModlString = exports.ModlQuoted = exports.ModlNumber = exports.ModlConditionGroup = exports.ModlCondition = exports.ModlConditionTest = exports.ModlValueConditionalReturn = exports.ModlValueConditional = exports.ModlArrayConditionalReturn = exports.ModlArrayConditional = exports.ModlMapConditionalReturn = exports.ModlMapConditional = exports.ModlTopLevelConditionalReturn = exports.ModlTopLevelConditional = exports.ModlPair = exports.ModlNbArray = exports.ModlArray = exports.ModlMap = exports.Modl = void 0;
var Modl = /** @class */ (function () {
    function Modl(s) {
        this.s = s;
    }
    return Modl;
}());
exports.Modl = Modl;
var ModlMap = /** @class */ (function () {
    function ModlMap(items) {
        this.items = items;
    }
    return ModlMap;
}());
exports.ModlMap = ModlMap;
var ModlArray = /** @class */ (function () {
    function ModlArray(items) {
        this.items = items;
    }
    return ModlArray;
}());
exports.ModlArray = ModlArray;
var ModlNbArray = /** @class */ (function () {
    function ModlNbArray(items) {
        this.items = items;
    }
    return ModlNbArray;
}());
exports.ModlNbArray = ModlNbArray;
var ModlPair = /** @class */ (function () {
    function ModlPair(key, value) {
        this.key = key;
        this.value = value;
    }
    return ModlPair;
}());
exports.ModlPair = ModlPair;
var ModlTopLevelConditional = /** @class */ (function () {
    function ModlTopLevelConditional(test, ret, clauses) {
        this.test = test;
        this.ret = ret;
        this.clauses = clauses;
    }
    return ModlTopLevelConditional;
}());
exports.ModlTopLevelConditional = ModlTopLevelConditional;
var ModlTopLevelConditionalReturn = /** @class */ (function () {
    function ModlTopLevelConditionalReturn(x, xs) {
        this.x = x;
        this.xs = xs;
    }
    return ModlTopLevelConditionalReturn;
}());
exports.ModlTopLevelConditionalReturn = ModlTopLevelConditionalReturn;
var ModlMapConditional = /** @class */ (function () {
    function ModlMapConditional(test, ret, clauses) {
        this.test = test;
        this.ret = ret;
        this.clauses = clauses;
    }
    return ModlMapConditional;
}());
exports.ModlMapConditional = ModlMapConditional;
var ModlMapConditionalReturn = /** @class */ (function () {
    function ModlMapConditionalReturn(x, xs) {
        this.x = x;
        this.xs = xs;
    }
    return ModlMapConditionalReturn;
}());
exports.ModlMapConditionalReturn = ModlMapConditionalReturn;
var ModlArrayConditional = /** @class */ (function () {
    function ModlArrayConditional(test, ret, clauses) {
        this.test = test;
        this.ret = ret;
        this.clauses = clauses;
    }
    return ModlArrayConditional;
}());
exports.ModlArrayConditional = ModlArrayConditional;
var ModlArrayConditionalReturn = /** @class */ (function () {
    function ModlArrayConditionalReturn(x, xs) {
        this.x = x;
        this.xs = xs;
    }
    return ModlArrayConditionalReturn;
}());
exports.ModlArrayConditionalReturn = ModlArrayConditionalReturn;
var ModlValueConditional = /** @class */ (function () {
    function ModlValueConditional(test, clause) {
        this.test = test;
        this.clause = clause;
    }
    return ModlValueConditional;
}());
exports.ModlValueConditional = ModlValueConditional;
var ModlValueConditionalReturn = /** @class */ (function () {
    function ModlValueConditionalReturn(x, xs) {
        this.x = x;
        this.xs = xs;
    }
    return ModlValueConditionalReturn;
}());
exports.ModlValueConditionalReturn = ModlValueConditionalReturn;
var ModlConditionTest = /** @class */ (function () {
    function ModlConditionTest(invert, x, xs) {
        this.invert = invert;
        this.x = x;
        this.xs = xs;
    }
    return ModlConditionTest;
}());
exports.ModlConditionTest = ModlConditionTest;
var ModlCondition = /** @class */ (function () {
    function ModlCondition(s, op, v, vs) {
        this.s = s;
        this.op = op;
        this.v = v;
        this.vs = vs;
    }
    return ModlCondition;
}());
exports.ModlCondition = ModlCondition;
var ModlConditionGroup = /** @class */ (function () {
    function ModlConditionGroup(t, ts) {
        this.t = t;
        this.ts = ts;
    }
    return ModlConditionGroup;
}());
exports.ModlConditionGroup = ModlConditionGroup;
var ModlNumber = /** @class */ (function () {
    function ModlNumber(value) {
        this.value = value;
    }
    return ModlNumber;
}());
exports.ModlNumber = ModlNumber;
var ModlQuoted = /** @class */ (function () {
    function ModlQuoted(value) {
        this.value = value;
    }
    return ModlQuoted;
}());
exports.ModlQuoted = ModlQuoted;
var ModlString = /** @class */ (function () {
    function ModlString(value) {
        this.value = value;
    }
    return ModlString;
}());
exports.ModlString = ModlString;
var ModlBoolNull;
(function (ModlBoolNull) {
    ModlBoolNull[ModlBoolNull["ModlTrue"] = 0] = "ModlTrue";
    ModlBoolNull[ModlBoolNull["ModlFalse"] = 1] = "ModlFalse";
    ModlBoolNull[ModlBoolNull["ModlNull"] = 2] = "ModlNull";
})(ModlBoolNull = exports.ModlBoolNull || (exports.ModlBoolNull = {}));
