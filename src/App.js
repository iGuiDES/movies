import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MainLayout} from "./layouts";
import './App.css';

const App = () => {
    
    return (
        <div >
            <MainLayout />
            <div className='wrapper'>
                <MoviesPage />
            </div>
        </div>
    )
}

export {
    App
}