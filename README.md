# Typescript + Electron + NodeJS bot engine.

## Instructions/Functionality

There is a folder called `src` which houses the main structure needed to run the bot. The `index.ts` file in the `src` folder will contain all the functions necessary to start/stop and handle state. The backend can either be hooked up to a frontend or cli with modification, right now it is aimed towards frontend.

## How it Works

When you start in developer mode it will typescript compile everything into the `out/` folder. The development server will then compile each modules file into bytecode and store it. On startup the engine will retreieve all modules/their bytecode and then save them all in an object containing their class constructors. Each bytecode instance/class consturctor will have its own working directory, so it knows where to retreive things it has required.

## How to Test

Run `npm run dev` and enjoy!