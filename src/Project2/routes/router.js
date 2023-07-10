import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import MuiForm from "../components/muiForm";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
           
            <Route path="login" element={<MuiForm />} />
        </Route>
    )
)