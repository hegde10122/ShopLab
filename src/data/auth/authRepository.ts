/**
This file contains pure functions interacting with Firebase. Part of Data layer
 */
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../infrastructure/firebase/firebaseConfig';

export const loginUser = async(email:string,password:string) => {

    if(!email || !password) return {status:false, output:"Email or password empty"}

    try{
        //call firebase auth directly
        const user = await signInWithEmailAndPassword(auth,email,password);
        return {status:true,user};

    }catch(err:any){
            
    if (err.code === "auth/invalid-email") {
      return { status: false, output: "Invalid email format." };
    } else if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
      return { status: false, output: "Incorrect email or password." };
    } else {
      return { status: false, output: "Something went wrong. Please try again later." };
    }
  }

    
}