export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","global.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.S7DLkpSL.js","app":"_app/immutable/entry/app.JOsqrRqS.js","imports":["_app/immutable/entry/start.S7DLkpSL.js","_app/immutable/chunks/scheduler.i0SJtRCT.js","_app/immutable/chunks/singletons.J9z-Obxq.js","_app/immutable/chunks/index.Kz5XLsdZ.js","_app/immutable/entry/app.JOsqrRqS.js","_app/immutable/chunks/scheduler.i0SJtRCT.js","_app/immutable/chunks/index.hjBCqnBV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
