import {Routes, Route,Navigate} from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts'
export const AppRoutes = ()=> {
    const {toggleTheme}= useAppThemeContext()
    return (
        <Routes>
            <Route path='/pagina-inicial' element={<p>Pagina Inicial</p>}/>
            <Route path='*' element={<Navigate to='/pagina-inicial'/>}/>
        </Routes>
    )
}