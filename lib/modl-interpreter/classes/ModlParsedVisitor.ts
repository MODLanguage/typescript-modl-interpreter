import { ParserRuleContext } from 'antlr4';
import { Console } from 'console';
import * as modlParser from '../../../gen/MODL/MODLParser';
import { Ancestry } from './Ancestry';
import { Modl } from './Model';

export class ModlParsedVisitor {
  readonly modl;

  constructor(ctx: modlParser.MODLContext, readonly ancestry: Ancestry) {
    const structures = ctx.modl_structure();
    this.modl = new Modl(new Array());



//     final Vector<Structure> structures = Vector.ofAll(ctx.modl_structure()
//     .stream()
//     .map(ctx1 -> visitStructure(ctx1, modl)));

// // Look for a *V or *VERSION that isn't in the first position of the file.
// int i = 0;
// for (final Structure structure : structures) {
// if (i > 0) {
//     if (structure instanceof Pair) {
//         final Pair first = (Pair) structure;
//         @NonNull final String key = first.getKey();
//         if (key.equals("*V") || key.equals("*VERSION")) {
//             throw new RuntimeException("MODL version should be on the first line if specified.");
//         }
//     }
// }
// i++;
// }

// modl = modl.with(ancestry, structures);

  }
}
