import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Login from './features/auth/Login'
import Public from './components/Public'
import RequireAuth from './features/auth/RequireAuth'
import Welcome from './features/auth/Welcome'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Public />} />
                <Route path="login" element={<Login />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Welcome />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
