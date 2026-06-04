import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { CaseStudyLayout } from '../components/home/HomeSections'
import { getProjectBySlug } from '../data/site'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    document.title = project
      ? `${project.name} | Code Brand Studio`
      : 'Project Not Found | Code Brand Studio'
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-ink text-frost">
      <Navbar />
      <CaseStudyLayout {...project} />
      <Footer />
    </div>
  )
}
