const mapping: Record<string, string> = {
  companies: 'company',
  continuations: 'continuation',
  users: 'user',
  votes: 'vote',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
