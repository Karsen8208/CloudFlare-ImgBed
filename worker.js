// 添加简单的路由功能
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        
        if (url.pathname === '/api/time') {
            // API 接口
            return new Response(JSON.stringify({
                time: new Date().toISOString(),
                message: "API 工作正常"
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } else {
            // 网页界面
            const html = `...你的HTML代码...`;
            return new Response(html, {
                headers: { 'Content-Type': 'text/html' }
            });
        }
    }
}
