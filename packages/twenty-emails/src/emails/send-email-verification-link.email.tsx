import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';

import { BaseEmail } from 'src/components/BaseEmail';
import { CallToAction } from 'src/components/CallToAction';
import { Footer } from 'src/components/Footer';
import { MainText } from 'src/components/MainText';
import { Title } from 'src/components/Title';
import { loadAndActivateLocale } from 'src/utils/loadAndActivateLocale';

type SendEmailVerificationLinkEmailProps = {
  link: string;
  locale: string;
};

export const SendEmailVerificationLinkEmail = async ({
  link,
  locale,
}: SendEmailVerificationLinkEmailProps) => {
  await loadAndActivateLocale(locale);

  return (
    <BaseEmail width={333} locale={locale}>
      <Title value={t`Confirm your email address`} />
      <CallToAction href={link} value={t`Verify Email`} />
      <br />
      <br />
      <MainText>
        <Trans>
          Thanks for registering for an account on Twenty! Before we get
          started, we just need to confirm that this is you. Click above to
          verify your email address.
        </Trans>
      </MainText>
      <Footer />
    </BaseEmail>
  );
};
