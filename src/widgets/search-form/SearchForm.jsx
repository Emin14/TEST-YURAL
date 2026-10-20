import React, { useState } from 'react';

export const SearchForm = ({ loading, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const number = value.trim();
    if (number) onSubmit(number);
  };

  return (
    <section className="panel">
      <div className="section-title">
        <span className="step">01</span>
        <div>
          <h2>Поиск производителя</h2>
          <p>Введите номер детали из каталога</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="search-row">
        <input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Например, 0189" aria-label="Артикул детали" />
        <button disabled={loading || !value.trim()}>{loading ? 'Ищем...' : 'Найти'}</button>
      </form>
    </section>
  );
};
