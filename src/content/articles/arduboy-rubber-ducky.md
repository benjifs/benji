---
title: "Arduboy Rubber Ducky"
date: 2017-12-02T06:31:18.186Z
summary: "Making the Arduboy simulate a keyboard and behave like a Rubber Ducky"
syndication:
- https://medium.com/benjifs/arduboy-rubber-ducky-ab593f0c1f15
tags:
- hacking
- security
- arduboy
---
### Overview

I've had the <a href="https://www.arduboy.com/" target="_blank">Arduboy</a> since backing it back in May of 2015. I played with it a little bit when I first got it but for the most part it's been sitting in my drawer.

I've also been following <a href="https://www.hak5.org/" target="_blank">Hak5</a> for a while and one of their projects I've always really liked is the <a href="https://hakshop.com/products/usb-rubber-ducky-deluxe" target="_blank">USB Rubber Ducky</a>. I dont own one myself but I have always liked the idea of the automated HID attacks, especially with the DuckyScript language and all the available <a href="https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Payloads" target="_blank">community payloads</a>.

About a week ago I decided it would be a good idea to take my Arduboy out of storage and try developing something small for it. After I realized it has an ATmega32u4 I thought I could use <a href="https://dukweeno.github.io/Duckuino/" target="_blank">Duckuino</a>, a DuckyScript to Arduino converter, and have it run on the Arduboy.

----

Once I got a basic DuckyScript to work, I thought I could add more than one DuckyScript and write a selection menu in order to take advantage of the buttons on the Arduboy.

Lastly, I added a splash screen after the initial boot process that shows a rubber ducky icon. In order to get into the actual selection menu for the DuckyScripts you have to press the <a href="https://en.wikipedia.org/wiki/Konami_Code" target="_blank">Konami Code</a> sequence. After that you should see a menu with all the payloads on the Arduboy.

### Setup
The first thing you're going to need to get this up and running on your own Arduboy is a copy of the <a href="https://github.com/benjifs/arduboy-rubber-ducky" target="_blank">Arduboy Rubber Ducky code</a> and the <a href="https://www.arduino.cc/en/Main/Software" target="_blank">Arduino IDE</a>.

Its also a good idea to install Arduboy from the `Boards Manager` in the Arduino IDE. To do this just go to preferences and add the following to "Additional Boards Manager URLs": ```https://arduboy.github.io/board-support/package_arduboy_index.json```


After that you can just go to Tools > Boards > Boards Manager, search for Arduboy and install it.

I also recommend installing the <a href="https://github.com/MLXXXp/Arduboy2" target="_blank">Arduboy2</a> library as the main branch of the Arduboy library is not currently being maintained.

Once everything is up and running it would be a good idea to try out some examples and even some games from the <a href="http://team-arg.com/games.html" target="_blank">Arduboy team</a> just to get used to the uploading to board process.

Whenever you're ready to upload the Arduboy Rubber Ducky code to your Arduboy you only need to press the upload button and you're done.

I've included the basic "Hello World" payloads with my code but you can either write your own DuckyScript payloads or get some from the <a href="https://github.com/hak5darren/USB-Rubber-Ducky/wiki/Payloads" target="_blank">community payloads</a>. You can convert from DuckyScript to Arduino by using the <a href="https://dukweeno.github.io/Duckuino/" target="_blank">Duckuino</a> converter which I'm hosting myself to have everything in one place. After converting your DuckyScript payload, you can just copy the contents of the `setup` function and add it the the `ducky.h` file.

After that just scroll down to the end of the `ducky.h` file and add the function you just created to the list as well as a label for the menu.

### Issues

I noticed in my testing that the payloads run a little slower coming from the Arduboy. You may find that you have to increase the delays in the scripts so that the commands run at the appropriate time.

Depending on which payloads I'm using I also sometimes run into size issues so this is something to keep in mind as you choose your payloads.

### Future Work

I'm going to try to get my hands on an actual USB Rubber Ducky at some point so that I can compare execution times. With that comparison I should be able to figure out what sort of delays will make more sense for the Arduboy and I can modify Duckuino to convert specifically for it.

### Questions

Feel free to contact me with any questions you may have.

You can also follow <a href="https://twitter.com/benjifs" target="_blank">@benjifs</a> on Twitter.

### Links
- [_GitHub Repo_](https://github.com/benjifs/arduboy-rubber-ducky)
- [_Duckyscript to Arduino converter_](http://benji.dog/ducky)
- [_Arduboy_](https://www.arduboy.com/)
- [_Arduino IDE_](https://www.arduino.cc/en/Main/Software)
- [_USB Rubber&nbsp;Ducky_](https://hakshop.com/products/usb-rubber-ducky-deluxe)
