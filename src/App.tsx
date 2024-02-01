import './App.css'
import {HomePage} from "./UI/Pages/HomePage.tsx";
import {ApiDataProvider} from "./UI/Context/ApiDataProvider.tsx";
import {Route, Routes} from "react-router-dom";
import {BookingPage} from "./UI/Pages/BookingPage.tsx";

function App() {



          //{console.log(data)}
  return (
    <>
      <ApiDataProvider >
          <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/:id" element={<BookingPage/>}></Route>
          </Routes>
      </ApiDataProvider>
    </>
  )
}

export default App
