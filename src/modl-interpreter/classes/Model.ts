import { Option } from "fp-ts/lib/Option";

export class Modl {
    constructor(readonly s: Array<ModlStructure>) { }
}

type ModlStructure = ModlMap | ModlArray | ModlTopLevelConditional | ModlPair;

class ModlMap {
    constructor(readonly items: Array<ModlMapItem>) { }
}

class ModlArray {
    constructor(readonly items: Array<ModlArrayItem | ModlNbArray>) { }
}

class ModlNbArray {
    constructor(readonly items: Array<ModlArrayItem>) { }
}

class ModlPair {
    constructor(readonly key: string | ModlQuoted, readonly value: ModlValueItem | ModlMap | ModlArray) { }
}

type ModlValueItem = ModlMap | ModlPair | ModlArray | ModlNbArray | ModlPrimitive | ModlValueConditional;

class ModlTopLevelConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlTopLevelConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlTopLevelConditionalReturn]>) { }
}
class ModlTopLevelConditionalReturn {
    constructor(readonly x: ModlStructure, readonly xs: Array<ModlStructure>) { }
}

class ModlMapConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlMapConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlMapConditionalReturn]>) { }
}
class ModlMapConditionalReturn {
    constructor(readonly x: ModlMapItem, readonly xs: Array<ModlMapItem>) { }
}
type ModlMapItem = ModlPair | ModlMapConditional;

class ModlArrayConditional {
    constructor(readonly test: ModlConditionTest, readonly ret: ModlArrayConditionalReturn, readonly clauses: Array<[Option<ModlConditionTest>, ModlArrayConditionalReturn]>) { }
}
class ModlArrayConditionalReturn {
    constructor(readonly x: ModlArrayItem, readonly xs: Array<ModlArrayItem>) { }
}
type ModlArrayItem = ModlArrayValueItem | ModlArrayConditional;

class ModlValueConditional {
    constructor(readonly test: ModlConditionTest, readonly clause: Option<[ModlValueConditionalReturn, Array<[ModlConditionTest, ModlValueConditionalReturn]>, ModlValueConditionalReturn]>) { }
}
class ModlValueConditionalReturn {
    constructor(readonly x: ModlValueItem, readonly xs: Array<ModlValueItem>) { }
}

type Conjunction = '&' | '|';
class ModlConditionTest {
    constructor(readonly invert: boolean, readonly x: ModlCondition | ModlConditionGroup, readonly xs: Array<[Conjunction, Option<boolean>, ModlCondition | ModlConditionGroup]>) { }
}

type ModlOperator = '=' | '>' | '>=' | '<' | '<=' | '!=';

class ModlCondition {
    constructor(readonly s: Option<string>, readonly op: Option<ModlOperator>, readonly v: ModlValue, readonly vs: Array<ModlValue>) { }
}
class ModlConditionGroup {
    constructor(readonly t: ModlConditionTest, readonly ts: Array<[Conjunction, ModlConditionTest]>) { }
}

type ModlValue = ModlMap | ModlPair | ModlArray | ModlNbArray | ModlPrimitive;

type ModlArrayValueItem = ModlMap | ModlPair | ModlArray | ModlPrimitive;

type ModlPrimitive = ModlQuoted | ModlNumber | ModlString | ModlTrue | ModlFalse | ModlNull;

class ModlNumber {
    constructor(readonly value: number) { }
}

class ModlQuoted {
    constructor(readonly value: string) { }
}
class ModlString {
    constructor(readonly value: string) { }
}

class ModlTrue { }
class ModlFalse { }
class ModlNull { }
