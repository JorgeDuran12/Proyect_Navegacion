import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    
    <div>
      
 
      <div>Login<div>

      <div>

      <TextField id="filled-basic" label="Usuario" variant="filled" />
      <TextField id="filled-basic" label="Contraseña" variant="filled" />
      <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        
      </div>

      </div> 


        <div>
          <NavLink to="/registro">
            Registrate
          </NavLink>
        </div> 

        <div>
          <NavLink to="/olvide-clave">
            Olvide Clave
          </NavLink>
        </div>      

      </div>

    </div>

  )
}

export default Login