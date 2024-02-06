import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BlogPage from './blogs/BlogPage'
import ProjectsPage from "./projects/ProjectsPage"
import App from "../App"
import Homepage from "./Homepage"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
        { index: true, element: <Homepage/> },
        { path: "blogs", element: <BlogPage/> },
        { path: "projects", element: <ProjectsPage/> }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}
