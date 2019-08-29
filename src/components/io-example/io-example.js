import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example
// we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title tag="span">Ezekiel 1 New American Standard Bible (NASB) - The Vision of Four Figures</Title>
        <p>
1 Now it came about in the thirtieth year, on the fifth day of the fourth month, while I was by the river Chebar among the exiles, the heavens were opened and I saw [a]visions of God. 2 (On the fifth of the month [b]in the fifth year of King Jehoiachin’s exile, 3 the word of the Lord came expressly to Ezekiel the priest, son of Buzi, in the land of the Chaldeans by the river Chebar; and there the hand of the Lord came upon him.)

4 As I looked, behold, a storm wind was coming from the north, a great cloud with fire flashing forth continually and a bright light around it, and in its midst something like glowing metal in the midst of the fire. 5 Within it there were figures resembling four living beings. And this was their appearance: they had human form. 6 Each of them had four faces and four wings. 7 Their legs were straight and [c]their feet were like a calf’s hoof, and they gleamed like burnished bronze. 8 Under their wings on their four sides were human hands. As for the faces and wings of the four of them, 9 their wings touched one another; their faces did not turn when they moved, each went straight forward. 10 As for the form of their faces, each had the face of a man; [d]all four had the face of a lion on the right and the face of a bull on the left, and [e]all four had the face of an eagle. 11 Such were their faces. Their wings were spread out above; each had two touching another being, and two covering their bodies. 12 And each went straight forward; wherever the spirit was about to go, they would go, without turning as they went. 13 [f]In the midst of the living beings there was something that looked like burning coals of fire, [g]like torches darting back and forth among the living beings. The fire was bright, and lightning was [h]flashing from the fire. 14 And the living beings ran to and fro like bolts of lightning.

15 Now as I looked at the living beings, behold, there was one wheel on the earth beside the living beings, [i]for each of the four of them. 16 The appearance of the wheels and their workmanship was like [j]sparkling beryl, and all four of them had the same form, their appearance and workmanship being as if [k]one wheel were within another. 17 Whenever they [l]moved, they [m]moved in any of their four [n]directions without turning as they [o]moved. 18 As for their rims they were lofty and awesome, and the rims of all four of them were full of eyes round about. 19 Whenever the living beings [p]moved, the wheels [q]moved with them. And whenever the living beings rose from the earth, the wheels rose also. 20 Wherever the spirit was about to go, they would go in that direction[r]. And the wheels rose close beside them; for the spirit of the living [s]beings was in the wheels. 21 Whenever those went, these went; and whenever those stood still, these stood still. And whenever those rose from the earth, the wheels rose close beside them; for the spirit of the living [t]beings was in the wheels.

Vision of Divine Glory
22 Now over the heads of the living [u]beings there was something like an expanse, like the awesome gleam of [v]crystal, spread out over their heads. 23 Under the expanse their wings were stretched out straight, one toward the other; each one also had two wings covering its body on the one side and on the other. 24 I also heard the sound of their wings like the sound of abundant waters as they went, like the voice of [w]the Almighty, a sound of tumult like the sound of an army camp; whenever they stood still, they dropped their wings. 25 And there came a voice from above the expanse that was over their heads; whenever they stood still, they dropped their wings.

26 Now above the expanse that was over their heads there was something resembling a throne, like [x]lapis lazuli in appearance; and on that which resembled a throne, high up, was a figure with the appearance of a man. 27 Then I [y]noticed from the appearance of His loins and upward something like [z]glowing metal that looked like fire all around within it, and from the appearance of His loins and downward I saw something like fire; and there was a radiance around Him. 28 As the appearance of the rainbow [aa]in the clouds on a rainy day, so was the appearance of the surrounding radiance. Such was the appearance of the likeness of the glory of the Lord. And when I saw it, I fell on my face and heard a voice speaking.
        </p>
      </Container>
    )}
  </IO>
);

export default IOExample;
