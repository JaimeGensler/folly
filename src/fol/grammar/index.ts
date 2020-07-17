import lexer from '../lexer';

export default {
    Lexer: lexer,
    ParserRules: [
        {
            name: 'AtomicSentence',
            symbols: [
                lexer.has('predicate') ? { type: 'predicate' } : undefined,
                lexer.has('lParen') ? { type: 'lParen' } : undefined,
                lexer.has('variable') ? { type: 'variable' } : undefined,
                lexer.has('rParen') ? { type: 'rParen' } : undefined,
            ],
        },
    ],
    ParserStart: 'AtomicSentence',
};
