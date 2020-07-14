// First Order Logic
export enum Quantifier {
    UNIVERSAL = '\u2200',
    EXISTENTIAL = '\u2203',
}
export enum Connective {
    NEGATION = '\u00AC',
    CONJUNCTION = '\u2227',
    DISJUNCTION = '\u2228',
    CONDITIONAL = '\u2192',
    BICONDITIONAL = '\u2194',
}
export enum Other {
    THEREFORE = '\u2234',
    TAUTOLOGY = '\u22A4',
    CONTRADICTION = '\u22A5',
}

// Util
export interface GenericObject<T> {
    [key: string]: T;
}
