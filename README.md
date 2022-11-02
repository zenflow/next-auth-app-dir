# next-auth-app-dir
Extension of NextAuth.js to play nice with Next.js App Directory

### Troubleshooting

<details>
  <summary>I get a `Uncaught TypeError: fetch failed` in production mode (Node v17 & up)</summary>
An error like this appears in log:

```
Uncaught TypeError: fetch failed
  at Object.fetch (node:internal/deps/undici/undici:11118:11)
  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
  at async REPL10:1:33 {
cause: Error: connect ECONNREFUSED ::1:3000
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16)
    at TCPConnectWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
  errno: -4078,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '::1',
  port: 3000
}
```

Node's `fetch` (which is used to get session data from NextAuth API route during SSR)
is trying to connect via IPv6, while Next.js is listening on IPv4.

To fix this, define the `NEXTAUTH_URL_INTERNAL` env var with a URL that has a hostname
that resolves to a IPv4 address. For example, `http://127.0.0.1:3000`

Note that `localhost` may resolve to either `127.0.0.1` (IPv4) or `::1` (IPv6)
depending on your operating system's DNS resolver.
For this reason, it may be better to explicitly use `127.0.0.1` as the hostname.

Related issues:
- https://github.com/nodejs/node/issues/40537
- https://github.com/nodejs/node/issues/43908
</details>
