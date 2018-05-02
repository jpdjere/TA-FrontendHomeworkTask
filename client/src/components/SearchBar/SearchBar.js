import React from "react";
import './SearchBar.css';
import { connect } from "react-redux";
import { Redirect, Switch } from 'react-router-dom';
import { submitSearch, showLoader} from "../../actions"
import { Field, reduxForm } from 'redux-form';
import FA from "react-fontawesome";
import { withRouter } from 'react-router';


const validate = values => {
  const errors = {}
  if (!values.searchTerm) {
    errors.searchTerm = 'Required'
  } else if (values.searchTerm.length < 3) {
    errors.searchTerm = 'Must be 15 characters or less'
  }
  return errors
}

class SearchBar extends React.Component {
  constructor(props){
    super();
    this.submitNavigate = this.submitNavigate.bind(this);
  }

  submitNavigate(values){
    this.props.showLoader();
    this.props.submitSearch(values.searchTerm);
    this.props.history.push({
      pathname: '/',
      search: '?search='+values.searchTerm
    })
  };

  render(){
    const { handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(values => this.submitNavigate(values))}>
          <div className="searchbar__container">

            <Field
              component="input"
              type="text"
              name="searchTerm"
              className="searchbar__searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="searchbar__searchButton">
              SEARCH
              <FA className="searchbar__FA" name="search" />

            </button>

          </div>
        </form>
      </div>
    );

  }
}



let form = reduxForm({
  form: 'search',
  validate,
  destroyOnUnmount: true
})(SearchBar);

let reduxHOC = connect(null, {submitSearch, showLoader})(form);

export default withRouter(reduxHOC);
