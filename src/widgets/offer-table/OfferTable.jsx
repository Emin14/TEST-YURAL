import React from 'react';
import { formatPrice, getStock } from '../../shared/lib/formatters';
import { EmptyState, Loader } from '../../shared/ui/Feedback';

export const OfferTable = ({ offers, brand, loading }) => (
  <section className="panel">
    <div className="section-title">
      <span className="step">03</span>
      <div>
        <h2>Предложения {brand && <em>{brand}</em>}</h2>
        <p>{loading ? 'Загружаем предложения...' : offers.length ? `Найдено позиций: ${offers.length}` : 'Предложения не найдены'}</p>
      </div>
    </div>
    {loading && <Loader />}
    {!loading && !offers.length && <EmptyState>Для выбранного производителя предложений нет.</EmptyState>}
    {!loading && offers.length > 0 && (
      <div className="table-wrap">
        <table>
          <thead><tr><th>Деталь</th><th>Производитель</th><th>Артикул</th><th>Цена</th><th>Остаток</th></tr></thead>
          <tbody>{offers.map((offer, index) => <tr key={offer.goodsID || `${offer.brand}-${offer.number}-${index}`}><td>{offer.name || 'Без названия'}</td><td>{offer.brand || '—'}</td><td>{offer.number || '—'}</td><td>{formatPrice(offer.price)}</td><td>{getStock(offer)}</td></tr>)}</tbody>
        </table>
      </div>
    )}
  </section>
);
