import {useState, useEffect} from 'react';




const CreateAccountForm = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState();
    const [detail, setDetails] = useState([]);

    const submitForms = (e) =>{
        //prevent page reload
        // stop auto refresh 
        e.priventDefault();
        const enterInfo = {name: name, email: email, number: number, password: password}
        setDetails(...detail, enterInfo)
        console.log(enterInfo);
       
    }

    useEffect(() => {
        if(detail.length === 0){
            return;
        } else{
            localStorage.setItem("item", JSON.stringify(detail));
        }
    }, [detail]);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "number"){
            setNumber(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        

    }

    return(
        <div className="login_main_container ">
            
            <div className="crt_ac_container">
            <h2>CREACT ACCOUNT</h2>
                <form onSubmit={submitForms } className='form_btn'>
                    
                    <div className="create_ac_mrgn">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name"   required 
                        value={name}
                        onChange = {(e) => handleInputChange(e)}
                        />
                    </div>
                    
                    <div className="create_ac_mrgn">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required
                        value={email}
                        onChange = {(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="create_ac_mrgn ">
                        <label htmlFor="number">Mobile Number</label>
                        <input type="text" id="number" required
                        value={number}
                        onChange = {(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className="create_ac_mrgn">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" required
                        maxLength={8}
                        minLength={4}
                        value={password}
                        onChange = {(e) => handleInputChange(e)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {
                    detail.map((ele)=>{
                       return(
                        <div><p>ele.email</p></div>
                       ) 
                    })
                }

            </div>
        </div>
    );
}
export default CreateAccountForm;