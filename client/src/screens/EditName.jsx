import React, { useState } from 'react';
import EditProfile from '../components/EditProfile/EditProfile';

export default function EditName() {
  
  const [name, setName] = useState('');
  const handleSave = newName => {
    // Lógica para salvar o nome
    console.log('Nome salvo:', newName);
    // Atualiza o nome em algum lugar (por exemplo, um banco de dados)
    setName(newName);
  };

  return (
      <EditProfile type="name" onSave={handleSave} currentName={name} />
  );
}
