import moo from 'moo';
import { Quantifier, Connective } from '../types';

export default moo.compile({
    quantifier: [Quantifier.UNIVERSAL, Quantifier.EXISTENTIAL],
    variable: /[a-z]/,

    predicate: /[A-Z][A-Za-z]*/,
    connective: [
        Connective.BICONDITIONAL,
        Connective.CONDITIONAL,
        Connective.CONJUNCTION,
        Connective.DISJUNCTION,
        Connective.NEGATION,
    ],

    lParen: '(',
    rParen: ')',
    lBracket: '[',
    rBracket: ']',
});
