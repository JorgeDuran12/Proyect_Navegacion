import { NavLink } from 'react-router-dom';


const Login = () => {

  const Submit = (e) => {
    e.preventDefault();

  }

  return (

    <div id='padre'>
    

        <h1>Login</h1>

        <form method='post'>
 
          <label htmlFor="usuario">Usuario</label>
          <input type="text" required />

          <label htmlFor='pass'>Contraseña</label>
          <input type="password" required></input>

          <div id='nv-pass'>
              <NavLink to="/olvide-clave" className="nv-pass">
                    Olvidaste la contraseña?
              </NavLink>
          </div>

          <div id='btn'>
              <button type='submit' onClick={Submit}>Ingresar</button>
          </div>
         
          <div id='nv-register'>
              <NavLink to="/registro" className="nv-register">
                ¿No tienes cuenta? Registrate
              </NavLink>
          </div>
  
              
        


        </form>

      </div>

               
  )
}

export default Login