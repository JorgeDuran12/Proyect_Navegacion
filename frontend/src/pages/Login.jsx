import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';


const Login = () => {
  return (

    <div className='padre'>

        <h1>Login</h1>

        <form method="post">
 
          <label htmlFor="usuario">Usuario</label>
          <input type="text" required />

          <label htmlFor='pass'>Contraseña</label>
          <input type="password" required></input>

          <NavLink to="/olvide-clave">
                Olvidaste la contraseña?
          </NavLink>

          <input type="submit" value="Ingresar" />

              <NavLink to="/registro">
                Registrate
              </NavLink>
      
              
        


        </form>

      </div>

               
  )
}

export default Login