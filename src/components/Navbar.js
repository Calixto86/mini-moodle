import { Style } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

    const autenticado = true

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    {autenticado ?
                    <Toolbar>
                        <Typography variant='h5' sx={{ flexGrow: 1, color: '#772E8D'}}>
                            Study Group
                        </Typography>
                        <Button variant='contained' color='secondary' onClick={() => navigate('/')}>
                            Home
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ marginLeft: '2rem' }} onClick={() => navigate('/personal area')}>
                            Personal area
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ marginLeft: '2rem' }} onClick={() => navigate('/profile')}>
                            My profile
                        </Button>
                        <Button variant='contained' color='secondary' sx={{ marginLeft: '2rem' }} onClick={() => navigate('/')}>
                            Sign off
                        </Button>
                    </Toolbar>
                    :
                    <Toolbar>
                        <Typography variant='h5' sx={{ flexGrow: 1, color: '#772E8D'}}>
                            Study Group
                        </Typography>
                        <Button variant='contained' color='secondary' onClick={() => navigate('/Log in')}>
                            Log in
                        </Button>
                    </Toolbar>
}
                </Container>
            </AppBar>
        </Box>
    )
}