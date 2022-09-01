import React, { Fragment} from 'react';

import searchIcon from '../../../assets/images/search-icon.svg'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Search(props) {
    return (
        <Fragment>
            <img alt="Search icon" className="me-3" style={{ width: '42px' }} src={searchIcon} />
            <FloatingLabel controlId="floatingSearch" label="Pesquise...">
                <Form.Control 
                className="search" 
                type="text" 
                placeholder="Nota..." 
                onChange={(e) => props.searchNotes(e.target.value)}
                />
            </FloatingLabel>
        </Fragment>
    )
}

export default Search;