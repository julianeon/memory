# Description

This is a memory app card game made using React and hooks, and the spread operator. I tried to find a very simple one online and couldn't - many of them were written before the advent of hooks. This one is about as minimally complicated as it can be, for its functionality.

Basically it's got a state variable that remembers the last item chosen, and its position. It then checks, upon selection of an item: Is this the same name as the last one - and if so, is it in the same position? (You don't want that because then you could just click on the same item, twice).

If it has the same name as the last chosen item and it's in a different position, it's a match - put it in the 'show' array. Whenever items are rendered, they're gray if they're not in that array, and shown permanently in their actual colors if they are in it.

The exception is the item you just clicked on, which appears for like 1 second.

# Ideas for Improvement.

It would be better if there was an array of choices - say, ["dog","cat","bird","fish"] - and the app randomly inserted them into the 3x4 display.

Also, it would be even better if instead of being represented by a name, there was instead an image showing the animal (an SVG so it would be responsive).
