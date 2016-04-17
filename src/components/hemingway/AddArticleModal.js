import React from 'react';
import { Modal } from 'react-bootstrap';

const AddArticleModal = React.createClass({

  handleSubmit() {
    let topic = this.refs["topic"].value.trim();
    let subtopic = this.refs["subtopic"].value.trim();
    let url = this.refs["url"].value.trim();
    this.props.addArticle({ topic: topic, subtopic: subtopic, url: url });
    this.hideModal();
  },

  hideModal() {
    this.props.hide();
  },

  render() {
    return(
      <Modal show={ this.props.show } onHide={ this.hideModal }>
        <Modal.Header>
          <button className="close" onClick={ this.hideModal }><span aria-hidden="true">&times;</span></button>
          <h1>Add Article</h1>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control" ref="topic" placeholder="Topic"/>
          <input className="form-control" ref="subtopic" placeholder="Subtopic"/>
          <input className="form-control" ref="url" placeholder="URL"/>
          <div className="btn" onClick={ this.handleSubmit }>Add Article</div>
        </Modal.Body>
        <Modal.Footer/>
      </Modal>
    )
  }
});

export default AddArticleModal;
