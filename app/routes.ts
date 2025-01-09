import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('layouts/ticket-layout.tsx', [
    index('routes/home.tsx'),
    route('ticket', 'routes/ticket.tsx'),
  ]),
] satisfies RouteConfig;
