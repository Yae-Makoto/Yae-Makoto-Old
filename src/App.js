import { BrowserRouter, Route, Routes } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './Antd.less';
import './App.less';
import Favorite from './components/pages/Contents/ContentPages/Favorite';
import Notes from './components/pages/Contents/ContentPages/Notes';
import Self from './components/pages/Contents/ContentPages/Self';
import Works from './components/pages/Contents/ContentPages/Works';
import Cover from './components/pages/Cover/Cover';

export default function App() {

    smoothscroll.polyfill();

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Cover />} />
                    <Route path="/self" element={<Self />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}