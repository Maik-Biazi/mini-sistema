import { Avatar, Box, Drawer, useTheme, Divider } from "@mui/material"
import { deepOrange } from "@mui/material/colors"

interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme()
    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ bgcolor: deepOrange[500], height: theme.spacing(12), width: theme.spacing(12) }}>M</Avatar>
                    </Box>
                    <Divider />
                    <Box flex={1}>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}