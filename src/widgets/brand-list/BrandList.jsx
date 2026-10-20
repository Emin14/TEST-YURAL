import React from 'react';

export const BrandList = ({ brands, selectedBrand, onSelect }) => (
  <section className="panel">
    <div className="section-title">
      <span className="step">02</span>
      <div>
        <h2>Выберите производителя</h2>
        <p>{brands.length ? 'Доступные бренды для указанного артикула' : 'По этому артикулу бренды не найдены'}</p>
      </div>
    </div>
    {brands.length > 0 && (
      <div className="brand-grid">
        {brands.map(({ brand }) => (
          <button className={`brand-chip ${selectedBrand === brand ? 'active' : ''}`} onClick={() => onSelect(brand)} key={brand}>
            {brand}
          </button>
        ))}
      </div>
    )}
  </section>
);
