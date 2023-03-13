import { Button } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase.config"
import { useDispatch } from 'react-redux';
export default function FacebookBtn() {

    const dispatch = useDispatch();
    const handleFacebookLogin = () => {
        const provider = new FacebookAuthProvider();

        // const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(result, "Result");
                dispatch({
                    type: "SET_AUTH_USER",
                    user,
                });
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
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
        //             console.log('Facebook signin result ',result);
        //             firebaseLoginHelper(result.user, dispatch);
        //           })
        //           .catch((e) => console.log(e, ' is the firebase error'));
        //     });
    };
    return (
        <Button
            variant="contained"
            startIcon={<FacebookIcon />}
            onClick={handleFacebookLogin}
            sx={{marginTop: "1vh"}}
        >
            Sign In with Facebook

        </Button>
    )
}
