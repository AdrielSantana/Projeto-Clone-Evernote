import React, { useState, useEffect, Fragment } from "react";

import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import List from './list'
import NotesService from "../../services/notes";
import Editor from './editor'

import { push as Menu } from 'react-burger-menu'

import slideBg from '../../assets/images/slide-bg.svg'
import slidePointer from '../../assets/images/slide-pointer.svg'
import addNote from '../../assets/images/add-note.svg'


import '../../assets/styles/notes.scss'


const Notes = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const response = await NotesService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([])
            setCurrentNote({ title: "Comece criando uma nota!", body: "", id: "" })
        }
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id === id;
        })
        setCurrentNote(note);
    }

    const createNote = async () => {
        // eslint-disable-next-line
        const note = await NotesService.create();
        fetchNotes();
    }

    const deleteNote = async (note) => {
        await NotesService.delete(note._id);
        fetchNotes();
    }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NotesService.update(oldNote._id, params);
        const index = notes.indexOf(oldNote);
        const newNotes = notes;
        newNotes[index] = updatedNote.data;
        setNotes(newNotes);
        setCurrentNote(updatedNote.data);
    }

    return (
        <Fragment>

            <Row className="m-0">
                <div className="menu-div">
                    <Menu
                        pageWrapId={"slide"}
                        isOpen={isOpen}
                        onStateChange={(state) => setIsOpen(state.isOpen)}
                        disableAutoFocus
                        customBurgerIcon={false}
                    >


                        {<Container className="d-flex justify-content-center">
                            <Row className="nunito color-white" style={{ width: '294px' }}>
                                <Col xs={12}>
                                    <p>Search...</p>
                                </Col>
                                <Col xs={12}>
                                    <p>
                                        <Button className="add-note" variant="none" onClick={() => createNote()}>
                                            <img className="add-note-icon" alt="Add Note" src={addNote} />
                                        </Button>
                                        {notes.length} Notas
                                    </p>

                                </Col>
                                <Col xs={12}>
                                    <List
                                        notes={notes}
                                        selectNote={selectNote}
                                        current_note={current_note}
                                        deleteNote={deleteNote}
                                    />
                                </Col>
                            </Row>
                        </Container>}
                    </Menu>
                </div>

                <Row xs={12} className='p-0' id="slide">
                    <Col className="d-flex justify-content-between">
                        <Button onClick={() => setIsOpen(true)} className="d-flex justify-content-center align-items-center button-sider-bar" variant="none" style={{
                            backgroundImage: `url(${slideBg})`
                        }}>
                            <img alt="Slide Icon" className="side-bar" src={slidePointer}

                                style={!isOpen ? {
                                    transform: 'rotate(180deg)',
                                    transition: '0.5s'
                                } : {
                                    transform: 'rotate(0deg)',
                                    transition: '0.5s'
                                }
                                }

                            />
                        </Button>
                        <p className="mb-0 courgette justify-self-center fs-3 align-self-center">
                            {current_note.title}
                        </p>
                        <div/>
                    </Col>
                        <Container className='p-0 notes-editor'>
                            <Editor 
                            note={current_note}
                            updateNote={updateNote} 
                            />
                        </Container>
                </Row>
            </Row>

        </Fragment >
    )
}

export default Notes