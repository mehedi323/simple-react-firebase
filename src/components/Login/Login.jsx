import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [users, setUsers] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()


    const handleGoogleAuthProvider = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUsers(user)
            })
            .catch(error => {
                console.log(error.massage);
            })
    }

    const hanleGitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const user = result.user
                setUsers(user)
            })
            .catch(error => {
                console.log(error.massage);
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUsers(result)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="text-2xl font-bold text-center">


            {
                users ?
                    <button className="p-4 rounded-full bg-blue-400" onClick={handleSingOut}>Sing-Out</button> :
                    <div>
                        <button className="p-4 rounded-full bg-purple-700" onClick={handleGoogleAuthProvider}>Google Login</button>
                        <button className="p-4 rounded-full bg-purple-700" onClick={hanleGitHubLogin}>GitHub-Login</button>
                    </div>
            }


            {users && <div>
                <h2>User Name: {users.displayName}</h2>
                <h3>Email {users.email}</h3>
                <img src={users.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;