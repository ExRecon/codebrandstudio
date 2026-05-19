import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CustomCursor } from './components/layout/CustomCursor'
import { ScrollProgress } from './components/layout/ScrollProgress'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CustomCursor />
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-ink text-frost">
            <div className="space-y-3 text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border border-white/20 border-t-cyan-300" />
              <p className="text-sm uppercase tracking-[0.32em] text-white/55">
                Loading experience
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
    </BrowserRouter>
  )
}

export default App
