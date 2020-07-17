import moo from 'moo';
import { Quantifier, Connective } from '../types';

export default moo.compile({
    quantifier: [Quantifier.UNIVERSAL, Quantifier.EXISTENTIAL],
    variable: /[a-z]/,
    constant: /[a-z]*/,

    predicate: /[A-Z][A-Za-z]*/,
    negation: Connective.NEGATION,
    connective: [
        Connective.BICONDITIONAL,
        Connective.CONDITIONAL,
        Connective.CONJUNCTION,
        Connective.DISJUNCTION,
    ],

    lParen: '(',
    rParen: ')',
    lBracket: '[',
    rBracket: ']',
});
