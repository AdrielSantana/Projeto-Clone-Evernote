import React, { Fragment } from 'react'
import Moment from 'moment'

import '../../../assets/styles/note.scss'

import divisorNote from '../../../assets/images/divisor-note.svg'
import deleteIcon from '../../../assets/images/delete.svg'

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/esm/Button'

function ListNotes(props) {
  return (
    <Fragment>
      <Stack gap={3} className="d-flex align-items-center justify-content-start notes-list">

        {props.notes.map((item, key) =>
          <div key={key} onClick={() => props.selectNote(item._id)} className={(item === props.current_note) ? 'courgette color-purple-darker orange-gradient-bg note-card' : 'courgette color-white purple-gradient-bg note-card'}>
            <p className='title-note fs-5'>
              {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
            </p>
            <img alt='divisor' className='divisor-note' src={divisorNote} />
            <p className='fs-6'>
              {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
            </p>
            <p className='d-flex justify-content-between'>
              {Moment(item.created_at).format('DD/MM')}
              <Button className='delete-button' variant="none" onClick={() => props.deleteNote(item)}>
                <img src={deleteIcon} className='delete-icon' alt='Delete' />
              </Button>
            </p>
          </div>
        )}

      </Stack>
    </Fragment>
  )
}

export default ListNotes