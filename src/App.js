import React from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import Editor from './Editor'

function App() {
  const initialState = `
  This is a paragraph
  
  # Heading
  ## Heading 2
  
  This **word** is bold.

  - list item 1
  - list item 2
  - list item 3

  This is a inline code: \`<p>Hello World!</p>\`

  This is a blockquote:
  > Dorothy followed her through many of the beautiful rooms in her castle.

  this is multi-line code:
  \`\`\`
  const arr1 = [1, 5, 6];
  const arr2 = [7, 8, 9, 9, 9];

  const mergeResult = [...arr1, ...arr2];
  \`\`\`

  My website is: [Sabau Adrian Website](https://sabauadrian.website).

  This is me:
  ![Me!](https://sabauadrian.website/static/media/Linkedin.1b2a446586de178a7840.png)
`
  // a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
  const [content, setContent] = React.useState(initialState)
  const handleTextChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className="container">
      <div><Editor content={content} handleTextChange={handleTextChange}/></div>
      <div id="preview"><ReactMarkdown>{content}</ReactMarkdown></div>
      
    </div>
    
  )
}

export default App