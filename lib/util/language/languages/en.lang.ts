import { Language } from "../../../interfaces/Language";

const en: Language = {
    commands: {
        "8ball": {
            description: "Try your chance!",
            args: ["...question"]
        }
    },
    messages: {
        withoutDoubt: "Without doubt!",
        itIsCertain: "It is certain!",
        asISeeYes: "As I see it, yes.",
        mostLikely: "Most likely.",
        askAgainLater: "I couldn't be sure, ask again later!",
        betterNotTellNow: "Better not tell you now!",
        mySourcesSayNo: "My sources say no.",
        veryDoubtful: "Very doubtful.",
        commandNotFound: "Command not found!",
        commandUnderMaintenance: "This command is under maintenance!"
    },
    words: {
        name: "Name",
        description: "Description",
        arguments: "Arguments",
        permission: "Permission"
    }
}

export default en;