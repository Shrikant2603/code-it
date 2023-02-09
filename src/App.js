import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import EditorComp from './components/EditorComp';
import Editor from '@monaco-editor/react';


function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script> 
          ${js}
        </script>
      </body>
    </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <div className="pane top-pane">
        
        <div className='editor-container '>
          <EditorComp displayName="HTML"/>
          <Editor
          height="40vh"
          defaultLanguage="xml"
          onChange={(value,event)=>setHtml(value)}
          defaultValue={html}
          theme='vs-dark'
          />
        </div>
        <div className='editor-container '>
          <EditorComp displayName="CSS"/>
          <Editor
          height="40vh"
          defaultLanguage="css"
          onChange={(value,event)=>setCss(value)}
          defaultValue={css}
          theme='vs-dark'
        />
        </div>
        <div className='editor-container '>
          <EditorComp displayName="JS"/>
          <Editor
          height="40vh"
          defaultLanguage="javascript"
          onChange={(value,event)=>setJs(value)}
          defaultValue={js}
          theme='vs-dark'
          />
        </div>
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;