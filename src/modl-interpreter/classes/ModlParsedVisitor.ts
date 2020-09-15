import * as modlParser from '../../../gen/MODL/MODLParser';
import { Modl } from './Model';

export class ModlParsedVisitor {
  readonly modl;

  constructor(ctx: modlParser.MODLContext) {
    this.modl = new Modl(new Array());
  }
}
