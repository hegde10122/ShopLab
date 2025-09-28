/**
 Hook orchestrating login use-case, updating Redux and handling navigation.
 Hook interacts with the domain layer
 */

import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../data/auth/authRepository";
import { setUserEmail, setUserName } from "../../store/store";

export const useAuth = (navigation: any) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const login = async (email: string, password: string) => {
        setLoading(true);
        const result = await loginUser(email, password);
        setLoading(false);

        if (result.status) {
            const user = result?.user?.user; // userCredential.user

            // hook is responsible for persistance of state
            dispatch(setUserEmail(user?.email ?? ""));
            dispatch(setUserName(user?.displayName ?? ""));
         //   navigation.navigate("Tabs");
        }

        return result;
    };

    return { loading, login };
};

/**
 * Firebase Auth notes:
 * 
 * Check authRepository.ts
 * const userCredential = await signInWithEmailAndPassword(auth, email, password);
 * userCredential is an object of type UserCredential.
 * 
 * It contains:
 *  - user: a User object (with uid, email, displayName, etc).
 *  - operationType: e.g. "signIn".
 * 
 * Always prefer user.displayName and user.email
 * instead of relying on private/internal fields like _tokenResponse.
 */
