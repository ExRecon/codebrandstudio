import { Suspense, lazy } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center bg-ink text-frost">
              <div className="space-y-3 text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border border-white/20 border-t-cyan" />
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Loading
                </p>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  )
}

export default App
