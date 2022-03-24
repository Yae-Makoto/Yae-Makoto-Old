import { BrowserRouter, Route, Routes } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './Antd.less';
import './App.less';
import ThemeProvider from './services/Context/Theme';
import 'antd/dist/antd.css';
import Scrollbar from './components/Scrollbar';
import Cover from './pages/Cover';
import Info from './pages/Info';
import ContextProvider from './services/Context/Context';
import Settings from './components/Settings';
import Note from './pages/Note';
import Project from './pages/Project';
import Music from './pages/Music';
import Video from './pages/Video';
import Test from './pages/Test';
import FootPrint from './pages/FootPrint';

export default function App() {

    smoothscroll.polyfill();

    return (
        <ThemeProvider>
            <ContextProvider>
                <div className="App">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Cover />} />
                            <Route path="/info" element={<Info />} />
                            <Route path="/note" element={<Note />} />
                            <Route path="/app" element={<Project />} />

                            <Route path="/music" element={<Music />} />
                            <Route path="/video" element={<Video />} />

                            <Route path="/footprint" element={<FootPrint />} />
                            <Route path="*" element={<Test />} />
                        </Routes>
                    </BrowserRouter>
                    <Settings />
                </div>
                <Scrollbar />
            </ContextProvider>
        </ThemeProvider>
    );
}