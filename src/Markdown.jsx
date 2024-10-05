
import ReactMarkdown from 'react-markdown';
import React, {useState} from 'react';
function Markdown(){

const [markdown, setMarkdown] = useState(" #Markdown preview  **hello**")
const handle = (event)=>{
    setMarkdown(event.target.value)
}
return(
    <>
        <textarea id="editor" value={markdown} onChange={handle}>

        </textarea>
        <div id="preview" className='result'> 
            
        <ReactMarkdown>{markdown}</ReactMarkdown>

        </div>
    </>
)


}
export default Markdown