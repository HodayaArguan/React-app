// import { createBrowserRouter } from "react-router";
import { createBrowserRouter } from 'react-router-dom';
import About from "../pages/About";
import Contact from "../pages/Contact";
import UserLayout from "../components/UserLayout";
import Form from "../pages/users/Form";
import UserDetails from "../pages/users/UserDetails";
import UserList from "../pages/users/UserList";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { AppLayaout } from "../components/AppLayaout";
import CountryList from "../pages/countries/CountryList";
import CountriesDetails from "../pages/countries/CountriesDetails";


const router = createBrowserRouter([
    {
        element: <AppLayaout />, children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            {
                path: "users", element: <UserLayout />, children: [
                    { index: true, element: <UserList /> },
                    { path: "insert", element: <Form /> },
                    { path: ":userName", element: <UserDetails /> }
                ]
            },
            {
                path: "countries", children: [
                    {index: true, element: <CountryList/>},
                    {path: ":countryId", element: <CountriesDetails/>}
                ]
            },
            { path: "*", element: <NotFound /> }
        ]
    }
])

export default router