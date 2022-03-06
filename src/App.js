import { BrowserRouter, Route, Routes } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './Antd.less';
import './App.less';
import { Favorite } from './components/pages/Contents/ContentPages/MediaPages';
import { Notes, Works } from './components/pages/Contents/ContentPages/MarkdownPages';
import Self from './components/pages/Contents/ContentPages/Self';
import Cover from './components/pages/Cover/Cover';
import ContextProvider from './services/Context/Context';

export default function App() {

    smoothscroll.polyfill();

    return (
        <ContextProvider>
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
        </ContextProvider>
    );
}