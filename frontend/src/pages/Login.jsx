import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    

    <div className='one'> 

        <label className='title'>Login</label>
        <div className='btn-text'> 
          <TextField sx={{margin:3, borderRadius:3}} type={'text'} id="filled-basic" label="Usuario" variant="outlined" />
          <TextField sx={{margin:3, borderRadius:3}} type={'password'} id="filled-basic" label="Contraseña" variant="outlined" />
          <Button sx={{margin:6, borderRadius:3}} variant="contained" href="#contained-buttons"> Link </Button>
            
              <div>
                  <NavLink to="/registro">
                    Registrate
                  </NavLink>
              </div>
              <div> 
                  <NavLink to="/olvide-clave">
                    Olvidaste la contraseña
                  </NavLink>
              </div>

        </div>
    </div>

  )
}

export default Login