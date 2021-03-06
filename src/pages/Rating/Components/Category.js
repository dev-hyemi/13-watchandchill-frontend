import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { actionCreators } from "../../../store";

class Category extends Component {
  
  componentDidMount() {
    window.addEventListener("click", this.props.handleClickOutside);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.props.handleClickOutside);
  }

  categoryClick = category => {
    this.props.ChangeCategory(category);
    this.props.handleModal();
  };

  render() {
    const { handleModal, categories } = this.props;
    return (
      <div className="Category">
        <div>
          <header>
            <CloseOutlined onClick={handleModal} className="CloseBtn" />
            <h3>영화</h3>
          </header>
          <div>
            <ul className="CategoryList">
              <p>장르</p>
              {categories.genres.map(category => (
                <li
                  key={category.id}
                  onClick={() => this.categoryClick(category)}
                >
                  {category.genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    ChangeCategory: category =>
      dispatch(actionCreators.ChangeCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
