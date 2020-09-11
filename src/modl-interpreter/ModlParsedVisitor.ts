import modlParser = require('../../gen/MODL/MODLParser');
import {Modl} from './Model';

export class ModlParsedVisitor {
  private readonly modl;

  constructor(ctx: modlParser.MODLContext) {
    this.modl = new Modl();
  }

  getModl(): Modl {
    return this.modl;
  }
}
