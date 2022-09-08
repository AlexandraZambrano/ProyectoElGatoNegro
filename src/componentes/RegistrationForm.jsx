import React from "react";
import { render } from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import "../hojas-de-estilo/RegistrationForm.css";
//import * as Yup from "yup";
import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="container-formulario">
        <h2 className="titulo-formulario">Contáctanos</h2>
        <div className="container-campos">
          <Formik
            initialValues={{
              nombre: "",
              telefono: "",
              asistentes: "1",
              date: ""
            }}
            onSubmit={(values) => {
              alert(
                `Nombre: ${values.nombre}\nTeléfono: ${
                  values.telefono
                }\nAsistentes: ${values.asistentes}
                \nFecha: ${values.date}`
              );
            }}

            validate={(valores)=> {
            let errores = {};
            
            // Validación nombre
            if (!valores.nombre){
              errores.nombre = '  Ingresa un nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){ 
              errores.nombre = 'El nombre solo puede contener letras y espacios';
            }
            // Validación telefono
            if (!valores.telefono){
              errores.telefono = 'Ingresa un teléfono';
            } else if (!/^[0-9-\s]{9,12}$/.test(valores.telefono)){ 
              errores.telefono = 'El formato de teléfono es: 666 666- 66';
            }

            // Validación asistentes
            if (!valores.asistentes){
              errores.asistentes = 'Ingresa el número de víctimas';
            }
            return errores;  
            
            // Validación fecha
            if (!valores.date){
              errores.asistentes = 'Ingresa el día de la reserva';
            }
            return errores;  

          }}
          >
          {( { errors } ) => (
            <Form> 
              <Field name="nombre" 
                label="Fenix, Bruja, Mago..." 
                component={TextField} 
              />
              <div className="etiqueta">Nombre de criatura mágica</div>
              
              <Field name="telefono" 
                label="666-666-666" 
                component={TextField} 
              />
              <div className="etiqueta">¿A dónde te llamará el fantasma?</div>
              <br/>

              <Field
                name="asistentes"
                label=""
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                  { value: "7", label: "7" },
                  { value: "8", label: "8" },
                  { value: "9", label: "9" },
                  { value: "10", label: "10" }
                ]}
                component={Select}
              />

              <div className="etiqueta">Número de víctimas</div>
                <ErrorMessage name="asistentes" component={() => (
                  <div className="error">{errors.asistentes}</div>
                )} />
              <br />

              <DatePicker name="date" />
              <br />
              <br />
              <button className="boton-form" type="submit">RESERVAR</button>
            </Form>
            
          )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
