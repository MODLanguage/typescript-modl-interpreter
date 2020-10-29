import { Eq } from "fp-ts/lib/Eq";
import { Monoid } from "fp-ts/lib/Monoid";
import { Option } from "fp-ts/lib/Option";

export class Modl {
    constructor(readonly s: Array<ModlStructure>) { }
}

export type ModlStructure = ModlMap | ModlArray | ModlTopLevelConditional | ModlPair;

export class ModlMap {
    constructor(readonly items: Array<ModlMapItem>) { }
}

export class ModlArray {
    constructor(readonly items: Array<ModlArrayItem | ModlNbArray>) { }
}

export class ModlNbArray {
    constructor(readonly items: Array<ModlArrayItem>) { }
}

export class ModlPair {
    constructor(readonly key: string | ModlQuoted, readonly value: ModlValueItem | ModlMap | ModlArray) { }
}

export type ModlValueItem = ModlMap | ModlPair | ModlArray | ModlNbArray | ModlPrimitive | ModlValueConditional;

export class ModlTopLevelConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlTopLevelConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlTopLevelConditionalReturn]>) { }
}

export class ModlTopLevelConditionalReturn {
    constructor(readonly x: ModlStructure, readonly xs: Array<ModlStructure>) { }
}

export class ModlMapConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlMapConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlMapConditionalReturn]>) { }
}

export class ModlMapConditionalReturn {
    constructor(readonly x: ModlMapItem, readonly xs: Array<ModlMapItem>) { }
}

export type ModlMapItem = ModlPair | ModlMapConditional;

export class ModlArrayConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlArrayConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlArrayConditionalReturn]>) { }
}

export class ModlArrayConditionalReturn {
    constructor(readonly x: ModlArrayItem, readonly xs: Array<ModlArrayItem>) { }
}

export type ModlArrayItem = ModlArrayValueItem | ModlArrayConditional;

export class ModlValueConditional {
    constructor(readonly test: ModlConditionTest, readonly clause: Option<[ModlValueConditionalReturn, Array<[ModlConditionTest, ModlValueConditionalReturn]>, ModlValueConditionalReturn]>) { }
}

export class ModlValueConditionalReturn {
    constructor(readonly x: ModlValueItem, readonly xs: Array<ModlValueItem>) { }
}

export type Conjunction = '&' | '|';

export class ModlConditionTest {
    constructor(readonly invert: boolean, readonly x: ModlCondition | ModlConditionGroup, readonly xs: Array<[Conjunction, Option<boolean>, ModlCondition | ModlConditionGroup]>) { }
}

export type ModlOperator = '=' | '>' | '>=' | '<' | '<=' | '!=';

export class ModlCondition {
    constructor(readonly s: Option<string>, readonly op: Option<ModlOperator>, readonly v: ModlValue, readonly vs: Array<ModlValue>) { }
}

export class ModlConditionGroup {
    constructor(readonly t: ModlConditionTest, readonly ts: Array<[Conjunction, ModlConditionTest]>) { }
}

export type ModlValue = ModlMap | ModlPair | ModlArray | ModlNbArray | ModlPrimitive;

export type ModlArrayValueItem = ModlMap | ModlPair | ModlArray | ModlPrimitive;

export type ModlPrimitive = ModlQuoted | ModlNumber | ModlString | ModlBoolNull;

export class ModlNumber {
    constructor(readonly value: number) { }
}

export class ModlQuoted {
    constructor(readonly value: string) { }
}

export class ModlString {
    constructor(readonly value: string) { }
}

export enum ModlBoolNull { ModlTrue, ModlFalse, ModlNull }
