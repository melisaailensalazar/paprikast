import React, { useRef } from "react";

export default function UserForm({
  setButtonClass,
  setUser,
  preFields = [],
  preTitle = "",
}) {
  const nameRef = { ref: useRef(), id: "name", title: "Nombre", type: "text" };
  const lastNameRef = {
    ref: useRef(),
    id: "lastName",
    title: "Apellido",
    type: "text",
  };
  const phoneRef = {
    ref: useRef(),
    id: "phone",
    title: "Numero",
    type: "phone",
  };
  const emailRef = {
    ref: useRef(),
    id: "email",
    title: "E-mail",
    type: "email",
  };
  const email2Ref = {
    ref: useRef(),
    id: "email2",
    title: "Confirmar E-mail",
    type: "email",
  };

  const fields = [nameRef, lastNameRef, phoneRef, emailRef, email2Ref];

  const completeRefList = (list = []) =>
    list.reduce((acc, cur) => acc && cur.ref.current.value.length > 0, true);

  const checkUser = () => {
    if (emailRef.ref.current.value !== email2Ref.ref.current.value)
      return false;

    const data = {
      name: nameRef.ref.current.value,
      lastName: lastNameRef.ref.current.value,
      phone: phoneRef.ref.current.value,
      email: emailRef.ref.current.value,
    };
    setUser(data);

    return completeRefList(fields) && completeRefList(preFields);
  };

  const handleChange = () => {
    setButtonClass(checkUser() ? "active" : "");
  };

  const fieldTemplate = ({ ref, id, title, type }) => (
    <div key={id} className="field">
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} ref={ref} onChange={handleChange} />
    </div>
  );

  return (
    <form target="_self">
      {preTitle && <h3>{preTitle}</h3>}
      {preFields && preFields.map((field) => fieldTemplate(field))}

      <h3>Datos de usuario</h3>
      {fields.map((field) => fieldTemplate(field))}
    </form>
  );
}
