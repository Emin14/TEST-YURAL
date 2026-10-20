const API_ERRORS = {
  'Empty key!': 'Не указан ключ доступа к API.',
  'Invalid key client!': 'Ключ доступа к API недействителен.',
  'Empty number goods!': 'Не указан артикул детали.',
  'Request quota exceeded!': 'Лимит запросов к API исчерпан. Повторите попытку позже.',
};

export const getApiErrorMessage = (message, status) => {
  if (message && API_ERRORS[message]) {
    return API_ERRORS[message];
  }

  if (status >= 500) {
    return 'Сервис временно недоступен. Попробуйте повторить запрос позже.';
  }

  return message || 'Не удалось выполнить запрос.';
};
