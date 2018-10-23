import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/categoryForm';
import * as categoryActions from '../../actions/category';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryDestroy,
      categoryUpdate,
    } = this.props;
    return (
      <div className='category' key={key}>
        <p>_____________________________________________________________________________________</p>
        <h3> Category: <strong>{category.name}</strong> | |  Budget: ${category.budget}</h3>
        <div className='category-display'>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button className='deleteButton' onClick={() => categoryDestroy(category)}> Delete </button>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
