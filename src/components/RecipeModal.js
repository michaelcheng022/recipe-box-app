import React from 'react';
import RecipeForm from '../forms/RecipeForm';
import Modal from 'react-modal';

const RecipeModal = (props) => {
  return(
    <div>
      <Modal
        isOpen={!!props.displayForm}
        contentLabel="Show Recipe Form"

      >
        <RecipeForm />
      </Modal>
    </div>
  );
}

export default RecipeModal;