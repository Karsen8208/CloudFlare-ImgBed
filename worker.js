export default {
    async fetch(request, env) {
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>我的 Cloudflare Worker</title>
        </head>
        <body>
            <h1>你好，世界！</h1>
            <p>这是一个由 Cloudflare Worker 提供的页面。</p>
        </body>
        </html>
        `;

        return new Response(html, {
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            },
        });
    }
}
