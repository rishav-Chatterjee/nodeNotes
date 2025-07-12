## How the wen works :
**	Clienrt => request => server => response => client
	
## Program Lifescycle and event loops:
**	Node.js runs non-blocking js code and used and event-driven code ("event loop") for running your logic.
**	A node program program exits as sson as there is no more work to do.
**	Note: The createServer() event nerver finished by deafult.

## Asynchronous Code:
**	Js code is non-bloicking.
**	Use callbacks and events  => order changes.

## Request and Responses:
**	Parse request data in chucks (Stream and buffres)
**	Avoid "double responses".

## Node.js and Core modules:
**	node.js ships with multiple core module (http,fs, path  etc).
**	core module can be imported into any file to be used there.
** import via require('module').

##	The node module system:
**	import via require(./path-to-file) for custom files or require(module) for core and thired party modules.
**	Export via module.exports or just exports(for multiple exports).