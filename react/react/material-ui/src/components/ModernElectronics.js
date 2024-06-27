import React, { useState } from 'react';

const Material = ({ Components = [
  { id: '1', name: 'TV', price: '10000', qty: 1 },
  { id: '2', name: 'Monitor', price: '20000', qty: 1 },
  { id: '3', name: 'Fridge', price: '55000', qty: 1 },
  { id: '4', name: 'iron box', price: '700', qty: 1 },
  { id: '5', name: 'laptop', price: '50000', qty: 1 },
] }) => {

  const [msg, setMsg] = useState('Electronics');
  const [content, setContent] = useState('');

  const renderContent = () => {
    return (
     <div className='center'>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {Components.map((component, index) => (
            <tr key={index}>
              <td>{component.id}</td>
              <td>{component.name}</td>
              <td>{component.price}</td>
              <td>{component.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };

  const handleClick = () => {
    setMsg('Modern Electronics');
    setContent(renderContent());
  };

  return (
    <div>
      <h2>Message:</h2>
      <p>{msg}</p>
      <div>{content}</div>
      <button onClick={handleClick}>
        Click Here to know the contents
      </button>
    </div>
  );
};

export default Material;