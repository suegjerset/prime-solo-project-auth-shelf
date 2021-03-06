import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';

const AddPage = (props) => { /* This is a FUNCTIONAL COMPONENT with an ONCHANGE EVENT using useState from 'react' */
    //setUrl and setDescription are the function. url and description are the 'name' called from the name field input.
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    // console.log('This is our onChange description:', description);
    // console.log('This is our onChange url:', url);
    return(
        <div>
            <input name="description" onChange={(event)=> setDescription (event.target.value)} type="text" placeholder="description of image" />
            <input name="url" onChange={(event)=> setUrl (event.target.value)}type="text" placeholder="url of image" />
            <button onClick={()=> (props.dispatch({type: "POST_ITEM", payload: {description: description, url: url}}))}>Add To Shelf</button>
        </div>
    )

};//end AddPage

const putPropsOnRedux = reduxState => ({ reduxState });
export default connect(putPropsOnRedux)(AddPage);
