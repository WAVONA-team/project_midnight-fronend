import React from 'react';

import { ConfirmationResetPasswordForm } from '@/modules/Authorization';

import { Container } from '@/ui/Container';
import { Logo } from '@/ui/Logo';

export const ConfirmationResetPasswordPage: React.FC = React.memo(() => {
  return (
    <div
      className="
        app
        h-dvh
        bg-background-hight
        sm:h-full
        lg:bg-[url('/home_bg_desktop.webp')]
        lg:bg-no-repeat
        lg:bg-center
        lg:bg-cover
      "
    >
      <main className="lg:grid lg:grid-cols-2 items-center">
        <Container>
          <Logo className="hidden lg:flex" />
        </Container>

        <ConfirmationResetPasswordForm />
      </main>
    </div>
  );
});
