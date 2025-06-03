document.addEventListener('alpine:init', () => {
    Alpine.data('signUpForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true
    }))
})