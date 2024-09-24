import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import NewPost from "./NewPost";
import Header from "./Header";
import PostPage from "./PostPage";
import Footer from "./Footer";
import Missing from "./Missing";
import Nav from "./Nav";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

function App() {



  return (
    <BrowserRouter>
      <div className="App">
     
          <Header title="React JS Blog" />
          <DataProvider>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home 
                />}/>
            <Route path="post" element={<NewPost/>} />
            <Route path="edit/:id" element={<EditPost />} />

            <Route path="/post/:id" element={<PostPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing/>} />
          </Routes>
          </DataProvider>
          <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
