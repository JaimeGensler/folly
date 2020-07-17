import nearley from 'nearley';
import grammar from './grammar';

export default new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
