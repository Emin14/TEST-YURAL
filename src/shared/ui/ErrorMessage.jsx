import React from 'react';

export const ErrorMessage = ({ message }) => message ? <div className="alert" role="alert">{message}</div> : null;
