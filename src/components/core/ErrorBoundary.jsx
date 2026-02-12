import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            const isDev = import.meta.env.DEV;
            return (
                <div className="p-8 bg-red-50 text-red-900 h-screen flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
                    {isDev ? (
                        <pre className="bg-red-100 p-4 rounded overflow-auto max-w-2xl">
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    ) : (
                        <p className="text-gray-600">Please refresh the page or contact support if the issue persists.</p>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
