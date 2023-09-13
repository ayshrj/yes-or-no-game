// Question.js
import React from "react";

function convertToArray(inputString) {
  return inputString.split('\n').filter(item => item.trim() !== '');
}

const YesAnswerString = `Is the sky typically blue during the day?
Can birds fly?
Is water wet?
Is the Earth round?
Do dogs have four legs?
Is 2 + 2 equal to 4?
Is the sun a source of light?
Are bananas a type of fruit?
Can humans breathe underwater without assistance?
Is New York City located in the United States?
Is the moon a natural satellite of Earth?
Can humans walk on two legs?
Is the ocean salty?
Can you swim in a pool?
Are roses a type of flower?
Is the Earth part of the solar system?
Do fish live in water?
Can you write with a pen?
Is the Statue of Liberty located in New York?
Are elephants the largest land animals?
Is the human heart responsible for pumping blood?
Can you hear sounds with your ears?
Is the sky clear on a cloudless day?
Do bees make honey?
Is the Pacific Ocean the largest ocean on Earth?
Can you eat apples?
Is soccer a popular sport worldwide?
Are giraffes known for their long necks?
Can you read books?
Is lightning a form of electrical discharge?
Do stars shine in the night sky?
Is the Great Wall of China a historic landmark?
Can you drink water to stay hydrated?
Are penguins birds?
Is the Earth's surface covered with land and water?
Do trees provide oxygen?
Is the Eiffel Tower located in Paris?
Can you ride bicycles?
Are dolphins known for their intelligence?
Is the Sahara Desert the largest hot desert in the world?
Do cars have wheels?
Can you watch movies in a theater?
Is the Atlantic Ocean the second-largest ocean on Earth?
Are computers used for various tasks?
Is snow made of frozen water?
Can you cook food in a microwave?
Is the Amazon River the longest river in the world?
Are lions considered apex predators?
Can you play musical instruments?
Is the Statue of Liberty green?
Do people use smartphones for communication?
Is the Nile River located in Africa?
Can you take photographs with a camera?
Is the Leaning Tower of Pisa tilted?
Are honeybees important for pollination?
Can you send emails?
Is the Sydney Opera House an iconic building?
Do ants live in colonies?
Can you wear shoes on your feet?
Is the Sun a star?
Is the Mona Lisa a famous painting?
Can you use a fork to eat food?
Are diamonds considered precious gems?
Is the Red Sea located between Africa and Asia?
Do humans need sleep for rest?
Can you travel by train?
Is the internet accessible on computers?
Are kangaroos marsupials?
Can you write with a pencil?
Is the White House the official residence of the US President?
Do spiders spin webs?
Can you swim in the ocean?
Is the Statue of Liberty a symbol of freedom?
Are bicycles a mode of transportation?
Can you fly on airplanes?
Is the Earth the third planet from the Sun?
Do eagles have sharp talons?
Can you watch television shows on TV?
Is Mount Everest the tallest mountain in the world?
Are strawberries a type of berry?
Can you brush your teeth with a toothbrush?
Is the Mona Lisa displayed in the Louvre Museum?
Do birds lay eggs?
Can you use a spoon to eat soup?
Is the Great Barrier Reef the largest coral reef system?
Are pandas native to China?
Can you listen to music with headphones?
Is the United Nations headquartered in New York City?
Do snakes slither on the ground?
Can you wear a hat on your head?
Is the Grand Canyon a natural wonder?
Are spiders arachnids?
Can you bake cookies in an oven?
Is the Pythagorean theorem a mathematical concept?
Do cows produce milk?
Can you sail on the ocean?
Is the Colosseum an ancient amphitheater?
Are rainbows a meteorological phenomenon?
Can you drink coffee to stay awake?
Is the Venus flytrap a carnivorous plant?`

const NoAnswerString = `Is the sun made of paper?
Can elephants fly without wings?
Is the Pacific Ocean located in Europe?
Do fish breathe underwater with gills?
Is gold a gas at room temperature?
Can you see in complete darkness?
Is water dry?
Are rocks edible?
Can humans breathe underwater without assistance?
Is the Earth flat?
Are cars typically used for underwater travel?
Can you swim in a desert?
Is snow hot to the touch?
Do trees have wings for flying?
Is the Great Wall of China located in South America?
Can you breathe in outer space?
Are bananas a type of metal?
Is fire cold?
Can you eat a cloud?
Is the North Pole located in Antarctica?
Do bicycles have fins for swimming?
Is the Eiffel Tower made of cheese?
Can you find penguins in the Sahara Desert?
Is the Moon a source of daylight?
Do televisions grow on trees?
Can you drink sunlight?
Is sand a type of liquid?
Are mountains made of candy?
Can you taste the color blue?
Is the Atlantic Ocean located in Asia?
Are houses built from clouds?
Can you hear colors?
Is the speed of light slower than a snail's pace?
Are trees known for their ability to speak?
Can you touch a rainbow?
Is the desert full of icebergs?
Do rocks have a sense of humor?
Can you walk on clouds?
Is the Earth's nearest star a refrigerator?
Are oceans made of soda?
Can you smell the number seven?
Is the Sahara Desert a lush rainforest?
Do cars have wings for flying?
Is the North Pole located in the Himalayas?
Can you taste the sound of music?
Is the Sun a giant light bulb?
Do rivers flow uphill?
Is the sky made of cotton candy?
Can you drink lava?
Is fire a type of liquid?
Are mountains made of chocolate?
Can you swim in a volcano?
Is the Moon a piece of Swiss cheese?
Do clouds have roots in the ground?
Can you eat the wind?
Is the Atlantic Ocean full of lemonade?
Can you see through walls with your eyes closed?
Is sandpaper a type of bread?
Are stars just tiny dots on the ceiling of the world?
Can you taste the smell of flowers?
Is the desert covered in snow?
Do bicycles have taste buds?
Is the Eiffel Tower a giant sandwich?
Can you hear the taste of ice cream?
Is the Great Wall of China made of rubber bands?
Are rocks made of cotton candy?
Can you swim in a rainbow?
Is the North Pole a tropical beach?
Do trees wear sunglasses?
Can you eat the ocean's waves?
Is the Moon a giant cookie?
Is fire a type of music?
Can you touch a thought?
Is the Sahara Desert a frozen tundra?
Are clouds made of marshmallows?
Can you hear the color green?
Is sand a type of fruit?
Are mountains made of feathers?
Can you taste the temperature?
Is the Atlantic Ocean a pool of jelly?
Do cars have dreams?
Is the sky a giant canvas?
Can you swim in a rainbow?
Is the Eiffel Tower a treehouse?
Are rocks made of chocolate chips?
Can you taste the future?
Is the Great Wall of China a giant bookshelf?
Are trees made of spaghetti?
Can you hear the silence?
Is the Moon a disco ball?`

export const questionsWithYesAnswer = convertToArray(YesAnswerString);
export const questionsWithNoAnswer = convertToArray(NoAnswerString);

// export const questionsWithYesAnswer = ["Is the sky typically blue during the day?", "Can birds fly?", "Is water wet?", "Is the Earth round?", "Do dogs have four legs?", "Is 2 + 2 equal to 4?", "Is the sun a source of light?", "Are bananas a type of fruit?", "Can humans breathe underwater without assistance?", "Is New York City located in the United States?"]
// export const questionsWithNoAnswer = ["Is the moon made of cheese?", "Are penguins capable of flying?", "Is the Sahara Desert covered in lush vegetation?", "Do snakes have legs?", "Is Earth's nearest star the Moon?", "Is the capital of France London?", "Can you hear sound in a vacuum?", "Is Antarctica a tropical paradise?", "Is ice cream typically served hot?", "Is the speed of light slower than the speed of sound?"]

export default {questionsWithYesAnswer, questionsWithNoAnswer};
