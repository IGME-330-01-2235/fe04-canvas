# fe-04 : Canvas

Your goal is to use the canvas create an animated clock that looks roughly like this:

https://github.com/IGME-330-01-2235/fe04-canvas/assets/1882129/745dd633-92dd-40d7-845f-8cd545be1f3f

## Recommended Steps

#### 0 - Initial Setup

Perform the steps we are getting used to for every repository setup. (Except you don't have to worry about test commands, as there are none for this exercise.)

<details>
<summary> <i>Hint: Initial Setup</i> </summary>

1. Clone the Repo
2. Open GitBash at the repo root folder.
3. Run `npm install`
4. ~~Run `npm run test:install`~~ - no tests this exercise
5. Run `npm start`
6. ~~(In a new GitBash window) Run `npm run test:unit`~~ - no tests this exercise
7. ~~(In a new GitBash window) Run `npm run test:e2e`~~ - no tests this exercise
8. Open the project in VS Code
9. Open the browser to http://localhost:5173

</details>

<br/><br/>

#### 1 - Draw the Clock Circle

First, life is easier with transforms. Use a `translate` command to move the origin to the center of the canvas.

Then set the `strokeStyle` to the color you'd like to have the clock circle to have, and the `lineWidth` to something reasonable (I picked 5).

Call `beginPath`, make a full circle with `arc`, and then `stroke` it. At this point, your canvas should have a nice big circle.

<br/><br/>

#### 2 - Draw the Minute/Second Tick Marks

Set the `lineWidth` to something like 3 and `beginPath`.

Then, write a `for` loop that goes for 60 steps. Use `moveTo` to get to the edge of the clock, then `lineTo` to make a tick. Here's the fun part - rather than math out where these lines start and stop - we'll just use a `rotate` command to move 1/60th of the way around the clock. The y coordinate of those `moveTo` and `lineTo` operations can stay at 0, we'll let the transform do the work.

Outside of the `for` loop, call `stroke` to actually see the tick marks.

<br/><br/>

#### 3 - Draw the Hour Tick Marks and Numbers

Use a similar strategy to Step 2 to handle the heavier hour tick marks. Where it gets tricky is the text.

I used `font` of `'48px Arial'` and also `textAlign` of `'center'` (which helps even out the placement of the wider hours).

I recommend calling `save()` to remember the current transform, then `translate` out to where the number should be drawn, and `rotate(1/12 of a circle * -i)` (assuming your for loop is using `i`) to make sure the text shows rightway up. Do a `fillText` using `hours[i].toString()` to draw the number. Finally, call `restore()` to go back to that remembered transform, followed by a `rotate(1/12 of a circle)`. If the text is giving you trouble, skip it (and maybe come back to it later).

<br/><br/>

#### 4 - Draw the Hands

Notice that I gave you a helper function `getHandsFromTimeMS(Date.now())` that does a lot of the heavy-lifting for you.

`save()` the transform, `rotate()` by `hands.{something}Radians`, draw the `something` hand, and then `restore()`
