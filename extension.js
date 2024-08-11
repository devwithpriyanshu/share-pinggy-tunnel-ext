// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sharepinggytunnel" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('sharepinggytunnel.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Share Pinggy Tunnel!');
	});

	context.subscriptions.push(disposable);

	const statusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		100
	  );
	  statusBarItem.text = 'Open Pinggy';
	  statusBarItem.command = 'sharepinggytunnel.openpinggy';
	  statusBarItem.tooltip = 'Click to open pinggy tunnel';
	  statusBarItem.show();

	  context.subscriptions.push(
		vscode.commands.registerCommand('sharepinggytunnel.openpinggy', function () {
		  vscode.window.showInformationMessage('Your pinggy tunnel is live');
		})
	  );

	  context.subscriptions.push(statusBarItem);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
