export default {
    async fetch(request, env) {
        const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>我的网站</title>
</head>
<body>
    <h1>欢迎访问我的网站</h1>
    <p>这是一个测试页面，用于验证 Cloudflare Worker 是否正常工作。</p>
    <p>如果这些中文字符显示正常，说明编码问题已经解决。</p>
</body>
</html>`;

        return new Response(html, {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8'
            }
        });
    }
}
