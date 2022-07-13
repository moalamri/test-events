import { window, OutputChannel } from 'vscode'

class ExtLogger {
    private static _instance: ExtLogger;
    public static get instance() {
        if (!ExtLogger._instance) {
            ExtLogger._instance = new ExtLogger();
        }
        return ExtLogger._instance;
    }

    private _logger: OutputChannel;

    constructor() {
        this._logger = window.createOutputChannel('Events example');
    }

    public log(message: any) {
        this._logger.appendLine(`[LOG]: ${message}`);
        //console.log(message);
    }

    public error(message: any) {
        this._logger.appendLine(`[ERROR]: ${message}`);
        //console.error(message);
    }
}

export const Logger = ExtLogger.instance;