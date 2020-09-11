// Generated from /Users/tonywalmsley/work/num/grammar/antlr4/MODLParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MODLParserListener = require('./MODLParserListener').MODLParserListener;
var MODLParserVisitor = require('./MODLParserVisitor').MODLParserVisitor;

var grammarFileName = 'MODLParser.g4';

var serializedATN = [
  '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
  '\u0003\u001f\u0147\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004',
  '\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007',
  '\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f',
  '\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010',
  '\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014',
  '\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017',
  '\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0005\u00024\n',
  '\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u00029\n\u0002\f\u0002',
  '\u000e\u0002<\u000b\u0002\u0003\u0002\u0005\u0002?\n\u0002\u0005\u0002',
  'A\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003',
  '\u0003\u0003\u0005\u0003I\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004',
  '\u0003\u0004\u0007\u0004O\n\u0004\f\u0004\u000e\u0004R\u000b\u0004\u0005',
  '\u0004T\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003',
  '\u0005\u0005\u0005[\n\u0005\u0003\u0005\u0006\u0005^\n\u0005\r\u0005',
  '\u000e\u0005_\u0003\u0005\u0003\u0005\u0005\u0005d\n\u0005\u0003\u0005',
  '\u0007\u0005g\n\u0005\f\u0005\u000e\u0005j\u000b\u0005\u0007\u0005l',
  '\n\u0005\f\u0005\u000e\u0005o\u000b\u0005\u0005\u0005q\n\u0005\u0003',
  '\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006w\n\u0006\r\u0006',
  '\u000e\u0006x\u0006\u0006{\n\u0006\r\u0006\u000e\u0006|\u0003\u0006',
  '\u0007\u0006\u0080\n\u0006\f\u0006\u000e\u0006\u0083\u000b\u0006\u0003',
  '\u0006\u0005\u0006\u0086\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007',
  '\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u008f\n',
  '\u0007\u0003\b\u0003\b\u0005\b\u0093\n\b\u0003\t\u0003\t\u0003\t\u0003',
  '\t\u0003\t\u0003\t\u0005\t\u009b\n\t\u0003\t\u0003\t\u0007\t\u009f\n',
  '\t\f\t\u000e\t\u00a2\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n',
  '\u0007\n\u00a9\n\n\f\n\u000e\n\u00ac\u000b\n\u0003\u000b\u0003\u000b',
  '\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b4\n',
  '\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00b8\n\u000b\f\u000b\u000e',
  '\u000b\u00bb\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0006\f\u00c0',
  '\n\f\r\f\u000e\f\u00c1\u0003\r\u0003\r\u0005\r\u00c6\n\r\u0003\u000e',
  '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e',
  '\u00ce\n\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00d2\n\u000e\f\u000e',
  '\u000e\u000e\u00d5\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0006',
  '\u000f\u00da\n\u000f\r\u000f\u000e\u000f\u00db\u0003\u0010\u0003\u0010',
  '\u0005\u0010\u00e0\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003',
  '\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007',
  '\u0011\u00eb\n\u0011\f\u0011\u000e\u0011\u00ee\u000b\u0011\u0003\u0011',
  '\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00f4\n\u0011\u0003',
  '\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00fb',
  '\n\u0012\f\u0012\u000e\u0012\u00fe\u000b\u0012\u0003\u0013\u0005\u0013',
  '\u0101\n\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u0105\n\u0013\u0003',
  '\u0013\u0003\u0013\u0005\u0013\u0109\n\u0013\u0003\u0013\u0003\u0013',
  '\u0005\u0013\u010d\n\u0013\u0007\u0013\u010f\n\u0013\f\u0013\u000e\u0013',
  '\u0112\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003',
  '\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u011d',
  '\n\u0014\u0003\u0015\u0005\u0015\u0120\n\u0015\u0003\u0015\u0005\u0015',
  '\u0123\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0128',
  '\n\u0015\f\u0015\u000e\u0015\u012b\u000b\u0015\u0003\u0016\u0003\u0016',
  '\u0003\u0016\u0003\u0016\u0007\u0016\u0131\n\u0016\f\u0016\u000e\u0016',
  '\u0134\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003',
  '\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u013d\n\u0017\u0003\u0018',
  '\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0143\n\u0018\u0003',
  '\u0019\u0003\u0019\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b',
  '\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e "$&(*,.',
  '0\u0002\u0005\u0003\u0002\u0011\u0012\u0003\u0002\u001b\u001c\u0005',
  '\u0002\u0004\u0006\u000f\u000f\u0011\u0012\u0002\u0167\u0002@\u0003',
  '\u0002\u0002\u0002\u0004H\u0003\u0002\u0002\u0002\u0006J\u0003\u0002',
  '\u0002\u0002\bW\u0003\u0002\u0002\u0002\nz\u0003\u0002\u0002\u0002\f',
  '\u008e\u0003\u0002\u0002\u0002\u000e\u0092\u0003\u0002\u0002\u0002\u0010',
  '\u0094\u0003\u0002\u0002\u0002\u0012\u00a5\u0003\u0002\u0002\u0002\u0014',
  '\u00ad\u0003\u0002\u0002\u0002\u0016\u00bf\u0003\u0002\u0002\u0002\u0018',
  '\u00c5\u0003\u0002\u0002\u0002\u001a\u00c7\u0003\u0002\u0002\u0002\u001c',
  '\u00d9\u0003\u0002\u0002\u0002\u001e\u00df\u0003\u0002\u0002\u0002 ',
  '\u00e1\u0003\u0002\u0002\u0002"\u00f7\u0003\u0002\u0002\u0002$\u0100',
  '\u0003\u0002\u0002\u0002&\u011c\u0003\u0002\u0002\u0002(\u011f\u0003',
  '\u0002\u0002\u0002*\u012c\u0003\u0002\u0002\u0002,\u013c\u0003\u0002',
  '\u0002\u0002.\u0142\u0003\u0002\u0002\u00020\u0144\u0003\u0002\u0002',
  '\u000224\u0005\u0004\u0003\u000232\u0003\u0002\u0002\u000234\u0003\u0002',
  '\u0002\u00024A\u0003\u0002\u0002\u00025:\u0005\u0004\u0003\u000267\u0007',
  '\t\u0002\u000279\u0005\u0004\u0003\u000286\u0003\u0002\u0002\u00029',
  '<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002',
  '\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=?\u0007\t',
  '\u0002\u0002>=\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003',
  '\u0002\u0002\u0002@3\u0003\u0002\u0002\u0002@5\u0003\u0002\u0002\u0002',
  'AB\u0003\u0002\u0002\u0002BC\u0007\u0002\u0002\u0003C\u0003\u0003\u0002',
  '\u0002\u0002DI\u0005\u0006\u0004\u0002EI\u0005\b\u0005\u0002FI\u0005',
  '\u0010\t\u0002GI\u0005\f\u0007\u0002HD\u0003\u0002\u0002\u0002HE\u0003',
  '\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002',
  'I\u0005\u0003\u0002\u0002\u0002JS\u0007\u000b\u0002\u0002KP\u0005\u0018',
  '\r\u0002LM\u0007\t\u0002\u0002MO\u0005\u0018\r\u0002NL\u0003\u0002\u0002',
  '\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002',
  '\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002SK\u0003',
  '\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002',
  'UV\u0007\f\u0002\u0002V\u0007\u0003\u0002\u0002\u0002Wp\u0007\r\u0002',
  '\u0002X[\u0005\u001e\u0010\u0002Y[\u0005\n\u0006\u0002ZX\u0003\u0002',
  '\u0002\u0002ZY\u0003\u0002\u0002\u0002[m\u0003\u0002\u0002\u0002\\^',
  '\u0007\t\u0002\u0002]\\\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002',
  '\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`c\u0003\u0002',
  '\u0002\u0002ad\u0005\u001e\u0010\u0002bd\u0005\n\u0006\u0002ca\u0003',
  '\u0002\u0002\u0002cb\u0003\u0002\u0002\u0002dh\u0003\u0002\u0002\u0002',
  'eg\u0007\t\u0002\u0002fe\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002',
  '\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002il\u0003\u0002',
  '\u0002\u0002jh\u0003\u0002\u0002\u0002k]\u0003\u0002\u0002\u0002lo\u0003',
  '\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002',
  'nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pZ\u0003\u0002\u0002',
  '\u0002pq\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0007\u000e',
  '\u0002\u0002s\t\u0003\u0002\u0002\u0002tv\u0005\u001e\u0010\u0002uw',
  '\u0007\u0007\u0002\u0002vu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002',
  '\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y{\u0003\u0002',
  '\u0002\u0002zt\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|z\u0003',
  '\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0081\u0003\u0002\u0002',
  '\u0002~\u0080\u0005\u001e\u0010\u0002\u007f~\u0003\u0002\u0002\u0002',
  '\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002',
  '\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002',
  '\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0086\u0007\u0007\u0002\u0002',
  '\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002',
  '\u0086\u000b\u0003\u0002\u0002\u0002\u0087\u0088\t\u0002\u0002\u0002',
  '\u0088\u0089\u0007\b\u0002\u0002\u0089\u008f\u0005\u000e\b\u0002\u008a',
  '\u008b\u0007\u0012\u0002\u0002\u008b\u008f\u0005\u0006\u0004\u0002\u008c',
  '\u008d\u0007\u0012\u0002\u0002\u008d\u008f\u0005\b\u0005\u0002\u008e',
  '\u0087\u0003\u0002\u0002\u0002\u008e\u008a\u0003\u0002\u0002\u0002\u008e',
  '\u008c\u0003\u0002\u0002\u0002\u008f\r\u0003\u0002\u0002\u0002\u0090',
  '\u0093\u0005,\u0017\u0002\u0091\u0093\u0005 \u0011\u0002\u0092\u0090',
  '\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u000f',
  '\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0014\u0002\u0002\u0095\u0096',
  '\u0005$\u0013\u0002\u0096\u0097\u0007\u0016\u0002\u0002\u0097\u00a0',
  '\u0005\u0012\n\u0002\u0098\u009a\u0007\u0017\u0002\u0002\u0099\u009b',
  '\u0005$\u0013\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009a\u009b',
  '\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d',
  '\u0007\u0016\u0002\u0002\u009d\u009f\u0005\u0012\n\u0002\u009e\u0098',
  '\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0\u009e',
  '\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a3',
  '\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a4',
  '\u0007\u001f\u0002\u0002\u00a4\u0011\u0003\u0002\u0002\u0002\u00a5\u00aa',
  '\u0005\u0004\u0003\u0002\u00a6\u00a7\u0007\t\u0002\u0002\u00a7\u00a9',
  '\u0005\u0004\u0003\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00ac',
  '\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab',
  '\u0003\u0002\u0002\u0002\u00ab\u0013\u0003\u0002\u0002\u0002\u00ac\u00aa',
  '\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u0014\u0002\u0002\u00ae\u00af',
  '\u0005$\u0013\u0002\u00af\u00b0\u0007\u0016\u0002\u0002\u00b0\u00b9',
  '\u0005\u0016\f\u0002\u00b1\u00b3\u0007\u0017\u0002\u0002\u00b2\u00b4',
  '\u0005$\u0013\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b3\u00b4',
  '\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6',
  '\u0007\u0016\u0002\u0002\u00b6\u00b8\u0005\u0016\f\u0002\u00b7\u00b1',
  '\u0003\u0002\u0002\u0002\u00b8\u00bb\u0003\u0002\u0002\u0002\u00b9\u00b7',
  '\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc',
  '\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bd',
  '\u0007\u001f\u0002\u0002\u00bd\u0015\u0003\u0002\u0002\u0002\u00be\u00c0',
  '\u0005\u0018\r\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1',
  '\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2',
  '\u0003\u0002\u0002\u0002\u00c2\u0017\u0003\u0002\u0002\u0002\u00c3\u00c6',
  '\u0005\f\u0007\u0002\u00c4\u00c6\u0005\u0014\u000b\u0002\u00c5\u00c3',
  '\u0003\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002\u0002\u00c6\u0019',
  '\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0014\u0002\u0002\u00c8\u00c9',
  '\u0005$\u0013\u0002\u00c9\u00ca\u0007\u0016\u0002\u0002\u00ca\u00d3',
  '\u0005\u001c\u000f\u0002\u00cb\u00cd\u0007\u0017\u0002\u0002\u00cc\u00ce',
  '\u0005$\u0013\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00cd\u00ce',
  '\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0',
  '\u0007\u0016\u0002\u0002\u00d0\u00d2\u0005\u001c\u000f\u0002\u00d1\u00cb',
  '\u0003\u0002\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1',
  '\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6',
  '\u0003\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d7',
  '\u0007\u001f\u0002\u0002\u00d7\u001b\u0003\u0002\u0002\u0002\u00d8\u00da',
  '\u0005\u001e\u0010\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u00db',
  '\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc',
  '\u0003\u0002\u0002\u0002\u00dc\u001d\u0003\u0002\u0002\u0002\u00dd\u00e0',
  '\u0005.\u0018\u0002\u00de\u00e0\u0005\u001a\u000e\u0002\u00df\u00dd',
  '\u0003\u0002\u0002\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00e0\u001f',
  '\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\u0014\u0002\u0002\u00e2\u00e3',
  '\u0005$\u0013\u0002\u00e3\u00f3\u0007\u0016\u0002\u0002\u00e4\u00ec',
  '\u0005"\u0012\u0002\u00e5\u00e6\u0007\u0017\u0002\u0002\u00e6\u00e7',
  '\u0005$\u0013\u0002\u00e7\u00e8\u0007\u0016\u0002\u0002\u00e8\u00e9',
  '\u0005"\u0012\u0002\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea\u00e5',
  '\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea',
  '\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ef',
  '\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f0',
  '\u0007\u0017\u0002\u0002\u00f0\u00f1\u0007\u0016\u0002\u0002\u00f1\u00f2',
  '\u0005"\u0012\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00e4',
  '\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5',
  '\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007\u001f\u0002\u0002\u00f6!',
  '\u0003\u0002\u0002\u0002\u00f7\u00fc\u0005\u000e\b\u0002\u00f8\u00f9',
  '\u0007\u0007\u0002\u0002\u00f9\u00fb\u0005\u000e\b\u0002\u00fa\u00f8',
  '\u0003\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa',
  '\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd#',
  '\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00ff\u0101',
  '\u0007\u001d\u0002\u0002\u0100\u00ff\u0003\u0002\u0002\u0002\u0100\u0101',
  '\u0003\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0105',
  '\u0005(\u0015\u0002\u0103\u0105\u0005*\u0016\u0002\u0104\u0102\u0003',
  '\u0002\u0002\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105\u0110\u0003',
  '\u0002\u0002\u0002\u0106\u0108\t\u0003\u0002\u0002\u0107\u0109\u0007',
  '\u001d\u0002\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0108\u0109\u0003',
  '\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u010d\u0005',
  '(\u0015\u0002\u010b\u010d\u0005*\u0016\u0002\u010c\u010a\u0003\u0002',
  '\u0002\u0002\u010c\u010b\u0003\u0002\u0002\u0002\u010d\u010f\u0003\u0002',
  '\u0002\u0002\u010e\u0106\u0003\u0002\u0002\u0002\u010f\u0112\u0003\u0002',
  '\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002\u0110\u0111\u0003\u0002',
  '\u0002\u0002\u0111%\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002',
  '\u0002\u0002\u0113\u011d\u0007\b\u0002\u0002\u0114\u011d\u0007\u0018',
  '\u0002\u0002\u0115\u0116\u0007\u0018\u0002\u0002\u0116\u011d\u0007\b',
  '\u0002\u0002\u0117\u011d\u0007\u0019\u0002\u0002\u0118\u0119\u0007\u0019',
  '\u0002\u0002\u0119\u011d\u0007\b\u0002\u0002\u011a\u011b\u0007\u001d',
  '\u0002\u0002\u011b\u011d\u0007\b\u0002\u0002\u011c\u0113\u0003\u0002',
  '\u0002\u0002\u011c\u0114\u0003\u0002\u0002\u0002\u011c\u0115\u0003\u0002',
  '\u0002\u0002\u011c\u0117\u0003\u0002\u0002\u0002\u011c\u0118\u0003\u0002',
  "\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011d'\u0003\u0002",
  '\u0002\u0002\u011e\u0120\u0007\u0012\u0002\u0002\u011f\u011e\u0003\u0002',
  '\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120\u0122\u0003\u0002',
  '\u0002\u0002\u0121\u0123\u0005&\u0014\u0002\u0122\u0121\u0003\u0002',
  '\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0124\u0003\u0002',
  '\u0002\u0002\u0124\u0129\u0005,\u0017\u0002\u0125\u0126\u0007\u0017',
  '\u0002\u0002\u0126\u0128\u0005,\u0017\u0002\u0127\u0125\u0003\u0002',
  '\u0002\u0002\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002',
  '\u0002\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a)\u0003\u0002',
  '\u0002\u0002\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u012d\u0007\u0014',
  '\u0002\u0002\u012d\u0132\u0005$\u0013\u0002\u012e\u012f\t\u0003\u0002',
  '\u0002\u012f\u0131\u0005$\u0013\u0002\u0130\u012e\u0003\u0002\u0002',
  '\u0002\u0131\u0134\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002',
  '\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0135\u0003\u0002\u0002',
  '\u0002\u0134\u0132\u0003\u0002\u0002\u0002\u0135\u0136\u0007\u001f\u0002',
  '\u0002\u0136+\u0003\u0002\u0002\u0002\u0137\u013d\u0005\u0006\u0004',
  '\u0002\u0138\u013d\u0005\b\u0005\u0002\u0139\u013d\u0005\n\u0006\u0002',
  '\u013a\u013d\u0005\f\u0007\u0002\u013b\u013d\u00050\u0019\u0002\u013c',
  '\u0137\u0003\u0002\u0002\u0002\u013c\u0138\u0003\u0002\u0002\u0002\u013c',
  '\u0139\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c',
  '\u013b\u0003\u0002\u0002\u0002\u013d-\u0003\u0002\u0002\u0002\u013e',
  '\u0143\u0005\u0006\u0004\u0002\u013f\u0143\u0005\f\u0007\u0002\u0140',
  '\u0143\u0005\b\u0005\u0002\u0141\u0143\u00050\u0019\u0002\u0142\u013e',
  '\u0003\u0002\u0002\u0002\u0142\u013f\u0003\u0002\u0002\u0002\u0142\u0140',
  '\u0003\u0002\u0002\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0143/',
  '\u0003\u0002\u0002\u0002\u0144\u0145\t\u0004\u0002\u0002\u01451\u0003',
  '\u0002\u0002\u0002/3:>@HPSZ_chmpx|\u0081\u0085\u008e\u0092\u009a\u00a0',
  '\u00aa\u00b3\u00b9\u00c1\u00c5\u00cd\u00d3\u00db\u00df\u00ec\u00f3\u00fc',
  '\u0100\u0104\u0108\u010c\u0110\u011c\u011f\u0122\u0129\u0132\u013c\u0142',
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "','",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "'{'",
  null,
  "'?'",
  "'/'",
  "'>'",
  "'<'",
  "'*'",
  "'&'",
  "'|'",
  "'!'",
  null,
  "'}'",
];

var symbolicNames = [
  null,
  'WS',
  'NULL',
  'TRUE',
  'FALSE',
  'COLON',
  'EQUALS',
  'STRUCT_SEP',
  'ARR_SEP',
  'LBRAC',
  'RBRAC',
  'LSBRAC',
  'RSBRAC',
  'NUMBER',
  'COMMENT',
  'QUOTED',
  'STRING',
  'HASH_PREFIX',
  'LCBRAC',
  'CWS',
  'QMARK',
  'FSLASH',
  'GTHAN',
  'LTHAN',
  'ASTERISK',
  'AMP',
  'PIPE',
  'EXCLAM',
  'CCOMMENT',
  'RCBRAC',
];

var ruleNames = [
  'modl',
  'modl_structure',
  'modl_map',
  'modl_array',
  'modl_nb_array',
  'modl_pair',
  'modl_value_item',
  'modl_top_level_conditional',
  'modl_top_level_conditional_return',
  'modl_map_conditional',
  'modl_map_conditional_return',
  'modl_map_item',
  'modl_array_conditional',
  'modl_array_conditional_return',
  'modl_array_item',
  'modl_value_conditional',
  'modl_value_conditional_return',
  'modl_condition_test',
  'modl_operator',
  'modl_condition',
  'modl_condition_group',
  'modl_value',
  'modl_array_value_item',
  'modl_primitive',
];

function MODLParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

MODLParser.prototype = Object.create(antlr4.Parser.prototype);
MODLParser.prototype.constructor = MODLParser;

Object.defineProperty(MODLParser.prototype, 'atn', {
  get: function () {
    return atn;
  },
});

MODLParser.EOF = antlr4.Token.EOF;
MODLParser.WS = 1;
MODLParser.NULL = 2;
MODLParser.TRUE = 3;
MODLParser.FALSE = 4;
MODLParser.COLON = 5;
MODLParser.EQUALS = 6;
MODLParser.STRUCT_SEP = 7;
MODLParser.ARR_SEP = 8;
MODLParser.LBRAC = 9;
MODLParser.RBRAC = 10;
MODLParser.LSBRAC = 11;
MODLParser.RSBRAC = 12;
MODLParser.NUMBER = 13;
MODLParser.COMMENT = 14;
MODLParser.QUOTED = 15;
MODLParser.STRING = 16;
MODLParser.HASH_PREFIX = 17;
MODLParser.LCBRAC = 18;
MODLParser.CWS = 19;
MODLParser.QMARK = 20;
MODLParser.FSLASH = 21;
MODLParser.GTHAN = 22;
MODLParser.LTHAN = 23;
MODLParser.ASTERISK = 24;
MODLParser.AMP = 25;
MODLParser.PIPE = 26;
MODLParser.EXCLAM = 27;
MODLParser.CCOMMENT = 28;
MODLParser.RCBRAC = 29;

MODLParser.RULE_modl = 0;
MODLParser.RULE_modl_structure = 1;
MODLParser.RULE_modl_map = 2;
MODLParser.RULE_modl_array = 3;
MODLParser.RULE_modl_nb_array = 4;
MODLParser.RULE_modl_pair = 5;
MODLParser.RULE_modl_value_item = 6;
MODLParser.RULE_modl_top_level_conditional = 7;
MODLParser.RULE_modl_top_level_conditional_return = 8;
MODLParser.RULE_modl_map_conditional = 9;
MODLParser.RULE_modl_map_conditional_return = 10;
MODLParser.RULE_modl_map_item = 11;
MODLParser.RULE_modl_array_conditional = 12;
MODLParser.RULE_modl_array_conditional_return = 13;
MODLParser.RULE_modl_array_item = 14;
MODLParser.RULE_modl_value_conditional = 15;
MODLParser.RULE_modl_value_conditional_return = 16;
MODLParser.RULE_modl_condition_test = 17;
MODLParser.RULE_modl_operator = 18;
MODLParser.RULE_modl_condition = 19;
MODLParser.RULE_modl_condition_group = 20;
MODLParser.RULE_modl_value = 21;
MODLParser.RULE_modl_array_value_item = 22;
MODLParser.RULE_modl_primitive = 23;

function ModlContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl;
  return this;
}

ModlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModlContext.prototype.constructor = ModlContext;

ModlContext.prototype.EOF = function () {
  return this.getToken(MODLParser.EOF, 0);
};

ModlContext.prototype.modl_structure = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_structureContext);
  } else {
    return this.getTypedRuleContext(Modl_structureContext, i);
  }
};

ModlContext.prototype.STRUCT_SEP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.STRUCT_SEP);
  } else {
    return this.getToken(MODLParser.STRUCT_SEP, i);
  }
};

ModlContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl(this);
  }
};

ModlContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl(this);
  }
};

ModlContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.ModlContext = ModlContext;

MODLParser.prototype.modl = function () {
  var localctx = new ModlContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, MODLParser.RULE_modl);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 62;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
    switch (la_) {
      case 1:
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) &
                ((1 << MODLParser.LBRAC) |
                    (1 << MODLParser.LSBRAC) |
                    (1 << MODLParser.QUOTED) |
                    (1 << MODLParser.STRING) |
                    (1 << MODLParser.LCBRAC))) !==
            0
        ) {
          this.state = 48;
          this.modl_structure();
        }

        break;

      case 2:
        this.state = 51;
        this.modl_structure();
        this.state = 56;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 52;
            this.match(MODLParser.STRUCT_SEP);
            this.state = 53;
            this.modl_structure();
          }
          this.state = 58;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
        }

        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === MODLParser.STRUCT_SEP) {
          this.state = 59;
          this.match(MODLParser.STRUCT_SEP);
        }

        break;
    }
    this.state = 64;
    this.match(MODLParser.EOF);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_structureContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_structure;
  return this;
}

Modl_structureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_structureContext.prototype.constructor = Modl_structureContext;

Modl_structureContext.prototype.modl_map = function () {
  return this.getTypedRuleContext(Modl_mapContext, 0);
};

Modl_structureContext.prototype.modl_array = function () {
  return this.getTypedRuleContext(Modl_arrayContext, 0);
};

Modl_structureContext.prototype.modl_top_level_conditional = function () {
  return this.getTypedRuleContext(Modl_top_level_conditionalContext, 0);
};

Modl_structureContext.prototype.modl_pair = function () {
  return this.getTypedRuleContext(Modl_pairContext, 0);
};

Modl_structureContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_structure(this);
  }
};

Modl_structureContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_structure(this);
  }
};

Modl_structureContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_structure(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_structureContext = Modl_structureContext;

MODLParser.prototype.modl_structure = function () {
  var localctx = new Modl_structureContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, MODLParser.RULE_modl_structure);
  try {
    this.state = 70;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case MODLParser.LBRAC:
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.modl_map();
        break;
      case MODLParser.LSBRAC:
        this.enterOuterAlt(localctx, 2);
        this.state = 67;
        this.modl_array();
        break;
      case MODLParser.LCBRAC:
        this.enterOuterAlt(localctx, 3);
        this.state = 68;
        this.modl_top_level_conditional();
        break;
      case MODLParser.QUOTED:
      case MODLParser.STRING:
        this.enterOuterAlt(localctx, 4);
        this.state = 69;
        this.modl_pair();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_mapContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_map;
  return this;
}

Modl_mapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_mapContext.prototype.constructor = Modl_mapContext;

Modl_mapContext.prototype.LBRAC = function () {
  return this.getToken(MODLParser.LBRAC, 0);
};

Modl_mapContext.prototype.RBRAC = function () {
  return this.getToken(MODLParser.RBRAC, 0);
};

Modl_mapContext.prototype.modl_map_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_map_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_map_itemContext, i);
  }
};

Modl_mapContext.prototype.STRUCT_SEP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.STRUCT_SEP);
  } else {
    return this.getToken(MODLParser.STRUCT_SEP, i);
  }
};

Modl_mapContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_map(this);
  }
};

Modl_mapContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_map(this);
  }
};

Modl_mapContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_map(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_mapContext = Modl_mapContext;

MODLParser.prototype.modl_map = function () {
  var localctx = new Modl_mapContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, MODLParser.RULE_modl_map);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 72;
    this.match(MODLParser.LBRAC);
    this.state = 81;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) & ((1 << MODLParser.QUOTED) | (1 << MODLParser.STRING) | (1 << MODLParser.LCBRAC))) !== 0
    ) {
      this.state = 73;
      this.modl_map_item();
      this.state = 78;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === MODLParser.STRUCT_SEP) {
        this.state = 74;
        this.match(MODLParser.STRUCT_SEP);
        this.state = 75;
        this.modl_map_item();
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 83;
    this.match(MODLParser.RBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_arrayContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_array;
  return this;
}

Modl_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_arrayContext.prototype.constructor = Modl_arrayContext;

Modl_arrayContext.prototype.LSBRAC = function () {
  return this.getToken(MODLParser.LSBRAC, 0);
};

Modl_arrayContext.prototype.RSBRAC = function () {
  return this.getToken(MODLParser.RSBRAC, 0);
};

Modl_arrayContext.prototype.modl_array_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_array_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_array_itemContext, i);
  }
};

Modl_arrayContext.prototype.modl_nb_array = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_nb_arrayContext);
  } else {
    return this.getTypedRuleContext(Modl_nb_arrayContext, i);
  }
};

Modl_arrayContext.prototype.STRUCT_SEP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.STRUCT_SEP);
  } else {
    return this.getToken(MODLParser.STRUCT_SEP, i);
  }
};

Modl_arrayContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_array(this);
  }
};

Modl_arrayContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_array(this);
  }
};

Modl_arrayContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_array(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_arrayContext = Modl_arrayContext;

MODLParser.prototype.modl_array = function () {
  var localctx = new Modl_arrayContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, MODLParser.RULE_modl_array);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 85;
    this.match(MODLParser.LSBRAC);
    this.state = 110;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
            ((1 << MODLParser.NULL) |
                (1 << MODLParser.TRUE) |
                (1 << MODLParser.FALSE) |
                (1 << MODLParser.LBRAC) |
                (1 << MODLParser.LSBRAC) |
                (1 << MODLParser.NUMBER) |
                (1 << MODLParser.QUOTED) |
                (1 << MODLParser.STRING) |
                (1 << MODLParser.LCBRAC))) !==
        0
    ) {
      this.state = 88;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
      switch (la_) {
        case 1:
          this.state = 86;
          this.modl_array_item();
          break;

        case 2:
          this.state = 87;
          this.modl_nb_array();
          break;
      }
      this.state = 107;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === MODLParser.STRUCT_SEP) {
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          this.state = 90;
          this.match(MODLParser.STRUCT_SEP);
          this.state = 93;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === MODLParser.STRUCT_SEP);
        this.state = 97;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
        switch (la_) {
          case 1:
            this.state = 95;
            this.modl_array_item();
            break;

          case 2:
            this.state = 96;
            this.modl_nb_array();
            break;
        }
        this.state = 102;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            this.state = 99;
            this.match(MODLParser.STRUCT_SEP);
          }
          this.state = 104;
          this._errHandler.sync(this);
          _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
        }

        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    }

    this.state = 112;
    this.match(MODLParser.RSBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_nb_arrayContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_nb_array;
  return this;
}

Modl_nb_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_nb_arrayContext.prototype.constructor = Modl_nb_arrayContext;

Modl_nb_arrayContext.prototype.modl_array_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_array_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_array_itemContext, i);
  }
};

Modl_nb_arrayContext.prototype.COLON = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.COLON);
  } else {
    return this.getToken(MODLParser.COLON, i);
  }
};

Modl_nb_arrayContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_nb_array(this);
  }
};

Modl_nb_arrayContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_nb_array(this);
  }
};

Modl_nb_arrayContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_nb_array(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_nb_arrayContext = Modl_nb_arrayContext;

MODLParser.prototype.modl_nb_array = function () {
  var localctx = new Modl_nb_arrayContext(this, this._ctx, this.state);
  this.enterRule(localctx, 8, MODLParser.RULE_modl_nb_array);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 120;
    this._errHandler.sync(this);
    var _alt = 1;
    do {
      switch (_alt) {
        case 1:
          this.state = 114;
          this.modl_array_item();
          this.state = 116;
          this._errHandler.sync(this);
          var _alt = 1;
          do {
            switch (_alt) {
              case 1:
                this.state = 115;
                this.match(MODLParser.COLON);
                break;
              default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 118;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
          } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this.state = 122;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
    } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
    this.state = 127;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 124;
        this.modl_array_item();
      }
      this.state = 129;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
    }

    this.state = 131;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
    if (la_ === 1) {
      this.state = 130;
      this.match(MODLParser.COLON);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_pairContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_pair;
  return this;
}

Modl_pairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_pairContext.prototype.constructor = Modl_pairContext;

Modl_pairContext.prototype.EQUALS = function () {
  return this.getToken(MODLParser.EQUALS, 0);
};

Modl_pairContext.prototype.modl_value_item = function () {
  return this.getTypedRuleContext(Modl_value_itemContext, 0);
};

Modl_pairContext.prototype.STRING = function () {
  return this.getToken(MODLParser.STRING, 0);
};

Modl_pairContext.prototype.QUOTED = function () {
  return this.getToken(MODLParser.QUOTED, 0);
};

Modl_pairContext.prototype.modl_map = function () {
  return this.getTypedRuleContext(Modl_mapContext, 0);
};

Modl_pairContext.prototype.modl_array = function () {
  return this.getTypedRuleContext(Modl_arrayContext, 0);
};

Modl_pairContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_pair(this);
  }
};

Modl_pairContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_pair(this);
  }
};

Modl_pairContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_pair(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_pairContext = Modl_pairContext;

MODLParser.prototype.modl_pair = function () {
  var localctx = new Modl_pairContext(this, this._ctx, this.state);
  this.enterRule(localctx, 10, MODLParser.RULE_modl_pair);
  var _la = 0; // Token type
  try {
    this.state = 140;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        _la = this._input.LA(1);
        if (!(_la === MODLParser.QUOTED || _la === MODLParser.STRING)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 134;
        this.match(MODLParser.EQUALS);
        this.state = 135;
        this.modl_value_item();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 136;
        this.match(MODLParser.STRING);
        this.state = 137;
        this.modl_map();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 138;
        this.match(MODLParser.STRING);
        this.state = 139;
        this.modl_array();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_value_itemContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_value_item;
  return this;
}

Modl_value_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_value_itemContext.prototype.constructor = Modl_value_itemContext;

Modl_value_itemContext.prototype.modl_value = function () {
  return this.getTypedRuleContext(Modl_valueContext, 0);
};

Modl_value_itemContext.prototype.modl_value_conditional = function () {
  return this.getTypedRuleContext(Modl_value_conditionalContext, 0);
};

Modl_value_itemContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_value_item(this);
  }
};

Modl_value_itemContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_value_item(this);
  }
};

Modl_value_itemContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_value_item(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_value_itemContext = Modl_value_itemContext;

MODLParser.prototype.modl_value_item = function () {
  var localctx = new Modl_value_itemContext(this, this._ctx, this.state);
  this.enterRule(localctx, 12, MODLParser.RULE_modl_value_item);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 144;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
    switch (la_) {
      case 1:
        this.state = 142;
        this.modl_value();
        break;

      case 2:
        this.state = 143;
        this.modl_value_conditional();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_top_level_conditionalContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_top_level_conditional;
  return this;
}

Modl_top_level_conditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_top_level_conditionalContext.prototype.constructor = Modl_top_level_conditionalContext;

Modl_top_level_conditionalContext.prototype.LCBRAC = function () {
  return this.getToken(MODLParser.LCBRAC, 0);
};

Modl_top_level_conditionalContext.prototype.modl_condition_test = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_testContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_testContext, i);
  }
};

Modl_top_level_conditionalContext.prototype.QMARK = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.QMARK);
  } else {
    return this.getToken(MODLParser.QMARK, i);
  }
};

Modl_top_level_conditionalContext.prototype.modl_top_level_conditional_return = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_top_level_conditional_returnContext);
  } else {
    return this.getTypedRuleContext(Modl_top_level_conditional_returnContext, i);
  }
};

Modl_top_level_conditionalContext.prototype.RCBRAC = function () {
  return this.getToken(MODLParser.RCBRAC, 0);
};

Modl_top_level_conditionalContext.prototype.FSLASH = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.FSLASH);
  } else {
    return this.getToken(MODLParser.FSLASH, i);
  }
};

Modl_top_level_conditionalContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_top_level_conditional(this);
  }
};

Modl_top_level_conditionalContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_top_level_conditional(this);
  }
};

Modl_top_level_conditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_top_level_conditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_top_level_conditionalContext = Modl_top_level_conditionalContext;

MODLParser.prototype.modl_top_level_conditional = function () {
  var localctx = new Modl_top_level_conditionalContext(this, this._ctx, this.state);
  this.enterRule(localctx, 14, MODLParser.RULE_modl_top_level_conditional);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 146;
    this.match(MODLParser.LCBRAC);
    this.state = 147;
    this.modl_condition_test();
    this.state = 148;
    this.match(MODLParser.QMARK);
    this.state = 149;
    this.modl_top_level_conditional_return();
    this.state = 158;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.FSLASH) {
      this.state = 150;
      this.match(MODLParser.FSLASH);
      this.state = 152;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (
          (_la & ~0x1f) == 0 &&
          ((1 << _la) &
              ((1 << MODLParser.NULL) |
                  (1 << MODLParser.TRUE) |
                  (1 << MODLParser.FALSE) |
                  (1 << MODLParser.EQUALS) |
                  (1 << MODLParser.LBRAC) |
                  (1 << MODLParser.LSBRAC) |
                  (1 << MODLParser.NUMBER) |
                  (1 << MODLParser.QUOTED) |
                  (1 << MODLParser.STRING) |
                  (1 << MODLParser.LCBRAC) |
                  (1 << MODLParser.GTHAN) |
                  (1 << MODLParser.LTHAN) |
                  (1 << MODLParser.EXCLAM))) !==
          0
      ) {
        this.state = 151;
        this.modl_condition_test();
      }

      this.state = 154;
      this.match(MODLParser.QMARK);
      this.state = 155;
      this.modl_top_level_conditional_return();
      this.state = 160;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 161;
    this.match(MODLParser.RCBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_top_level_conditional_returnContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_top_level_conditional_return;
  return this;
}

Modl_top_level_conditional_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_top_level_conditional_returnContext.prototype.constructor = Modl_top_level_conditional_returnContext;

Modl_top_level_conditional_returnContext.prototype.modl_structure = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_structureContext);
  } else {
    return this.getTypedRuleContext(Modl_structureContext, i);
  }
};

Modl_top_level_conditional_returnContext.prototype.STRUCT_SEP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.STRUCT_SEP);
  } else {
    return this.getToken(MODLParser.STRUCT_SEP, i);
  }
};

Modl_top_level_conditional_returnContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_top_level_conditional_return(this);
  }
};

Modl_top_level_conditional_returnContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_top_level_conditional_return(this);
  }
};

Modl_top_level_conditional_returnContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_top_level_conditional_return(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_top_level_conditional_returnContext = Modl_top_level_conditional_returnContext;

MODLParser.prototype.modl_top_level_conditional_return = function () {
  var localctx = new Modl_top_level_conditional_returnContext(this, this._ctx, this.state);
  this.enterRule(localctx, 16, MODLParser.RULE_modl_top_level_conditional_return);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 163;
    this.modl_structure();
    this.state = 168;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.STRUCT_SEP) {
      this.state = 164;
      this.match(MODLParser.STRUCT_SEP);
      this.state = 165;
      this.modl_structure();
      this.state = 170;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_map_conditionalContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_map_conditional;
  return this;
}

Modl_map_conditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_map_conditionalContext.prototype.constructor = Modl_map_conditionalContext;

Modl_map_conditionalContext.prototype.LCBRAC = function () {
  return this.getToken(MODLParser.LCBRAC, 0);
};

Modl_map_conditionalContext.prototype.modl_condition_test = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_testContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_testContext, i);
  }
};

Modl_map_conditionalContext.prototype.QMARK = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.QMARK);
  } else {
    return this.getToken(MODLParser.QMARK, i);
  }
};

Modl_map_conditionalContext.prototype.modl_map_conditional_return = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_map_conditional_returnContext);
  } else {
    return this.getTypedRuleContext(Modl_map_conditional_returnContext, i);
  }
};

Modl_map_conditionalContext.prototype.RCBRAC = function () {
  return this.getToken(MODLParser.RCBRAC, 0);
};

Modl_map_conditionalContext.prototype.FSLASH = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.FSLASH);
  } else {
    return this.getToken(MODLParser.FSLASH, i);
  }
};

Modl_map_conditionalContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_map_conditional(this);
  }
};

Modl_map_conditionalContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_map_conditional(this);
  }
};

Modl_map_conditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_map_conditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_map_conditionalContext = Modl_map_conditionalContext;

MODLParser.prototype.modl_map_conditional = function () {
  var localctx = new Modl_map_conditionalContext(this, this._ctx, this.state);
  this.enterRule(localctx, 18, MODLParser.RULE_modl_map_conditional);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 171;
    this.match(MODLParser.LCBRAC);
    this.state = 172;
    this.modl_condition_test();
    this.state = 173;
    this.match(MODLParser.QMARK);
    this.state = 174;
    this.modl_map_conditional_return();
    this.state = 183;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.FSLASH) {
      this.state = 175;
      this.match(MODLParser.FSLASH);
      this.state = 177;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (
          (_la & ~0x1f) == 0 &&
          ((1 << _la) &
              ((1 << MODLParser.NULL) |
                  (1 << MODLParser.TRUE) |
                  (1 << MODLParser.FALSE) |
                  (1 << MODLParser.EQUALS) |
                  (1 << MODLParser.LBRAC) |
                  (1 << MODLParser.LSBRAC) |
                  (1 << MODLParser.NUMBER) |
                  (1 << MODLParser.QUOTED) |
                  (1 << MODLParser.STRING) |
                  (1 << MODLParser.LCBRAC) |
                  (1 << MODLParser.GTHAN) |
                  (1 << MODLParser.LTHAN) |
                  (1 << MODLParser.EXCLAM))) !==
          0
      ) {
        this.state = 176;
        this.modl_condition_test();
      }

      this.state = 179;
      this.match(MODLParser.QMARK);
      this.state = 180;
      this.modl_map_conditional_return();
      this.state = 185;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 186;
    this.match(MODLParser.RCBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_map_conditional_returnContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_map_conditional_return;
  return this;
}

Modl_map_conditional_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_map_conditional_returnContext.prototype.constructor = Modl_map_conditional_returnContext;

Modl_map_conditional_returnContext.prototype.modl_map_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_map_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_map_itemContext, i);
  }
};

Modl_map_conditional_returnContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_map_conditional_return(this);
  }
};

Modl_map_conditional_returnContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_map_conditional_return(this);
  }
};

Modl_map_conditional_returnContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_map_conditional_return(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_map_conditional_returnContext = Modl_map_conditional_returnContext;

MODLParser.prototype.modl_map_conditional_return = function () {
  var localctx = new Modl_map_conditional_returnContext(this, this._ctx, this.state);
  this.enterRule(localctx, 20, MODLParser.RULE_modl_map_conditional_return);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 189;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 188;
      this.modl_map_item();
      this.state = 191;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) & ((1 << MODLParser.QUOTED) | (1 << MODLParser.STRING) | (1 << MODLParser.LCBRAC))) !== 0
        );
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_map_itemContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_map_item;
  return this;
}

Modl_map_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_map_itemContext.prototype.constructor = Modl_map_itemContext;

Modl_map_itemContext.prototype.modl_pair = function () {
  return this.getTypedRuleContext(Modl_pairContext, 0);
};

Modl_map_itemContext.prototype.modl_map_conditional = function () {
  return this.getTypedRuleContext(Modl_map_conditionalContext, 0);
};

Modl_map_itemContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_map_item(this);
  }
};

Modl_map_itemContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_map_item(this);
  }
};

Modl_map_itemContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_map_item(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_map_itemContext = Modl_map_itemContext;

MODLParser.prototype.modl_map_item = function () {
  var localctx = new Modl_map_itemContext(this, this._ctx, this.state);
  this.enterRule(localctx, 22, MODLParser.RULE_modl_map_item);
  try {
    this.state = 195;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case MODLParser.QUOTED:
      case MODLParser.STRING:
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.modl_pair();
        break;
      case MODLParser.LCBRAC:
        this.enterOuterAlt(localctx, 2);
        this.state = 194;
        this.modl_map_conditional();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_array_conditionalContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_array_conditional;
  return this;
}

Modl_array_conditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_array_conditionalContext.prototype.constructor = Modl_array_conditionalContext;

Modl_array_conditionalContext.prototype.LCBRAC = function () {
  return this.getToken(MODLParser.LCBRAC, 0);
};

Modl_array_conditionalContext.prototype.modl_condition_test = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_testContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_testContext, i);
  }
};

Modl_array_conditionalContext.prototype.QMARK = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.QMARK);
  } else {
    return this.getToken(MODLParser.QMARK, i);
  }
};

Modl_array_conditionalContext.prototype.modl_array_conditional_return = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_array_conditional_returnContext);
  } else {
    return this.getTypedRuleContext(Modl_array_conditional_returnContext, i);
  }
};

Modl_array_conditionalContext.prototype.RCBRAC = function () {
  return this.getToken(MODLParser.RCBRAC, 0);
};

Modl_array_conditionalContext.prototype.FSLASH = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.FSLASH);
  } else {
    return this.getToken(MODLParser.FSLASH, i);
  }
};

Modl_array_conditionalContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_array_conditional(this);
  }
};

Modl_array_conditionalContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_array_conditional(this);
  }
};

Modl_array_conditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_array_conditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_array_conditionalContext = Modl_array_conditionalContext;

MODLParser.prototype.modl_array_conditional = function () {
  var localctx = new Modl_array_conditionalContext(this, this._ctx, this.state);
  this.enterRule(localctx, 24, MODLParser.RULE_modl_array_conditional);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 197;
    this.match(MODLParser.LCBRAC);
    this.state = 198;
    this.modl_condition_test();
    this.state = 199;
    this.match(MODLParser.QMARK);
    this.state = 200;
    this.modl_array_conditional_return();
    this.state = 209;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.FSLASH) {
      this.state = 201;
      this.match(MODLParser.FSLASH);
      this.state = 203;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (
          (_la & ~0x1f) == 0 &&
          ((1 << _la) &
              ((1 << MODLParser.NULL) |
                  (1 << MODLParser.TRUE) |
                  (1 << MODLParser.FALSE) |
                  (1 << MODLParser.EQUALS) |
                  (1 << MODLParser.LBRAC) |
                  (1 << MODLParser.LSBRAC) |
                  (1 << MODLParser.NUMBER) |
                  (1 << MODLParser.QUOTED) |
                  (1 << MODLParser.STRING) |
                  (1 << MODLParser.LCBRAC) |
                  (1 << MODLParser.GTHAN) |
                  (1 << MODLParser.LTHAN) |
                  (1 << MODLParser.EXCLAM))) !==
          0
      ) {
        this.state = 202;
        this.modl_condition_test();
      }

      this.state = 205;
      this.match(MODLParser.QMARK);
      this.state = 206;
      this.modl_array_conditional_return();
      this.state = 211;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 212;
    this.match(MODLParser.RCBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_array_conditional_returnContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_array_conditional_return;
  return this;
}

Modl_array_conditional_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_array_conditional_returnContext.prototype.constructor = Modl_array_conditional_returnContext;

Modl_array_conditional_returnContext.prototype.modl_array_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_array_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_array_itemContext, i);
  }
};

Modl_array_conditional_returnContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_array_conditional_return(this);
  }
};

Modl_array_conditional_returnContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_array_conditional_return(this);
  }
};

Modl_array_conditional_returnContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_array_conditional_return(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_array_conditional_returnContext = Modl_array_conditional_returnContext;

MODLParser.prototype.modl_array_conditional_return = function () {
  var localctx = new Modl_array_conditional_returnContext(this, this._ctx, this.state);
  this.enterRule(localctx, 26, MODLParser.RULE_modl_array_conditional_return);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 215;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    do {
      this.state = 214;
      this.modl_array_item();
      this.state = 217;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    } while (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
            ((1 << MODLParser.NULL) |
                (1 << MODLParser.TRUE) |
                (1 << MODLParser.FALSE) |
                (1 << MODLParser.LBRAC) |
                (1 << MODLParser.LSBRAC) |
                (1 << MODLParser.NUMBER) |
                (1 << MODLParser.QUOTED) |
                (1 << MODLParser.STRING) |
                (1 << MODLParser.LCBRAC))) !==
        0
        );
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_array_itemContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_array_item;
  return this;
}

Modl_array_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_array_itemContext.prototype.constructor = Modl_array_itemContext;

Modl_array_itemContext.prototype.modl_array_value_item = function () {
  return this.getTypedRuleContext(Modl_array_value_itemContext, 0);
};

Modl_array_itemContext.prototype.modl_array_conditional = function () {
  return this.getTypedRuleContext(Modl_array_conditionalContext, 0);
};

Modl_array_itemContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_array_item(this);
  }
};

Modl_array_itemContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_array_item(this);
  }
};

Modl_array_itemContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_array_item(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_array_itemContext = Modl_array_itemContext;

MODLParser.prototype.modl_array_item = function () {
  var localctx = new Modl_array_itemContext(this, this._ctx, this.state);
  this.enterRule(localctx, 28, MODLParser.RULE_modl_array_item);
  try {
    this.state = 221;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case MODLParser.NULL:
      case MODLParser.TRUE:
      case MODLParser.FALSE:
      case MODLParser.LBRAC:
      case MODLParser.LSBRAC:
      case MODLParser.NUMBER:
      case MODLParser.QUOTED:
      case MODLParser.STRING:
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.modl_array_value_item();
        break;
      case MODLParser.LCBRAC:
        this.enterOuterAlt(localctx, 2);
        this.state = 220;
        this.modl_array_conditional();
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_value_conditionalContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_value_conditional;
  return this;
}

Modl_value_conditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_value_conditionalContext.prototype.constructor = Modl_value_conditionalContext;

Modl_value_conditionalContext.prototype.LCBRAC = function () {
  return this.getToken(MODLParser.LCBRAC, 0);
};

Modl_value_conditionalContext.prototype.modl_condition_test = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_testContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_testContext, i);
  }
};

Modl_value_conditionalContext.prototype.QMARK = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.QMARK);
  } else {
    return this.getToken(MODLParser.QMARK, i);
  }
};

Modl_value_conditionalContext.prototype.RCBRAC = function () {
  return this.getToken(MODLParser.RCBRAC, 0);
};

Modl_value_conditionalContext.prototype.modl_value_conditional_return = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_value_conditional_returnContext);
  } else {
    return this.getTypedRuleContext(Modl_value_conditional_returnContext, i);
  }
};

Modl_value_conditionalContext.prototype.FSLASH = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.FSLASH);
  } else {
    return this.getToken(MODLParser.FSLASH, i);
  }
};

Modl_value_conditionalContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_value_conditional(this);
  }
};

Modl_value_conditionalContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_value_conditional(this);
  }
};

Modl_value_conditionalContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_value_conditional(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_value_conditionalContext = Modl_value_conditionalContext;

MODLParser.prototype.modl_value_conditional = function () {
  var localctx = new Modl_value_conditionalContext(this, this._ctx, this.state);
  this.enterRule(localctx, 30, MODLParser.RULE_modl_value_conditional);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 223;
    this.match(MODLParser.LCBRAC);
    this.state = 224;
    this.modl_condition_test();
    this.state = 225;
    this.match(MODLParser.QMARK);
    this.state = 241;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
            ((1 << MODLParser.NULL) |
                (1 << MODLParser.TRUE) |
                (1 << MODLParser.FALSE) |
                (1 << MODLParser.LBRAC) |
                (1 << MODLParser.LSBRAC) |
                (1 << MODLParser.NUMBER) |
                (1 << MODLParser.QUOTED) |
                (1 << MODLParser.STRING) |
                (1 << MODLParser.LCBRAC))) !==
        0
    ) {
      this.state = 226;
      this.modl_value_conditional_return();
      this.state = 234;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 227;
          this.match(MODLParser.FSLASH);
          this.state = 228;
          this.modl_condition_test();
          this.state = 229;
          this.match(MODLParser.QMARK);
          this.state = 230;
          this.modl_value_conditional_return();
        }
        this.state = 236;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
      }

      this.state = 237;
      this.match(MODLParser.FSLASH);
      this.state = 238;
      this.match(MODLParser.QMARK);
      this.state = 239;
      this.modl_value_conditional_return();
    }

    this.state = 243;
    this.match(MODLParser.RCBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_value_conditional_returnContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_value_conditional_return;
  return this;
}

Modl_value_conditional_returnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_value_conditional_returnContext.prototype.constructor = Modl_value_conditional_returnContext;

Modl_value_conditional_returnContext.prototype.modl_value_item = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_value_itemContext);
  } else {
    return this.getTypedRuleContext(Modl_value_itemContext, i);
  }
};

Modl_value_conditional_returnContext.prototype.COLON = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.COLON);
  } else {
    return this.getToken(MODLParser.COLON, i);
  }
};

Modl_value_conditional_returnContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_value_conditional_return(this);
  }
};

Modl_value_conditional_returnContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_value_conditional_return(this);
  }
};

Modl_value_conditional_returnContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_value_conditional_return(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_value_conditional_returnContext = Modl_value_conditional_returnContext;

MODLParser.prototype.modl_value_conditional_return = function () {
  var localctx = new Modl_value_conditional_returnContext(this, this._ctx, this.state);
  this.enterRule(localctx, 32, MODLParser.RULE_modl_value_conditional_return);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 245;
    this.modl_value_item();
    this.state = 250;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.COLON) {
      this.state = 246;
      this.match(MODLParser.COLON);
      this.state = 247;
      this.modl_value_item();
      this.state = 252;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_condition_testContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_condition_test;
  return this;
}

Modl_condition_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_condition_testContext.prototype.constructor = Modl_condition_testContext;

Modl_condition_testContext.prototype.modl_condition = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_conditionContext);
  } else {
    return this.getTypedRuleContext(Modl_conditionContext, i);
  }
};

Modl_condition_testContext.prototype.modl_condition_group = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_groupContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_groupContext, i);
  }
};

Modl_condition_testContext.prototype.EXCLAM = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.EXCLAM);
  } else {
    return this.getToken(MODLParser.EXCLAM, i);
  }
};

Modl_condition_testContext.prototype.AMP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.AMP);
  } else {
    return this.getToken(MODLParser.AMP, i);
  }
};

Modl_condition_testContext.prototype.PIPE = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.PIPE);
  } else {
    return this.getToken(MODLParser.PIPE, i);
  }
};

Modl_condition_testContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_condition_test(this);
  }
};

Modl_condition_testContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_condition_test(this);
  }
};

Modl_condition_testContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_condition_test(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_condition_testContext = Modl_condition_testContext;

MODLParser.prototype.modl_condition_test = function () {
  var localctx = new Modl_condition_testContext(this, this._ctx, this.state);
  this.enterRule(localctx, 34, MODLParser.RULE_modl_condition_test);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 254;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 33, this._ctx);
    if (la_ === 1) {
      this.state = 253;
      this.match(MODLParser.EXCLAM);
    }
    this.state = 258;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 34, this._ctx);
    switch (la_) {
      case 1:
        this.state = 256;
        this.modl_condition();
        break;

      case 2:
        this.state = 257;
        this.modl_condition_group();
        break;
    }
    this.state = 270;
    this._errHandler.sync(this);
    var _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
    while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
      if (_alt === 1) {
        this.state = 260;
        _la = this._input.LA(1);
        if (!(_la === MODLParser.AMP || _la === MODLParser.PIPE)) {
          this._errHandler.recoverInline(this);
        } else {
          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 262;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 35, this._ctx);
        if (la_ === 1) {
          this.state = 261;
          this.match(MODLParser.EXCLAM);
        }
        this.state = 266;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 36, this._ctx);
        switch (la_) {
          case 1:
            this.state = 264;
            this.modl_condition();
            break;

          case 2:
            this.state = 265;
            this.modl_condition_group();
            break;
        }
      }
      this.state = 272;
      this._errHandler.sync(this);
      _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_operatorContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_operator;
  return this;
}

Modl_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_operatorContext.prototype.constructor = Modl_operatorContext;

Modl_operatorContext.prototype.EQUALS = function () {
  return this.getToken(MODLParser.EQUALS, 0);
};

Modl_operatorContext.prototype.GTHAN = function () {
  return this.getToken(MODLParser.GTHAN, 0);
};

Modl_operatorContext.prototype.LTHAN = function () {
  return this.getToken(MODLParser.LTHAN, 0);
};

Modl_operatorContext.prototype.EXCLAM = function () {
  return this.getToken(MODLParser.EXCLAM, 0);
};

Modl_operatorContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_operator(this);
  }
};

Modl_operatorContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_operator(this);
  }
};

Modl_operatorContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_operator(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_operatorContext = Modl_operatorContext;

MODLParser.prototype.modl_operator = function () {
  var localctx = new Modl_operatorContext(this, this._ctx, this.state);
  this.enterRule(localctx, 36, MODLParser.RULE_modl_operator);
  try {
    this.state = 282;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 38, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(MODLParser.EQUALS);
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 274;
        this.match(MODLParser.GTHAN);
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 275;
        this.match(MODLParser.GTHAN);
        this.state = 276;
        this.match(MODLParser.EQUALS);
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 277;
        this.match(MODLParser.LTHAN);
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 278;
        this.match(MODLParser.LTHAN);
        this.state = 279;
        this.match(MODLParser.EQUALS);
        break;

      case 6:
        this.enterOuterAlt(localctx, 6);
        this.state = 280;
        this.match(MODLParser.EXCLAM);
        this.state = 281;
        this.match(MODLParser.EQUALS);
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_conditionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_condition;
  return this;
}

Modl_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_conditionContext.prototype.constructor = Modl_conditionContext;

Modl_conditionContext.prototype.modl_value = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_valueContext);
  } else {
    return this.getTypedRuleContext(Modl_valueContext, i);
  }
};

Modl_conditionContext.prototype.STRING = function () {
  return this.getToken(MODLParser.STRING, 0);
};

Modl_conditionContext.prototype.modl_operator = function () {
  return this.getTypedRuleContext(Modl_operatorContext, 0);
};

Modl_conditionContext.prototype.FSLASH = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.FSLASH);
  } else {
    return this.getToken(MODLParser.FSLASH, i);
  }
};

Modl_conditionContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_condition(this);
  }
};

Modl_conditionContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_condition(this);
  }
};

Modl_conditionContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_condition(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_conditionContext = Modl_conditionContext;

MODLParser.prototype.modl_condition = function () {
  var localctx = new Modl_conditionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 38, MODLParser.RULE_modl_condition);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 285;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
    if (la_ === 1) {
      this.state = 284;
      this.match(MODLParser.STRING);
    }
    this.state = 288;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    if (
        (_la & ~0x1f) == 0 &&
        ((1 << _la) &
            ((1 << MODLParser.EQUALS) | (1 << MODLParser.GTHAN) | (1 << MODLParser.LTHAN) | (1 << MODLParser.EXCLAM))) !==
        0
    ) {
      this.state = 287;
      this.modl_operator();
    }

    this.state = 290;
    this.modl_value();
    this.state = 295;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.FSLASH) {
      this.state = 291;
      this.match(MODLParser.FSLASH);
      this.state = 292;
      this.modl_value();
      this.state = 297;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_condition_groupContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_condition_group;
  return this;
}

Modl_condition_groupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_condition_groupContext.prototype.constructor = Modl_condition_groupContext;

Modl_condition_groupContext.prototype.LCBRAC = function () {
  return this.getToken(MODLParser.LCBRAC, 0);
};

Modl_condition_groupContext.prototype.modl_condition_test = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(Modl_condition_testContext);
  } else {
    return this.getTypedRuleContext(Modl_condition_testContext, i);
  }
};

Modl_condition_groupContext.prototype.RCBRAC = function () {
  return this.getToken(MODLParser.RCBRAC, 0);
};

Modl_condition_groupContext.prototype.AMP = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.AMP);
  } else {
    return this.getToken(MODLParser.AMP, i);
  }
};

Modl_condition_groupContext.prototype.PIPE = function (i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(MODLParser.PIPE);
  } else {
    return this.getToken(MODLParser.PIPE, i);
  }
};

Modl_condition_groupContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_condition_group(this);
  }
};

Modl_condition_groupContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_condition_group(this);
  }
};

Modl_condition_groupContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_condition_group(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_condition_groupContext = Modl_condition_groupContext;

MODLParser.prototype.modl_condition_group = function () {
  var localctx = new Modl_condition_groupContext(this, this._ctx, this.state);
  this.enterRule(localctx, 40, MODLParser.RULE_modl_condition_group);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 298;
    this.match(MODLParser.LCBRAC);
    this.state = 299;
    this.modl_condition_test();
    this.state = 304;
    this._errHandler.sync(this);
    _la = this._input.LA(1);
    while (_la === MODLParser.AMP || _la === MODLParser.PIPE) {
      this.state = 300;
      _la = this._input.LA(1);
      if (!(_la === MODLParser.AMP || _la === MODLParser.PIPE)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
      this.state = 301;
      this.modl_condition_test();
      this.state = 306;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
    }
    this.state = 307;
    this.match(MODLParser.RCBRAC);
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_valueContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_value;
  return this;
}

Modl_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_valueContext.prototype.constructor = Modl_valueContext;

Modl_valueContext.prototype.modl_map = function () {
  return this.getTypedRuleContext(Modl_mapContext, 0);
};

Modl_valueContext.prototype.modl_array = function () {
  return this.getTypedRuleContext(Modl_arrayContext, 0);
};

Modl_valueContext.prototype.modl_nb_array = function () {
  return this.getTypedRuleContext(Modl_nb_arrayContext, 0);
};

Modl_valueContext.prototype.modl_pair = function () {
  return this.getTypedRuleContext(Modl_pairContext, 0);
};

Modl_valueContext.prototype.modl_primitive = function () {
  return this.getTypedRuleContext(Modl_primitiveContext, 0);
};

Modl_valueContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_value(this);
  }
};

Modl_valueContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_value(this);
  }
};

Modl_valueContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_value(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_valueContext = Modl_valueContext;

MODLParser.prototype.modl_value = function () {
  var localctx = new Modl_valueContext(this, this._ctx, this.state);
  this.enterRule(localctx, 42, MODLParser.RULE_modl_value);
  try {
    this.state = 314;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 43, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.modl_map();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 310;
        this.modl_array();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 311;
        this.modl_nb_array();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 312;
        this.modl_pair();
        break;

      case 5:
        this.enterOuterAlt(localctx, 5);
        this.state = 313;
        this.modl_primitive();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_array_value_itemContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_array_value_item;
  return this;
}

Modl_array_value_itemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_array_value_itemContext.prototype.constructor = Modl_array_value_itemContext;

Modl_array_value_itemContext.prototype.modl_map = function () {
  return this.getTypedRuleContext(Modl_mapContext, 0);
};

Modl_array_value_itemContext.prototype.modl_pair = function () {
  return this.getTypedRuleContext(Modl_pairContext, 0);
};

Modl_array_value_itemContext.prototype.modl_array = function () {
  return this.getTypedRuleContext(Modl_arrayContext, 0);
};

Modl_array_value_itemContext.prototype.modl_primitive = function () {
  return this.getTypedRuleContext(Modl_primitiveContext, 0);
};

Modl_array_value_itemContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_array_value_item(this);
  }
};

Modl_array_value_itemContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_array_value_item(this);
  }
};

Modl_array_value_itemContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_array_value_item(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_array_value_itemContext = Modl_array_value_itemContext;

MODLParser.prototype.modl_array_value_item = function () {
  var localctx = new Modl_array_value_itemContext(this, this._ctx, this.state);
  this.enterRule(localctx, 44, MODLParser.RULE_modl_array_value_item);
  try {
    this.state = 320;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 44, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.modl_map();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 317;
        this.modl_pair();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 318;
        this.modl_array();
        break;

      case 4:
        this.enterOuterAlt(localctx, 4);
        this.state = 319;
        this.modl_primitive();
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function Modl_primitiveContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = MODLParser.RULE_modl_primitive;
  return this;
}

Modl_primitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Modl_primitiveContext.prototype.constructor = Modl_primitiveContext;

Modl_primitiveContext.prototype.QUOTED = function () {
  return this.getToken(MODLParser.QUOTED, 0);
};

Modl_primitiveContext.prototype.NUMBER = function () {
  return this.getToken(MODLParser.NUMBER, 0);
};

Modl_primitiveContext.prototype.STRING = function () {
  return this.getToken(MODLParser.STRING, 0);
};

Modl_primitiveContext.prototype.TRUE = function () {
  return this.getToken(MODLParser.TRUE, 0);
};

Modl_primitiveContext.prototype.FALSE = function () {
  return this.getToken(MODLParser.FALSE, 0);
};

Modl_primitiveContext.prototype.NULL = function () {
  return this.getToken(MODLParser.NULL, 0);
};

Modl_primitiveContext.prototype.enterRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.enterModl_primitive(this);
  }
};

Modl_primitiveContext.prototype.exitRule = function (listener) {
  if (listener instanceof MODLParserListener) {
    listener.exitModl_primitive(this);
  }
};

Modl_primitiveContext.prototype.accept = function (visitor) {
  if (visitor instanceof MODLParserVisitor) {
    return visitor.visitModl_primitive(this);
  } else {
    return visitor.visitChildren(this);
  }
};

MODLParser.Modl_primitiveContext = Modl_primitiveContext;

MODLParser.prototype.modl_primitive = function () {
  var localctx = new Modl_primitiveContext(this, this._ctx, this.state);
  this.enterRule(localctx, 46, MODLParser.RULE_modl_primitive);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 322;
    _la = this._input.LA(1);
    if (
        !(
            (_la & ~0x1f) == 0 &&
            ((1 << _la) &
                ((1 << MODLParser.NULL) |
                    (1 << MODLParser.TRUE) |
                    (1 << MODLParser.FALSE) |
                    (1 << MODLParser.NUMBER) |
                    (1 << MODLParser.QUOTED) |
                    (1 << MODLParser.STRING))) !==
            0
        )
    ) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

exports.MODLParser = MODLParser;
