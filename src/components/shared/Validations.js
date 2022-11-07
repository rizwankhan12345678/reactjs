const Validations = {
    emailValidation: function (email, fieldTouched) {
        if (fieldTouched['email']) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                return '';
            }
            return 'Enter valid email';
        }
        return '';
    },
    passwordValidation: function (password, fieldTouched) {
        if (fieldTouched['password']) {
            if (password) {
                return '';
            }
            return 'Password is required';
        }
        return '';
    }
}

export default Validations;