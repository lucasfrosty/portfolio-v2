import React, {ChangeEvent, FormEvent, useState} from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

import {darken} from '../utilities/styles';
import {NewsletterIcon} from '../icons';

import {Card, Text, SpacedWrapper, Spinner, Banner} from '.';

enum Id {
  Email = 'newsletter-email-field',
}

const breakpoint = 400;

const TextField = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  border-right: 0;
  padding: 8px;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus {
    border-right: 2px solid ${(props) => props.theme.primary};
  }

  @media only screen and (max-width: ${breakpoint}px) {
    text-align: center;
    width: calc(100% - 18px);
    border-right: 1px solid ${(props) => props.theme.border};
    border-bottom-left-radius: 4px;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  outline: 0;

  &:focus {
    border-top: 2px solid ${(props) => props.theme.primary};
    border-left: 2px solid ${(props) => props.theme.primary};
    border-bottom: 2px solid ${(props) => props.theme.primary};
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  * {
    font-size: 16px;
  }

  @media only screen and (max-width: ${breakpoint}px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  border-top: 1px solid ${(props) => props.theme.subscriptionButtonBorder()};
  border-bottom: 1px solid ${(props) => props.theme.subscriptionButtonBorder()};
  border-left: 0;
  border-right: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  height: 43px;
  min-width: 100px;

  &:hover {
    background-color: ${(props) => darken(props.theme.primary, 30)};
  }

  @media only screen and (max-width: ${breakpoint}px) {
    width: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    margin-top: 4px;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.primary};
  font-size: 26px;
  margin-bottom: 0;
  font-weight: 600;
  margin-top: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }

  path {
    fill: ${(props) => props.theme.primary};
  }
`;

const Label = styled.label`
  @media only screen and (max-width: ${breakpoint}px) {
    width: 100%;
  }
`;

type RequestStatus = 'initial' | 'fetching' | 'fetched' | 'error';

export function Newsletter() {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('initial');
  const [email, setEmail] = useState('');
  const [messageKey, setMessageKey] = useState<string | null>(null);
  const {t, i18n} = useTranslation();

  const labels = {
    email: t('yourEmail'),
  };

  const isFetching = requestStatus === 'fetching';
  const isFetched = requestStatus === 'fetched';
  const isError = requestStatus === 'error';

  const subscribeContent = isFetching ? <Spinner /> : t('subscribe');

  const message = messageKey ? t(messageKey) : null;

  const bannerMarkup = (isError || isFetched) && message && (
    <SpacedWrapper margin="0 0 8px 0">
      <Banner type={isError ? 'error' : 'info'} onClose={dismissErrorBanner}>
        {message}
      </Banner>
    </SpacedWrapper>
  );

  const fetchingDataProps = isFetching
    ? {
        'aria-busy': true,
        disabled: true,
        'aria-live': 'polite' as any,
      }
    : null;

  return (
    <Card>
      <TitleWrapper>
        <NewsletterIcon width="22" height="22" />
        <Title>Newsletter</Title>
      </TitleWrapper>
      <Text>{t('newsletterDescription')}</Text>
      <SpacedWrapper
        style={{lineHeight: 1.3, width: '100%'}}
        margin="24px 0 0 0"
      >
        {bannerMarkup}
        <div>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor={Id.Email}>
              <TextField
                type="text"
                id={Id.Email}
                value={email}
                onChange={handleEmailChange}
                placeholder={labels.email}
                aria-label={labels.email}
              />
            </Label>
            <Button type="submit" {...fetchingDataProps}>
              {subscribeContent}
            </Button>
          </Form>
        </div>
      </SpacedWrapper>
      <SpacedWrapper style={{lineHeight: 1.3}} margin="8px 0 0 0 ">
        <Text caption>{t('unsubcribe')}</Text>
      </SpacedWrapper>
    </Card>
  );

  function dismissErrorBanner() {
    setMessageKey(null);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const locale = i18n.language.includes('pt') ? 'pt' : 'en';
    setRequestStatus('fetching');

    try {
      const {result, msg} = await addToMailchimp(email, {
        locale,
      });

      if (result === 'error') {
        handleError(msg);
      } else {
        handleSuccess();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleError(msg: string) {
    const isEmailInvalid = msg.includes('The email you entered is not valid.');
    const isEmailAlreadySubscribed = msg.includes('is already subscribed');

    let errorMessageSubscriptionKey = '';

    if (isEmailAlreadySubscribed) {
      errorMessageSubscriptionKey = 'emailAlreadySubscribed';
    } else if (isEmailInvalid) {
      errorMessageSubscriptionKey = 'invalidEmail';
    } else {
      errorMessageSubscriptionKey = 'unexpectedError';
    }

    setEmail('');
    setRequestStatus('error');
    setMessageKey(errorMessageSubscriptionKey);
  }

  function handleSuccess() {
    setEmail('');
    setRequestStatus('fetched');
    setMessageKey('thanksForSubscribing');
  }
}
