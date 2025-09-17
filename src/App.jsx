import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { routes } from './route/routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(route => {
            const Layout = route.layout
            const Page = route.element
            const element = Layout ? <Layout> <Page/> </Layout> : <Page/>

            return (
              <Route key={route.path} path={route.path} element={element} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
