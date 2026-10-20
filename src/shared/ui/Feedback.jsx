import React from 'react';

export const Loader = () => (
  <div className="loader" aria-label="Загрузка" role="status" />
);

export const EmptyState = ({ children }) => (
  <p className="empty-state">{children}</p>
);
