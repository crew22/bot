import { ILanguageService, LanguageStringParams } from "../../interfaces/Language";
import languages from "./languages"

export class LanguageService implements ILanguageService {
    constructor(public language) {};

    public get(key: any): string {
        return languages[this.language][key];
    }
}