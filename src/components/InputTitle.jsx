import React, { useState } from 'react';

const InputTitle = () => {
    const [text, setText] = useState('текст');

    return (
        <div>
            <h1>{text}</h1>
            <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
        </div>
    );
};

export default InputTitle;