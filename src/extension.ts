import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let eventCounter: number = 0

	vscode.window.onDidChangeTextEditorVisibleRanges((event) => {

		eventCounter++
		console.log('Event trigger counter', eventCounter);

		event.visibleRanges.forEach((range) => {
			console.log('Start line', range.start.line)
			console.log('End   line', range.end.line)
		})

	}, null, context.subscriptions)

}