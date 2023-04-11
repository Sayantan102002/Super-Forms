import { Button } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase.config"
import { useDispatch } from 'react-redux';
import Api from './Api';
import { useHistory } from 'react-router-dom';
export default function GoogleBtn() {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();

        // const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                let user = result.user;
                console.log(result, "Result");
                Api.post('/user/getUpdatedUser', {
                    email: user.email,
                    name: user.displayName,
                    firebaseUid: user.uid,
                    photoUrl: user.photoURL,
                    // password: "Password
                }).then((res) => {
                    // user = res;
                    console.log(res)
                    dispatch({
                        type: "SET_AUTH_USER",
                        user: res,
                    });
                    history.push('/dashboard')
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

        // firebase
        //     .auth()
        //     .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        //     .then(() => {
        //       firebase
        //           .auth()
        //           .signInWithPopup(provider)
        //           .then((result) => {
        //             console.log('google signin result ',result);
        //             firebaseLoginHelper(result.user, dispatch);
        //           })
        //           .catch((e) => console.log(e, ' is the firebase error'));
        //     });
    };
    return (
        <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
        >
            Sign In with Google
        </Button>
    )
}
