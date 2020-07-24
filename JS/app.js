
var quiz = {
    draw: function () {
        var form = document.getElementsByTagName('form')[0];

        for (index in questions) {
            var div = document.createElement('div');
            var h2 = document.createElement('h2');
            h2.classList.add("calc");
            var num = parseInt(index) + 1;
            h2.innerHTML = num + ". " + questions[index]["que"]

            div.appendChild(h2)
            form.appendChild(div)

            for (index2 in questions[index]["opt"]) {

                var label = document.createElement('label');
                var p = document.createElement('p')
                var input = document.createElement("input");
                input.type = "radio"
                input.required = true
                input.name = "ques-" + num
                input.value = index2;
                input.classList.add("haha", "quizCalc");
                if (input.value == 4) {
                    input.style.display = "none"
                }



                p.className = "inp";
                p.classList.add("inp", "toy")
                p.appendChild(input)



                var txt = document.createTextNode(questions[index]["opt"][index2]);
                p.appendChild(txt)

                label.appendChild(p)
                div.appendChild(label)

                form.appendChild(div)
            }

        }

        var btn = document.createElement('input')
        btn.type = "submit"

        form.appendChild(btn);
        form.addEventListener("submit", quiz.submit)
    },

    submit: function (event) {
        event.preventDefault();
        event.stopPropagation();

        var s = document.querySelectorAll(".quizCalc:checked")
        var sum = 0
        for (i in questions) {

            if (s[i].value == questions[i]["ans"]) {
                sum++
            }
        }

        for (m = 0; m < questions.length; m++) {
            var totalQuestions = (questions.length);
        }

        alert(sum + " out of " + totalQuestions + " questions answered correctly")
    }
}

window.addEventListener("load", quiz.draw)


var questions = [
    {
        que: "Which of the below continent is the largest in the world ?",
        opt: ["Asia", "Africa", "Europe", "america", ""],
        ans: 0
    },
    {
        que: "Which is the fastest terrestrial animal ?",
        opt: ["Cuckoo", "Snake", "Cheetah", "snail", ""],
        ans: 2
    },


    {
        que: "Which is of the below animals is a dinosaur ?",
        opt: ["Velociraptor", "giraffe", "Rhinoceros", "Anaconda", ""],
        ans: 0
    },
    {
        que: "Which of the below animals is bigger than a golf ball?",
        opt: ["Grasshopper", "Scorpion", "Mosquito", "Rabbit", ""],
        ans: 3
    },

    {
        que: "Which of the following animals is not a mammal?",
        opt: ["Bat", "Butterfly", "Dog", "Cat", ""],
        ans: 1
    }

]   