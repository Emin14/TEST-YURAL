import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBrands, searchOffers } from '../../entities/catalog/model';
import { SearchForm } from '../../widgets/search-form/SearchForm';
import { BrandList } from '../../widgets/brand-list/BrandList';
import { OfferTable } from '../../widgets/offer-table/OfferTable';
import { ErrorMessage } from '../../shared/ui/ErrorMessage';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const { number, brands, offers, selectedBrand, status, error } = useSelector((state) => state.catalog);

  return (
    <main className="app-shell">
      <header className="app-header">
        <span className="brand-mark">FAVORIT PARTS</span>
        <h1>Подбор автозапчастей</h1>
        <p>Найдите производителя по артикулу и сравните доступные предложения.</p>
      </header>
      <SearchForm loading={status === 'brandsLoading'} onSubmit={(value) => dispatch(searchBrands(value))} />
      <ErrorMessage message={error} />
      {status === 'brandsReady' && <BrandList brands={brands} selectedBrand={selectedBrand} onSelect={(brand) => dispatch(searchOffers(number, brand))} />}
      {(status === 'offersLoading' || status === 'offersReady') && <OfferTable offers={offers} brand={selectedBrand} loading={status === 'offersLoading'} />}
    </main>
  );
};
