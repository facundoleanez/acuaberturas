import emailjs from 'emailjs-com';
export function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_jru98yc', 'template_ie7osem', e.target, 'user_kNqttFWtfqLvC8G4QTq4B')
    e.target.reset();
    alert("Mensaje enviado exitosamente")
}