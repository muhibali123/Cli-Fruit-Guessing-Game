#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";

const fruits: string[] = [
  "apple",
  "banana",
  "orange",
  "melon",
  "mango",
  "strawberry",
  "peach",
  "watermelon",
];
console.log(
  gradient.pastel(
    "-------------------------------------------------------------------------------------------------------------------------------------------------------\n"
  )
);
console.log(
  gradient.instagram("\n\t\t\t Welcome to our fruit guessing game \n")
);
console.log(
  gradient.pastel(
    "-------------------------------------------------------------------------------------------------------------------------------------------------------\n"
  )
);

let first_name = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.bold.italic.yellowBright("Please enter your name"),
  },
]);
let play_message = await inquirer.prompt([
  {
    name: "confirmmessage",
    type: "confirm",
    message: chalk.bold.italic.blueBright(
      `${first_name.name} are you sure you want to play this fruit guessing game`
    ),
  },
]);
if (play_message.confirmmessage === true) {
  console.log(chalk.bold.italic.greenBright("Let's start our game"));
  console.log(chalk.bold.italic.cyanBright("Hint :"));
  console.log(
    chalk.bold.italic.yellowBright(
      "The hint is in this game all fruits names are common"
    )
  );
  function randomfruits() {
    let random_index = Math.floor(Math.random() * fruits.length);
    return fruits[random_index];
  }

  const ex_fruits = randomfruits();

  let user_fruits = await inquirer.prompt([
    {
      name: "userfruits",
      type: "input",
      message: chalk.bold.italic.greenBright("guess a common fruit name"),
    },
  ]);
  if (user_fruits.userfruits === ex_fruits) {
    console.log(
      chalk.bold.italic.cyanBright(
        `Congratulations ${first_name.name} you guess right fruit name`
      )
    );
    console.log(
      gradient.morning(
        "Thank you for playing this fruit game i hope you will like it "
      )
    );
  } else {
    console.log(
      chalk.bold.italic.redBright(
        `sorry ${first_name.name} you guess wrong fruit name. Better luck next time `
      )
    );
    console.log(
      chalk.bold.italic.yellowBright(
        `The correct fruit name is : ${ex_fruits} `
      )
    );
  }
} else {
  console.log(
    gradient.rainbow("if you want to play this game please try again")
  );

  console.log(
    chalk.magentaBright("Thank you soo much for running my fruit guessing game")
  );
}
