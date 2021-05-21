import { LanguageCommandInfo } from "../../interfaces/Command";
import { ILanguageService } from "../../interfaces/Language";
import languages from "./languages"

export class LanguageService implements ILanguageService {
    constructor(public language) { };

    public getMessage(message: string): string {
        return languages[this.language]["messages"][message];
    }

    public getCommandInfo(command: string): LanguageCommandInfo {
        return languages[this.language]["commands"][command];
    }

    public getWord(word: string): string {
        return languages[this.language]["words"][word];
    }
}