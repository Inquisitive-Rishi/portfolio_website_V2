import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BlogPage from './blogs/BlogPage'
import ProjectsPage from "./projects/ProjectsPage"
import App from "../App"
import Homepage from "./Homepage"
import Github from "./Github"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        { index: true, element: <Homepage/> },
        { path: "blogs", element: <BlogPage/> },
        { path: "projects", element: <ProjectsPage/> },
        { path: "github", element: <Github/> }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}
