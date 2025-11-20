export default {
    async fetch(request, env) {
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>欢迎页面</title>
            <style>
                body { 
                    font-family: Arial; 
                    text-align: center; 
                    padding: 50px; 
                    background: #f0f0f0;
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Hello World! 🌍</h1>
                <p>你的 Cloudflare Worker 正在运行</p>
            </div>
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
