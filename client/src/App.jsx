import { Outlet } from "react-router-dom"
// import {
//   ApolloClient,
//   ApolloProvider
// } from "@apollo/client"
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}


export default App
