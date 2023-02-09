import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const EditorComp = (props) => {
    
    const [open, setOpen] = useState(true)
    
  return (
    <div>
      <div className={`${open ? '' : 'collapsed'}`}>
        <div className="editor-title">
          {props.displayName}
          <button
            type="button"
            className="expand-collapse-btn"
            onClick={() => setOpen(prevOpen => !prevOpen)}
          >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      {/* <Editor
        height="40vh"
        defaultLanguage={language}
        onChange={(event, value) => handleChange(value)}
        defaultValue={inputValue}
      /> */}
        
    </div>
    </div>
  )
}

export default EditorComp