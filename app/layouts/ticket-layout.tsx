import { Outlet } from 'react-router';
import logofull from '../assets/images/logo-full.svg';
import type { Route } from './+types/ticket-layout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Frontend Mentor | Conference ticket generator' },
    {
      name: 'description',
      content: "Secure your spot at next year's biggest coding conference.",
    },
  ];
}

export default function TicketLayout() {
  return (
    <>
      <main>
        <img src={logofull} alt="Coding Conf" width="209" height="30" />
        <Outlet />
      </main>
      <footer>
        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{' '}
          <a href="https://www.frontendmentor.io/profile/FrontendBy-GJ">
            FrontendBy-GJ
          </a>
          .
        </p>
      </footer>
    </>
  );
}
