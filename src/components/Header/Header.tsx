import React from 'react';
import {Link} from 'gatsby';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {useLocation} from '@reach/router';

import {Route} from '../../utilities/routes';

import {SettingsButton} from '../SettingsButton';

interface LinkProperties {
  content: string;
  url: Route;
  isActive: boolean;
}

export const Navbar = styled.nav`
  font-size: 16px;
  display: flex;
  min-height: 40;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(({isActive, ...props}) => <Link {...props} />)`
  color: ${(props) => props.theme.link};
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 5px;
  position: relative;

  &:not(:first-child) {
    margin-left: 30px;
  }

  &:hover {
    color: ${(props) => props.theme.primary};
  }

  &:active,
  &:focus {
    color: ${(props) => props.theme.link};
    text-decoration: none;
  }

  @media only screen and (max-width: 400px) {
    font-size: 13px;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export function Header() {
  const {t} = useTranslation();
  const routeLocation = useLocation();
  const links: LinkProperties[] = [
    {
      content: t('aboutMe'),
      url: Route.Index,
      isActive: isActiveRoute(Route.Index),
    },
    {
      content: 'Blog',
      url: Route.Blog,
      isActive: isActiveRoute(Route.Blog),
    },
    {
      content: t('work'),
      url: Route.Work,
      isActive: isActiveRoute(Route.Work),
    },
  ];

  return (
    <Navbar>
      <div>
        {links.map(({content, url, isActive}) => (
          <StyledLink key={url} to={url} isActive={isActive}>
            {content}
          </StyledLink>
        ))}
      </div>
      <SettingsButton />
    </Navbar>
  );

  function isActiveRoute(route: Route) {
    return routeLocation.pathname === route;
  }
}
