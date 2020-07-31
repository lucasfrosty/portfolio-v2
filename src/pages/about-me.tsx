import React from 'react';
import {useTranslation} from 'react-i18next';

export default function AboutMe() {
  const {t} = useTranslation();

  return (
    <h1>{t('description')}</h1>
  );
}