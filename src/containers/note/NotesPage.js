import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { fetchNotes } from '../../actions/notes';

class NotesPage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNotes());
  }

  render() {
    const { notesList } = this.props;
    const notesListBlock = notesList.map( ( note, index ) => (
      <li className="note-in-list" key={ `note-left-${index}`} >
        { note.title }
      </li>

    ))
    return (
      <div className="row">
        <div className="notes-list col-md-4">
          <ul>
            { notesListBlock }
          </ul>
        </div>
      </div>

    );
  }
}


NotesPage.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

NotesPage.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return {
    notesList: notes ? notes.list : null,
  };
};

export default connect(
  mapStateToProps
)(NotesPage);
