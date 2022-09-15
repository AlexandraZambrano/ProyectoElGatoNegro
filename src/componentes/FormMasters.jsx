import React, {useRef, useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import "../hojas-de-estilo/FormMasters.css";
import { Formik} from 'formik';
import { Card, CardContent, TextField } from "@material-ui/core";
import { ClassNames } from '@emotion/react';

const FormMasters = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const [captchaValido, cambiarCaptchaValido] = useState(null);

    const captcha = useRef(null);

    const onChange = () => {
      if(captcha.current.getValue()){
        console.log('El usuario no es un robot');
        cambiarCaptchaValido(true);
      }
    }

    return (
      <div className="contenedor">
        <Formik
          initialValues={{
            nombre: '',
            telefono: '',
            asistentes: '1', 
            fecha: '',
          }}
          validate={(valores) => {
            let errores = {};

            //Validación nombre
            if (!valores.nombre){
              errores.nombre = 'Por favor ingresa un nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
              errores.nombre = 'El nombre solo puede contener letras y espacios';
            }

            //Validación teléfono
            if (!valores.telefono){
              errores.telefono = 'Por favor ingresa un teléfono';
            } else if (!/^[0-9\s-]{1,20}$/.test(valores.telefono)){
              errores.telefono = 'El teléfono solo puede contener números, espacios y guiones';
            }

            //Validación asistentes
            if (!valores.asistentes){
              errores.asistentes = 'Por favor ingresa el número de asistentes';
            }

            //Validación fecha
            if (!valores.fecha){
              errores.fecha = 'Por favor ingresa una fecha';
            }            
            return errores;

          }}
          onSubmit={(valores,{resetForm}, onChange) => {
            //Verificación del Captcha
            if(captcha.current.getValue()){
              console.log('El usuario no es un robot');
              cambiarCaptchaValido(true);
              resetForm();
              cambiarFormularioEnviado(true);
              alert(
                `El formulario ha sido enviado:\nNombre: ${valores.nombre}\nTeléfono: ${
                  valores.telefono}\nAsistentes: ${valores.asistentes
                  }\nFecha: ${valores.fecha}`
              );
            } else {
              console.log('Por favor acepta el captcha');
              cambiarFormularioEnviado(false);
              cambiarCaptchaValido(false);
            }
          }}
        >
          {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
            <form className="formulario" onSubmit={handleSubmit}>
              
              <Card className={ClassNames.card}>
                <div className="contenedor">
                  <h1>Reserva</h1>
                </div>
                <CardContent>
                  <div>
                    <label htmlFor='nombre'>Nombre de criatura mágica</label>
                    <TextField
                      type="text" 
                      id="nombre" 
                      name="nombre" 
                      placeholder="Fenix, Bruja, Mago" 
                      value={values.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                  </div>
                  <div>
                    <br />
                    <label htmlFor='telefono'>Teléfono a dónde te llamará el fantasma</label>
                    <TextField
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      placeholder="666-666-666" 
                      value={values.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}
                  </div>
                  <div>
                    <br />
                    <label htmlFor='fecha'>¿Qué escalofriante noche escogeras?</label>
                    <TextField 
                      type="datetime-local" 
                      id="fecha" 
                      name="fecha" 
                      value={values.fecha}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.fecha && errors.fecha && <div className="error">{errors.fecha}</div>}
                  </div>
                  <div>
                  <br />
                    <label htmlFor="asistentes" id="etiquetaAsistentes">¿Cuántas víctimas asistirán?</label>
                    <select 
                      name="asistentes" 
                      id="asistentes" 
                      form="formulario" 
                      value={values.asistentes}
                      onChange={handleChange}
                      
                      onBlur={handleBlur}
                      >
                      {touched.asistentes && errors.asistentes && <div className="error">{errors.asistentes}</div>}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select> 
                  </div>  
                  <div className= "recaptcha">
                    <ReCAPTCHA
                    ref={captcha}
                    sitekey="poner el key de google"
                    onChange={onChange}
                  />
                  </div>
                  {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
                  <div className="contenedor-button">
                    <button type="submit" className="Button">RESERVAR</button>
                  </div>   
                  {formularioEnviado && <p className="exito">Formulario enviado con éxito</p>} 
                </CardContent>
              </Card>
            </form>
          )}
        </Formik>
      </div>
    
    );
}

export default FormMasters;
