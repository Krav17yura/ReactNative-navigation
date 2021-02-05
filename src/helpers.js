export const transformUserData = (currentUser, currentUserInFirestore) => {
    const { uid, displayName, photoURL, email } = currentUser;
    const {nickName} = currentUserInFirestore[0]
    return {
        uid,
        nickName,
        displayName,
        photoURL,
        email,
    }
}