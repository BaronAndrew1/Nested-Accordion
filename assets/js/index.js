var toggle = false
var event1 = document.querySelector("#clicks1");
var event2 = document.querySelector("#clicks2");
var event3 = document.querySelector("#clicks3");
var internalText1 = document.querySelector("#internalText1");
var internalText2 = document.querySelector("#internalText2");
var internalText3 = document.querySelector("#internalText3");


event1.addEventListener("click", function() {

toggle = !toggle

if(toggle) {
internalText1.textContent="Looking for the one superhero comic you just have to read. Like a sci fi Lone Wolf &amp; Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. Traveling back and forth through time, Cable recently traveled back to the future with a special purpose: Protect a mutant baby who could be mutantkind’s savior. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Sparks fly when this oddest of all couples kicks butts and takes names throughout the Marvel Universe. The Odd Couple of the Marvel Universe, Cable is a soldier from the future, fighting for peace today while Deadpool is the wisecracking, gun-for-hire by-product of the military’s Weapon X program. Youve found it. Cables the son of original X-Man Scott Summers and the clone of Jean Grey who grew up in a war-torn future ruled by Apocalypse. Amazing Spider-Man is the cornerstone of the Marvel Universe. Cables the son of original X-Man Scott Summers and the clone of Jean Grey who grew up in a war-torn future ruled by Apocalypse."
}

else {
  internalText1.textContent=""
}})

event2.addEventListener("click", function() {

toggle = !toggle

if(toggle) {
internalText2.textContent="Treated like an animal, it took years for him to control himself. Amazing Spider-Man is the cornerstone of the Marvel Universe. Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. The classic adventures of Spider-Man from the early days up until the 90s. Now, hes a premiere member of both the X-Men and the Avengers. Looking for the one superhero comic you just have to read. Marvels mighty mutants go worldwide and beyond in this series following Cyclops, Wolverine, Beast, Emma Frost and more in their astonishing adventures. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Youve found it."
}

else {
  internalText2.textContent=""
}})

event3.addEventListener("click", function() {

toggle = !toggle

if(toggle) {
internalText3.textContent="Youve found it. Collects Alias #1-28, What If. Now a chain-smoking, self-destructive alcoholic with a mean inferiority complex, Jones is the owner and sole employee of Alias Investigations - a small, private-investigative firm specializing in super-human cases. Her powers were unremarkable compared to the amazing abilities of the costumed icons that populate the Marvel Universe. Jessica Jones had Joined the Avengers. Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. In a city of Marvels, Jessica Jones never found her niche. First, a story where Wolverine and Hulk come together, and then Captain America and Cable meet up. What do you get when you ask the question, What if Spider-Man had a daughter. But her wit, charm and intelligence just may help her survive through another day. An excellent book, fit for readers of all ages. Get ready for action-packed stories featuring team-ups from your favorite Marvel heroes every month."
}

else {
  internalText3.textContent=""
}});
