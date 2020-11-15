/* eslint-disable jsx-a11y/label-has-for */
/* disabling because React is not smart enough to detect that the
Toggle component is actually a html input, so it had issues with the way i was using htmlFor */

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {Settings, Moon, Sun, Brazil, UK} from '../icons';
import {breakPointsInPx} from '../utilities/styles';
import {useTheme} from '../utilities/theme';

import {Toggle} from './toggle';
import {Popover} from './popover';

import './toggle.css';

const ResetedButton = styled.button.attrs((props) => ({
  'aria-label': props['aria-label'],
}))`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  &:active {
    outline: none;
  }

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;
  max-height: 32px;
  z-index: 10;
`;

const Wrapper = styled.span`
  display: flex;

  @media only screen and (min-width: 1550px) {
    padding-right: 5%;
  }
`;

const SettingsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  path {
    fill: #fff;
  }

  @media only screen and (max-width: ${breakPointsInPx.aboutMe}px) {
    path {
      fill: ${(props) => props.theme.text};
    }
  }

  @media only screen and (min-width: 1550px) {
    path {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const ActionList = styled.div`
  z-index: 99;
  padding: 10px;
  margin-top: 8px;
  min-width: 150px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};
  -webkit-box-shadow: ${(props) => props.theme.shadow};
  -moz-box-shadow: ${(props) => props.theme.shadow};
  box-shadow: ${(props) => props.theme.shadow};

  & > *:not(:first-child) {
    margin-top: 8px;
  }

  > div {
    display: flex;
    align-items: center;

    & > *:not(:first-child) {
      margin-left: 6px;
    }
  }
`;

enum Id {
  ThemeSwitcher = 'THEME_SWITCHER_UNIQUE_ID',
  LanguageSwitcher = 'LANGUAGE_SWITCHER_UNIQUE_ID',
}

export function SettingsButton() {
  const {currentTheme, toggleTheme} = useTheme();
  const [isActive, setIsActive] = useState(false);

  const {i18n, t} = useTranslation();
  const isEnglish = i18n.language === 'en';

  const activator = (
    <ResetedButton
      role="button"
      onClick={() => setIsActive((prev) => !prev)}
      aria-label={t('settingsButtonLabel')}
    >
      <SettingsIconWrapper>
        <Settings />
      </SettingsIconWrapper>
    </ResetedButton>
  );

  return (
    <Wrapper>
      <Popover
        active={isActive}
        activator={activator}
        options={{
          placement: 'bottom-end',
        }}
        onClose={() => setIsActive(false)}
      >
        <ActionList>
          <div>
            <Toggle
              id={Id.LanguageSwitcher}
              defaultChecked={isEnglish}
              onChange={() => i18n.changeLanguage(isEnglish ? 'pt' : 'en')}
              icons={{
                checked: <Brazil width="14" height="14" />,
                unchecked: <UK width="12" height="14" />,
              }}
            />
            <label htmlFor={Id.LanguageSwitcher}>
              {t(isEnglish ? 'portuguese' : 'english')}
            </label>
          </div>
          <div>
            <Toggle
              defaultChecked={currentTheme === 'lightMode'}
              onChange={toggleTheme}
              icons={{
                checked: <Moon width="13" height="13" />,
                unchecked: <Sun width="13" height="13" />,
              }}
              id={Id.ThemeSwitcher}
            />
            <label htmlFor={Id.ThemeSwitcher}>
              {t(currentTheme === 'lightMode' ? 'darkMode' : 'lightMode')}
            </label>
          </div>
        </ActionList>
      </Popover>
    </Wrapper>
  );
}
