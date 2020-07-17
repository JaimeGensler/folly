import React, { useState } from 'react';
import interpretInput from './parseInput';
import { Editor, EditorState } from 'draft-js';

const styles = {
    width: 500,
    height: 100,
    border: '1px solid red',
    margin: '5rem auto',
    cursor: 'text',
};
export default function LogicInput() {
    const [input, setInput] = useState(() => EditorState.createEmpty());
    return <Editor editorState={input} onChange={setInput} />;
}
