export class Modl {
  constructor(readonly s: ModlStructure[]) {}
}

export type ModlStructure = ModlMap | ModlArray | ModlPair;

export class ModlMap {
  constructor(readonly items: ModlMapItem[]) {}
}

export class ModlArray {
  constructor(readonly items: [ModlArrayItem | ModlNbArray]) {}
}

export class ModlNbArray {
  constructor(readonly items: ModlArrayItem[]) {}
}

export class ModlPair {
  constructor(
    readonly key: string | ModlQuoted,
    readonly value: ModlValueItem | ModlMap | ModlArray
  ) {}
}

export type ModlValueItem =
  | ModlMap
  | ModlPair
  | ModlArray
  | ModlNbArray
  | ModlPrimitive;

export type ModlMapItem = ModlPair;

export type ModlArrayItem = ModlArrayValueItem;

export type ModlValue =
  | ModlMap
  | ModlPair
  | ModlArray
  | ModlNbArray
  | ModlPrimitive;

export type ModlArrayValueItem = ModlMap | ModlPair | ModlArray | ModlPrimitive;

export type ModlPrimitive = ModlQuoted | ModlNumber | ModlString | ModlBoolNull;

export class ModlNumber {
  constructor(readonly value: number) {}
}

export class ModlQuoted {
  constructor(readonly value: string) {}
}

export class ModlString {
  constructor(readonly value: string) {}
}

export enum ModlBoolNull {
  ModlTrue,
  ModlFalse,
  ModlNull,
}
