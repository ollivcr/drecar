import React from 'react';

function Contact() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contactos</h2>
      <p className="text-gray-700">
        Para mais informações, entre em contacto connosco:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Telefone: +351 123 456 789</li>
        <li>Email: info@drecar.pt</li>
        <li>Morada: Rua Principal, Afife, Portugal</li>
      </ul>
    </section>
  );
}

export default Contact;