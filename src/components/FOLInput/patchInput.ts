import { Quantifier, Connective, GenericObject } from '../../types';

const charsToReplace = /(\!)|(\@)|(\#)|(\<\-\>)|(\-\>)|(\|)|(\&)/g;
const replacementMap: GenericObject<string> = {
    '@': Quantifier.UNIVERSAL,
    '#': Quantifier.EXISTENTIAL,
    '!': Connective.NEGATION,
    '->': Connective.CONDITIONAL,
    '<->': Connective.BICONDITIONAL,
    '|': Connective.DISJUNCTION,
    '&': Connective.CONJUNCTION,
};
const handleReplace = (match: string) => {
    const replacement = replacementMap[match];
    if (replacement === undefined) {
        throw new Error('Hotkey was inputted, but had no matching symbol');
    }
    return replacement;
};

export default function patchInput(value: string) {
    return value.replace(charsToReplace, handleReplace);
}
