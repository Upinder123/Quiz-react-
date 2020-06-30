var quizQuestions = [
    {
        question: "Which command defines the author email to be used for all commits by the current user.",
        correct:"git config --global user.email <email>",
        answerOptions: [
            "git clean -f <path>","git config --global user.email <email>","git merge --no-ff <email>","git email--amend"
        ],
        
    },
    {
        question:"Which one of the following is not part of the data structure of a Git repository?",
        correct:"Body element",
answerOptions:["Body element","Branch pointer","Commit object","HEAD pointer"]
    },
    {
    question:"Which Git command changes where the HEAD pointer points and modifies the contents of the working directory?",
    answerOptions:["checkout","merge","mv","pull"],
    correct:"checkout"

    },
    {
        question: " ___________________ removes untracked files from your working directory.",
        correct:"git clean",
        answerOptions: [
            "git commit","git clean -f <path>","git clean","git reset"
        ],
        
    },
   { 
        question:"Which file can you configure to ensure that certain file types are never committed to the local Git repository?",
        correct:".gitignore",
        answerOptions:["ignore.git",".gitignore","gitignore.txt","git.ignore"]
        },
    {
        question:"Which command should you use to initialize a new Git repository?",
        correct:"git init",
        answerOptions:["git bash","git install","git init","git start"  ],
        }
];
  
  export default quizQuestions;
  