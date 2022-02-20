import axios from 'axios'
import { useState } from 'react';
export default function Form(){
const [state, setState] =useState('test')
const [title,setTitle] =useState(true)
console.log(state)
    function formSubmit(e){
        
            e.preventDefault();
            alert('button is subbmited') ; 
        
    }
    function formClicked(){
        // alert('form is klicked')
        setTitle(!title)
    }
    return(
        <>
       { title
        ?
        <h2>Form title</h2> :
        null}
        <form action="submit-form" onSubmit={formSubmit}>
            <textarea />
            <br/>
            <input value={state} onChange ={(e)=>{setState(e.target.value)}}/>
            <br/>
            <button type="button" onClick={formClicked}>Submit</button>
        </form>
        </>
    )
}