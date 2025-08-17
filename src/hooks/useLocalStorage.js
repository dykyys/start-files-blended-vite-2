// import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const todos = window.localStorage.getItem(key);

  if (todos !== null) {
    return JSON.parse(todos);
  }

  return defaultValue;
};
