import { Language } from "../../../interfaces/Language";

const en: Language = {
    commands: {
        "8ball": {
            description: "Try your chance!",
            args: ["...question"]
        },
        help: {
            description: "Help commands!",
            args: ['"category or command"']
        }
    },
    messages: {
        thinkingAboutQuestion: "Thinking about your question",
        askYourQuestion: "You must ask your question for me to answer.",
        withoutDoubt: "Without doubt!",
        itIsCertain: "It is certain!",
        asISeeYes: "As I see it, yes.",
        mostLikely: "Most likely.",
        askAgainLater: "I couldn't be sure, ask again later!",
        betterNotTellNow: "Better not tell you now!",
        mySourcesSayNo: "My sources say no.",
        veryDoubtful: "Very doubtful.",
        commandNotFound: "Command not found!",
        commandUnderMaintenance: "This command is under maintenance!",
        listOfCommands: "List of commands of category you choose:"
    },
    words: {
        name: "Name",
        description: "Description",
        arguments: "Arguments",
        permission: "Permission",
        commands: "Commands"
    }
}

export default en;