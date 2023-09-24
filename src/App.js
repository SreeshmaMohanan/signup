import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [verpass, setverpass] = useState("");
  const [isnameValid ,setIsnameValid] = useState(true)
  const [ismailValid ,setIsmailValid] = useState(true)
  const [isverpassValid ,setIsverpassValid] = useState(true)

  const handleInput = (e) => {
    e.preventDefault();
    if (!name || !mail || !password || !verpass) {
      alert("Please fill the form completly!!");
    } else {
      alert(`
                Name : ${name}

                E-Mail : ${mail}

                Password : ${password} 
      `);
    }
  };
  const validateInput=(e)=>{
    const {name,value}=e.target
    if(name==="name")
    {
      if(value.match(/^[a-zA-Z ]+$/)){
        setName(value)
        setIsnameValid(true)
    }else{
      setName(value)
      setIsnameValid(false)
    }
   } else if( name==="mail"){
    if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      setMail(value)
      setIsmailValid(true)
    }else{
      setMail(value)
      setIsmailValid(false)
    }
      
    } else if (name==="password"){
      setPassword(value)
    } else {
      if(value===password)
     { setIsverpassValid(true)
      setverpass(value)}
      else{
        setIsverpassValid(false)
      setverpass(value)
      }

    }


  }

  return (
    <div className='containe d-flex justify-content-center align-items-center '>
      <div style={{backgroundColor:'white',width:'500px'}} className=' text-center rounded mb-5'>
        <h1 className='mb-5 mt-3'>Register</h1><hr />
       <form onSubmit={handleInput}>
       <div>
       <TextField
            className="m-3 w-75"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={name ||""}
            onChange={(e)=>validateInput(e)}
          />
          </div>
          {
            !isnameValid &&
            <div className="fs-6 text-danger">
              Name doesn't match !
            </div>
          }
          <div>
          <TextField
            className="m-3 w-75"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="mail"
            onChange={(e)=>validateInput(e)}
          />
          </div>
          {
            !ismailValid &&
            <div className="fs-6 text-danger">
              Invalid format
            </div>
          }
          <div>
          <TextField
            className="m-3 w-75"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            onChange={(e)=>validateInput(e)}
          />
          </div>

          <div>
          <TextField
            className="m-3  w-75"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            name="verpass"
            onChange={(e)=>validateInput(e)}
          />
          </div>
          {
            !isverpassValid &&
            <div className="fs-6 text-danger">
             invalid input
            </div>
          }
          <button disabled={isnameValid && ismailValid && isverpassValid ?false : true} className='' style={{width:'400px',height:'50px',color:'white',backgroundColor:'black',fontWeight:'bold',borderRadius:'50px',marginBottom:'10px'}}>Sign Up</button>
          
          <p className='mb-5'>Have an account?<span style={{color:'blue'}} >Login Here.</span></p>
       </form>
        

      </div>
      
    </div>
    
  );
}

export default App;
