import React, { Component } from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    window.location.reload(true);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      window.location.reload(true);
    }

    return this.props.children; 
  }
}