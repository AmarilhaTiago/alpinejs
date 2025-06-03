document.addEventListener('alpine:init', () => {
    Alpine.data('signUpForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPass: false,
        showPassConfirm: false,

        submitForm() {
            console.log(this.username, this.password, this.passwordConfirm, this.belt, this.bio, this.newsletter);
        }

    }))
})