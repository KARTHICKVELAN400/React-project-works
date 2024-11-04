ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;


App.js
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import List from './List';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ErrorBoundary>
      <List items={items} />
    </ErrorBoundary>
  );
};

export default App;
