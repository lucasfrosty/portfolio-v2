import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
// import {graphql} from 'gatsby';
import styled from 'styled-components';

import {SettingsDark} from '../icons';
import {breakPointsInPx} from '../utilities/styles';
import {useTheme} from '../utilities/theme';

import {Popover} from './popover';

// export const query = graphql`
//   query {
//     USFlag: file(relativePath: {eq: "us.png"}) {
//       childImageSharp {
//         fixed(width: 32, height: 32) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }

//     BRFlag: file(relativePath: {eq: "brazil.png"}) {
//       childImageSharp {
//         fixed(width: 32, height: 32) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

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
    padding-right: 10%;
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
  min-width: 210px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.border};
  -webkit-box-shadow: ${(props) => props.theme.shadow};
  -moz-box-shadow: ${(props) => props.theme.shadow};
  box-shadow: ${(props) => props.theme.shadow};
`;

export function LanguageSwitcherButton() {
  const {currentTheme, toggleTheme} = useTheme();
  const [isActive, setIsActive] = useState(false);

  const {i18n, t} = useTranslation();
  const isEnglish = i18n.language === 'en';

  const settingsIcon = (
    <SettingsIconWrapper>
      <SettingsDark />
    </SettingsIconWrapper>
  );

  const buttonOptions = isEnglish
    ? {
        onClick: () => i18n.changeLanguage('pt'),
        children: settingsIcon,
        'aria-label': 'Mudar para inglês',
      }
    : {
        onClick: () => i18n.changeLanguage('en'),
        children: settingsIcon,
        'aria-label': 'Switch to portuguese',
      };

  const activator = (
    <ResetedButton
      {...buttonOptions}
      role="button"
      onClick={() => setIsActive((prev) => !prev)}
    />
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
            <ResetedButton
              onClick={() => i18n.changeLanguage(isEnglish ? 'pt' : 'en')}
            >
              {t(isEnglish ? 'portuguese' : 'english')}
            </ResetedButton>
          </div>
          <div>
            <ResetedButton onClick={toggleTheme}>
              {t(currentTheme === 'whiteMode' ? 'darkMode' : 'whiteMode')}
            </ResetedButton>
          </div>
        </ActionList>
      </Popover>
    </Wrapper>
  );
}
