import React from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import Editor from './Editor'

function App() {
  const initialState = `
  
  # Heading
  ## Heading 2
  
  This **word** is bold.

  ## List:
  - list item 1
  - list item 2
  - list item 3

  ## Inline code: \`<p>Hello World!</p>\`

  ## Blockquote:
  > Dorothy followed her through many of the beautiful rooms in her castle.

  ## Multi-line code:
  \`\`\`
  const arr1 = [1, 5, 6];
  const arr2 = [7, 8, 9, 9, 9];
  const mergeResult = [...arr1, ...arr2];
  \`\`\`

  My website is: [Sabau Adrian Website](https://sabauadrian.website).

  ## Image of Markdown Logo
  ![Markdown](https://cdn0.iconfinder.com/data/icons/octicons/1024/markdown-512.png)
`
  
  const [content, setContent] = React.useState(initialState)
  const handleTextChange = (event) => {
    setContent(event.target.value)
  }

  return (
    
    <div className="container">
      <div>
        <h1>Markdown Previewer</h1>
      <div className="headers"> 
        <h2>Editor:</h2>
        <h2>Preview:</h2>
      </div>
      </div>
      <div className="previewContainer">
        <div><Editor content={content} handleTextChange={handleTextChange}/></div>
        <div id="preview"><ReactMarkdown>{content}</ReactMarkdown></div>
      </div>
    </div>
    
  )
}

export default App