import React from 'react';
import {useTranslation} from 'react-i18next';

import MenDog from "../images/men-dog.png"
import Me from "../images/me.jpg"
import { Circle, Social } from '../components';


export default function AboutMe() {
  const {t} = useTranslation();

  return (
    <div style={{position: "relative", marginTop: 60}}>
      <div style={{display: 'flex'}}>
        <div style={{width: '100%', maxWidth: 500}}>
          <h1 style={{fontWeight: 600, marginBottom: 0}}>Lucas Ferreira</h1>
          <p style={{color: '#464646', margin: 0, fontSize: 18}}>{t('description')}</p>
          <p style={{color: '#464646', margin: 0, fontSize: 18}}>{t('description2')}</p>
          <p style={{color: '#464646', fontSize: 18}}>{t('description3')}</p>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <img src={Me} width="400" style={{borderRadius: '100%', border: '3px solid white', boxShadow: '14px 19px 0px 5px rgba(94,31,196,0.7)'}} />
        </div>
      </div>
    </div>
  );
}