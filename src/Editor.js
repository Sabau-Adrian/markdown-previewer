import React from "react";



function Editor({content, handleTextChange}) {
    return (
        <textarea id="editor" value={content} onChange={handleTextChange}/>
    )
}

export default Editor