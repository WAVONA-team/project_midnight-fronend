import React from 'react';

import { RegistrationForm } from '@/modules/Authorization';

import { Container } from '@/ui/Container';
import { Logo } from '@/ui/Logo';

export const RegistrationPage: React.FC = React.memo(() => {
  return (
    <div
      className="
        app
        h-full
        bg-background-hight
        lg:bg-[url('/home_bg_desktop.webp')]
        landscape:h-fit
        lg:bg-no-repeat
        lg:bg-center
        lg:bg-cover
      "
    >
      <Container className="h-full flex flex-col justify-center">
        <main className="lg:grid lg:grid-cols-2 items-center">
          <Logo className="hidden lg:flex" />
          <RegistrationForm />
        </main>
      </Container>
    </div>
  );
});
