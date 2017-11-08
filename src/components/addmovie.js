import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieText: ""
    }
  }

  render() {
    return (
      <div className="col input-group">
        <input
        onChange={e => this.setState({movieText: e.target.value})}
        value={this.state.movieText}
        type="text" className="form-control" placeholder="Add a movie..." 
        />
        <span className="input-group-btn">
          <button
          onClick={(e) => {
            this.props.addMovie(this.state.movieText);
            this.setState({ movieText: ""});
          }}
          className="btn btn-secondary" type="button">Add movie</button>
        </span>
      </div>
    );
  }
};

export default AddMovie;

  

