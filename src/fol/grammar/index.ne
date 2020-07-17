@{%
    import lexer from '../lexer';
%}
@lexer lexer

input -> AtomicSentence

AtomicSentence ->
    %predicate %lParen %variable %rParen