import 'bootstrap/dist/css/bootstrap.css'
import './ContactForm.css';

//Componentes

function ContactForm( ) {

    const handleSend = () => {
        alert("Muchas gracias por su mensaje, vamos a tenerlo en cuenta");
    }

    return (
        <>
        {/* Simulo el envío de un mail a la compañía */}
            <h4>¿Qué te gustaría decirnos?</h4>
            <form style={{textAlign:'center'}}>
                <label>
                    <textarea name="message" type="text" placeholder='Dejá tu comentario, crítica constructiva o sugerencia' style={{width:'50vw', height:'20vh'}} required></textarea>
                </label><br/>
                <label>
                    <input name="mail" type="email" placeholder='Ingrese su mail' style={{width:'50vw', height:'5vh'}} required/>
                </label><br/>
                <label>
                    Te gustaría recibir nestras novedades?&nbsp;&nbsp;
                    <input name="news" type="checkbox"/>                    
                </label><br/>
                <label>
                    <button className='btn btn-secondary' onClick={handleSend}> Enviar </button>
                </label>
            </form>
        </>
    )
}

export default ContactForm
