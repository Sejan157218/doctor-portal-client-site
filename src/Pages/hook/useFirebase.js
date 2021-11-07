import React, { useEffect, useState } from 'react';
import initializationFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handler to register
    const handlerRegisterToEmail = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                saveUser(email, name, 'POST')
                const user = userCredential.user;
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/')
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // handler to login with email
    const handlerLoginWithEmail = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // google sign in
    const handlerToGoogleLogin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || "/";
                history.replace(destination);
                setAuthError('');
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Logout for email pass
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    // save user
    const saveUser = (email, displayName, method) => {
        const users = { email, displayName };
        fetch('http://localhost:9000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);


    return {
        user,
        handlerRegisterToEmail,
        handlerLoginWithEmail,
        handlerToGoogleLogin,
        logout,
        authError,
        isLoading,
    }
};

export default useFirebase;