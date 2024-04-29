/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'


const questions = [
  {
    type: 'input',
    name: 'url',
    message: "What's the url bro?",
  }
]

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '')); 
  qr.image((answers.URL,null,''),{type : 'png'}).pipe(fs.createWriteStream('qr_image.png'));
});


    
  //})
 // .catch((error) => {
    //if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //} else {
      // Something else went wrong
    //}
  //});
