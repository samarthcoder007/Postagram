import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore, } from '../Firebase/Firebase';
import { setDoc,doc, collection, query, where, getDoc, getDocs, } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignupWithEmailAndPassword = () => {
  
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showToast = useShowToast()
      const loginUser = useAuthStore(state => state.login)

      const signup = async (inputs) => {
          if(!inputs.userName || !inputs.password || !inputs.fullName || !inputs.email){
               showToast("Error","Please fill all the fields","error")
               return ;
          }

          const userRef = collection(firestore,"users")
          const q = query(userRef,where("userName","==",inputs.userName))
          const querySnapshot = await getDocs(q);

          if(!querySnapshot.empty){
            showToast("Error","Username already exists","error")
            return ;
          }

          try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(newUser===undefined && error){
              console.log(error)
                return ;
            }
            if(newUser){
              const userDoc = {
                uid: newUser.user.uid,
                email: inputs.email,
                userName: inputs.userName,
                fullName: inputs.fullName,
                bio: "",
                profilePicURL: "",
                followers: [],
                following: [],
                posts: [],
                createdAt: Date.now(),
              };
              await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
              localStorage.setItem("user-info", JSON.stringify(userDoc));
              loginUser(userDoc)
            }
          } catch (error) {
            console.log(error.message)
          }
      }

    return {loading,error,signup}

}

export default useSignupWithEmailAndPassword