function isValidEmail(email: string) {
    return email !== '';
    //for production
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
  
function isValidPassword(password: string) {
    return password !== '';
    //for production
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{7,20}$)/.test(password);
}

function isValidName(name: string){
    return name !== '';
}

export { isValidEmail, isValidPassword, isValidName };