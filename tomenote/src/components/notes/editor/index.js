import React, { Fragment, useState, useEffect } from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

function Editor(props) {
    const [currentContent, setCurrentContent] = useState('')
    const [timer, setTimer] = useState(null)

    const updateNote = (content) => {
        const title = content.replace(/(<([^>]+)>)/ig, "").slice(0, 23);
        props.updateNote(props.note, { 'title': title, 'body': content })
    }

    const handleChange = (content, delta, source) => {
        clearTimeout(timer)
        if (source === 'user') {
            setCurrentContent(content)
            setTimer(setTimeout(() => updateNote(content), 2000))
        }
    }

    useEffect(() => {
        setCurrentContent(props.note.body)
    }, [props.note])

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'header': [1, 2, 3, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'align': [] }],

            ['clean']
        ]
    }

    return (
        <Fragment>
            <ReactQuill value={currentContent} modules={modules} onChange={handleChange} />
        </Fragment>
    )
}

export default Editor;