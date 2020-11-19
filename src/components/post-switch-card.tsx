import {Link} from 'gatsby';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Card} from './card';

interface Props {
  url: string;
}

export function PostSwitchCard({url}: Props) {
  const {t} = useTranslation();
  const urlLanguage = url.includes('/en/') ? 'en' : 'pt';

  const replaceKey = urlLanguage === 'en' ? 'en' : 'pt';
  const replacedKey = urlLanguage === 'en' ? 'pt' : 'en';

  const newUrl = url.replace(replaceKey, replacedKey);

  return (
    <Card>
      <p>
        {t('postSwitchLanguageCard')} <Link to={newUrl}>{t('clickHere')}</Link>.
      </p>
    </Card>
  );
}
