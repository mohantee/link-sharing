import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<h1>Register</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="app" element={<h1>App</h1>}>
          <Route path="links" element={<h1>Links</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="preview" element={<h1>Preview</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
