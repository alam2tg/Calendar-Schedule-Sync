import { Outlet } from "react-router-dom"
import {
  ApolloClient,
  ApolloProvider
} from "@apollo/client"

function App() {
  

  return (
    <>
      <Outlet />
    </>
  )
}


export default App
