import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal flex items-center justify-center p-6">
          <div className="glass-strong rounded-2xl p-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-accent-gold mb-4">Something went wrong</h1>
            <p className="text-text-secondary mb-4">
              The portfolio encountered an error. Please refresh the page.
            </p>
            {this.state.error && (
              <details className="mt-4">
                <summary className="text-text-muted cursor-pointer mb-2">Error details</summary>
                <pre className="bg-surface p-4 rounded text-sm text-text-secondary overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-accent-gold text-charcoal rounded-lg hover:bg-accent-gold-hover transition-colors focus-ring"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
