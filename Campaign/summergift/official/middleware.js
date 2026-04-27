export const config = {
  matcher: '/((?!robots.txt).*)',
};

const USER = 'adgj';
const PASS = 'mptw';

export default function middleware(request) {
  const authHeader = request.headers.get('authorization');
  const expected = 'Basic ' + btoa(`${USER}:${PASS}`);

  if (authHeader === expected) {
    return;
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Fujisaki Summer Gift Official Preview", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
