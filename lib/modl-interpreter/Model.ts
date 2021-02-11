/**
 * Modl
 */
export class Modl {
  constructor(readonly s: ModlStructure[]) {}
}

export type ModlStructure = ModlMap | ModlArray | ModlPair;

export class ModlMap {
  constructor(readonly items: ModlMapItem[]) {}
}

/**
 * Modl array
 */
export class ModlArray {
  constructor(readonly items: [ModlValue]) {}
}

/**
 * Modl pair
 */
export class ModlPair {
  constructor(readonly key: string | ModlQuoted, readonly value: ModlValue | ModlMap | ModlArray) {}
}

export type ModlMapItem = ModlPair;

export type ModlValue = ModlMap | ModlPair | ModlArray | ModlPrimitive;

export type ModlPrimitive = ModlQuoted | ModlNumber | ModlString | ModlBoolNull;

/**
 * Modl number
 */
export class ModlNumber {
  constructor(readonly value: number) {}
}

/**
 * Modl quoted
 */
export class ModlQuoted {
  constructor(readonly value: string) {}
}

/**
 * Modl string
 */
export class ModlString {
  constructor(readonly value: string) {}
}

/**
 * Modl bool null
 */
export enum ModlBoolNull {
  ModlTrue,
  ModlFalse,
  ModlNull,
}
