## Coding Challenge - Growing cell cultures in a medium
You are initially presented with a grid of cell culture medium. Your objective is to grow a stable set of cell cultures for a research study. Your assistant has spread the growth medium around the slide, but upon further analysis you notice that certain areas have sufficient medium for a
culture (these zones are considered Livable). Other zones are too thinly spread to sustain the culture. The unlivable zones are marked with a (.)
The initial slide may look like this:
>L.LL.LL.LL\
>LLLLLLL.LL\
>L.L.L..L..\
>LLLL.LL.LL\
>L.LL.LL.LL\
>L.LLLLL.LL\
>..L.L.....\
>LLLLLLLLLL\
>L.LLLLLL.L\
>L.LLLLL.LL

Then you distribute your cell culture around the grid. Those zones which were Livable have a chance for the culture to take hold and grow. The culture takes hold according to a specific set of rules. The cells require room to blossom, so if a livable area is empty and there are no adjacent cell cultures, the cells will take hold and begin to grow. The cells are also subject to crowding, so if a culture is growing in a location where four or more adjacent locations are also occupied, then the culture dies back. Otherwise, no change occurs. Unlivable spaces are never occupied with a culture. After one hour of growth, according to these rules, every livable location sprouts a culture:

>#.##.##.##\
>#######.##\
>#.#.#..#..\
>####.##.##\
>#.##.##.##\
>#.#####.##\
>..#.#.....\
>##########\
>#.######.#\
>#.#####.##

After a second hour, some cultures have succumbed to overcrowding and died back:
>#.LL.L#.##\
>#LLLLLL.L#\
>L.L.L..L..\
>#LLL.LL.L#\
>#.LL.LL.LL\
>#.LLLL#.##\
>..L.L.....\
>#LLLLLLLL#\
>#.LLLLLL.L\
>#.#LLLL.##

Over the course of the next three hours, the cultures continue to bloom anew and die back:
>#.##.L#.##\
>#L###LL.L#\
>L.#.#..#..\
>#L##.##.L#\
>#.##.LL.LL\
>#.###L#.##\
>..#.#.....\
>#L######L#\
>#.LL###L.L\
>#.#L###.##

>#.#L.L#.##\
>#LLL#LL.L#\
>L.L.L..#..\
>#LLL.##.L#\
>#.LL.LL.LL\
>#.LL#L#.##\
>..L.L.....\
>#L#LLLL#L#\
>#.LLLLLL.L\
>#.#L#L#.##

>#.#L.L#.##\
>#LLL#LL.L#\
>L.#.L..#..\
>#L##.##.L#\
>#.#L.LL.LL\
>#.#L#L#.##\
>..L.L.....\
>#L#L##L#L#\
>#.LLLLLL.L\
>#.#L#L#.##

But then, the cultures stabilize. Further application of the rules causes no change in the state of
the system. At this point, you can harvest your cell cultures and conduct your research.

Your initial slide state is provided in the accompanying text file. Using that data as your starting
position, write code to calculate answers to the following questions:
• In your provided grid, how many hours (iterations) does it take to stabilize the cultures?
• How many cell locations are occupied with cultures on the final day (when it stabilizes)?
• What is the ratio of spaces upon which the culture has taken hold to total Livable spaces
on the final day as a percentage?
You may use whatever coding language you prefer. Submit your source code, along with the
answers to the questions above. Create your submission in your personal github account and
send a link. Or alternately you can ZIP up the file(s) and email them.
