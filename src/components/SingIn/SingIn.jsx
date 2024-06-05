import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

 

const SingIn = () => {
    
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleGoogleAuth = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error=>{
            console.log('error', error.massage);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleAuth}>Sing-In</button>
        </div>
    );
};

export default SingIn;