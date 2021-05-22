import { Language } from "../../../interfaces/Language";

const tr: Language = {
    commands: {
        "8ball": {
            description: "Şansını dene!",
            args: ["...soru"]
        },
        help: {
            description: "Komutlar ile ilgili detaylı bilgi!",
            args: ['"kategori veya komut"']
        }
    },
    messages: {
        thinkingAboutQuestion: "Sorunun cevabını düşünüyorum",
        askYourQuestion: "Cevaplamam için sorunu sormak zorundasın.",
        withoutDoubt: "Şüphesiz!",
        itIsCertain: "Bu kesin!",
        asISeeYes: "Gördüğüm kadarıyla evet.",
        mostLikely: "Büyük ihtimalle.",
        askAgainLater: "Emin olamadım, daha sonra tekrar sor!",
        betterNotTellNow: "Sana şimdi söylememem daha iyi olur!",
        mySourcesSayNo: "Kaynaklarımdan öğrendiğim kadarıyla, hayır.",
        veryDoubtful: "Çok şüpheli.",
        commandNotFound: "Komut bulunamadı!",
        commandUnderMaintenance: "Bu komut bakım altında!",
        listOfCommands: "İstediğiniz kategorideki tüm komutların listesi:"
},
    words: {
        name: "İsim",
        description: "Açıklama",
        arguments: "Parametreler",
        permission: "Yetki",
        commands: "Komutları"
    }
}

export default tr;