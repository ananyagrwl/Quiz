const data = [
    {
        "Ques": [
            {
                "ques": "HTML stands for -"
            },
            {
                "options": [
                    {
                        "a": "HighText Machine Language"
                    },
                    {
                        "b": "HyperText and links Markup Language"
                    },
                    {
                        "c": "HyperText Markup Language"
                    },
                    {
                        "d": "None of these"
                    }
                ]
            },
            {
                "correctAns": {
                    "c": "HyperText Markup Language"
                }
            }
        ]
    },
    {
        "Ques": [
            {
                "ques": "The correct sequence of HTML tags for starting a webpage is -"
            },
            {
                "options": [
                    {
                        "a": "Head, Title, HTML, Body"
                    },
                    {
                        "b": "HTML, Body, Title, Head"
                    },
                    {
                        "c": "HTML, Head, Title, Body"
                    },
                    {
                        "d": "Head, Body, Title, HTML"
                    }
                ]
            },
            {
                "correctAns": {
                    "d": "HTML, Head, Title, Body"
                }
            }
        ]
    },
    {
        "Ques": [
            {
                "ques": "Which of the following element is responsible for making the text bold in HTML?"
            },
            {
                "options": [
                    {
                        "a": "<pre>"
                    },
                    {
                        "b": "<a>"
                    },
                    {
                        "c": "<b>"
                    },
                    {
                        "d": "<br>"
                    }
                ]
            },
            {
                "correctAns": {
                    "c": "<b>"
                }
            }
        ]
    },
    {
        "Ques": [
            {
                "ques": "Which of the following tag is used for inserting the largest heading in HTML?"
            },
            {
                "options": [
                    {
                        "a": "<h3>"
                    },
                    {
                        "b": "<h1>"
                    },
                    {
                        "c": "<h5>"
                    },
                    {
                        "d": "<h6>"
                    }
                ]
            },
            {
                "correctAns": {
                    "b": "<h1>"
                }
            }
        ]
    },
    {
        "Ques": [
            {
                "ques": "Which of the following tag is used to insert a line-break in HTML?"
            },
            {
                "options": [
                    {
                        "a": "<br>"
                    },
                    {
                        "b": "<a>"
                    },
                    {
                        "c": "<pre>"
                    },
                    {
                        "d": "<b>"
                    }
                ]
            },
            {
                "correctAns": {
                    "a": "<br>"
                }
            }
        ]
    }


]

const opt = document.querySelectorAll(".opt")
let score = 0;
var quiz=document.getElementById("quiz")
var report= document.getElementById("report")


function allEnabled() {
    opt.forEach((i) => {
        i.disabled = false;
    })
}

function allDisabled() {
    opt.forEach((i) => {
        i.disabled = true;
    })
}

function defaultColour() {
    opt.forEach((i) => {
        i.style.backgroundColor = "rgb(221, 220, 220)";
        i.style.color = "black"
    })
}

var index = 0
question.innerHTML = `Q${index+1}. ${data[index].Ques[0].ques}`
opt1.value = data[index].Ques[1].options[0].a
opt2.value = data[index].Ques[1].options[1].b
opt3.value = data[index].Ques[1].options[2].c
opt4.value = data[index].Ques[1].options[3].d

function next(a) {
    if (index == 3) { 
        const Next=document.getElementById("next")
        Next.innerHTML = "Finish";  }

    if (index < 4) {
        index++;
        question.innerHTML = `Q${index+1}. ${data[index].Ques[0].ques}`
        opt1.value = data[index].Ques[1].options[0].a
        opt2.value = data[index].Ques[1].options[1].b
        opt3.value = data[index].Ques[1].options[2].c
        opt4.value = data[index].Ques[1].options[3].d
        allEnabled()
        defaultColour()
    }
    else if (index === 4) {
        report.classList.remove("hide")
        quiz.classList.add("hide")
        const Score=document.getElementById("score")
        Score.innerHTML = score;
    }
}

function correctAns(a) {
    opt.forEach((a) => {
        if (a.value == Object.values(data[index].Ques[2].correctAns)[0]) {
            a.style.backgroundColor = "green"
            a.style.color="white"
        }
    })
}

opt.forEach((a) => {
    a.addEventListener("click", () => {
            if (a.value == Object.values(data[index].Ques[2].correctAns)[0]) {
                a.style.backgroundColor = "green"
                a.style.color="white"
                score= score+1;
            }
            else { 
                a.style.backgroundColor = "red"
                a.style.color="white"    
            }
        correctAns();
        allDisabled();
    })
})


function again(){
    score = 0;
    index = 0;
    question.innerHTML = `Q${index+1}. ${data[index].Ques[0].ques}`
    opt1.value = data[index].Ques[1].options[0].a
    opt2.value = data[index].Ques[1].options[1].b
    opt3.value = data[index].Ques[1].options[2].c
    opt4.value = data[index].Ques[1].options[3].d
    allEnabled()
    defaultColour()
    report.classList.add("hide")
    quiz.classList.remove("hide")
    next.innerHTML = "Next";
}

