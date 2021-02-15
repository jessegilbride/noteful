import React, { Component } from 'react'

export class ErrorBoundaryPageMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Could not display NotePageMain component.</h2>
      );
    }
    return this.props.children;
  }

}

export default ErrorBoundaryPageMain
