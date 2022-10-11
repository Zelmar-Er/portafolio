// https://formsubmit.co/documentation
export const sendForm = () => {
        const form = document.querySelector('.contacto__form')
        form.action = 'https://formsubmit.co/pumputiszelmar@gmail.com';
        form.method = 'POST';
        // console.log(form.action)
}