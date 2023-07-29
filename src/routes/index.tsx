import {Routes, Route,Navigate} from 'react-router-dom'
import { useDrawerContext } from '../shared/contexts'
import {Button} from"@mui/material"
export const AppRoutes = ()=> {
    const {toggleDrawerOpen}= useDrawerContext()
    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Button onClick={toggleDrawerOpen}  >Toggle Buton</Button>}/>
            <Route path='*' element={<Navigate to='/pagina-inicial'/>}/>
        </Routes>
    )
}