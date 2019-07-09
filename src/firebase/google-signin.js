import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

// Calling this function will open Google for login.
async function googleLogin() {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/plus.login'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '812674531905-qqra17572up6nkicqtuicug52e4c2osl.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });

    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const userInfo = await GoogleSignin.signIn();
    
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)
    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential)
    console.log('es primera vez?')
    var email= 'prueba3'
    var newUser= firebaseUserCredential.additionalUserInfo.isNewUser
    /*if (newUser == true){
      console.log(firebaseUserCredential.additionalUserInfo.isNewUser)
      firebase.database().ref('Lista_Usuarios/'+ email).set(
          {
              newBuy:0,
          }
      ).then(()=>{
          console.log('nuevo usuario sin pedidos!');
      }).catch((error)=>{
          console.log(error);
      });
    }*/
    
    //console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
  }catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('e1')
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('e2')
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('e3')
      // play services not available or outdated
    } else {
      console.log('e4')
      console.log(error.code)
      // some other error happened
    }
  }
}


export default googleLogin;