import React, { Component } from "react";
import { fetchMovieCast } from "../../services/Api";
import CastList from "../CastList/CastList";
import PropTypes from 'prop-types';

class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    this.getCasts();
  }

  getCasts = () => {
    fetchMovieCast(this.props.match.params.id)
      .then(({ data }) =>
        this.setState({
          casts: [...data.cast],
        })
      )
      .catch((error) => console.log(error));
  };

  render() {
    const { casts } = this.state;
    return <>{casts && <CastList casts={casts} />}</>;
  }
}

export default Cast;


Cast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}