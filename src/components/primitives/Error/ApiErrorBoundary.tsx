import { AxiosError } from 'axios';
import { Component, ReactNode } from 'react';

type Props = {
  serverFallback?: ReactNode;
  clientFallback?: ReactNode;
  children: ReactNode;
};

type StateType = {
  serverError: boolean;
  clientError: boolean;
};

class ApiErrorBoundary extends Component<Props, StateType> {
  constructor(props: Props) {
    super(props);
    this.state = { serverError: false, clientError: false };
  }

  static getDerivedStateFromError(error: AxiosError) {
    if (error.response && error.response.status >= 500) {
      return { serverError: true, clientError: false };
    }
    if (error.response && error.response.status >= 400) {
      return { serverError: false, clientError: true };
    }
    return { serverError: false, clientError: false };
  }

  componentDidCatch(error: AxiosError) {
    console.error(error);
  }

  render() {
    if (this.state.serverError) {
      return this.props.serverFallback;
    }
    if (this.state.clientError) {
      return this.props.clientFallback;
    }
    return this.props.children;
  }
}

export default ApiErrorBoundary;
