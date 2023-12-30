import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../components/Todo";
import Detail from "../components/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todo />}/>
                <Route path="/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;