L = LIVEABLE
    . = UNLIVEABLE
o = SPORE
   # = CULTURE

Rules:
a.If a LIVABLE area is empty and there are NO adjacent cell cultures,
    cells will take hold and begin to grow.
        b.If a culture is growing in a location where FOUR or more adjacent
locations are also occupied, then the culture dies
c.UNLIVABLE spaces are never occupied with culture

  1. Read text file and create an array of arrays.

  2. Create scanning frame function that checks the status of a spaces'
adjacent spaces, returns number of occupied spaces.

  3. Create "SPAWN" scanning function that loops through arrays, and
replaces Liveable spaces with temporary SPORE placeholder accoring through
Rule a, returns number of changes.

  4. Create "GROW" scanning function that loops through arrays, and
replaces all SPORES(o) with CULTURE(#)

  5. Create "DIE" scanning function that loops through arrays, and
either changes CULTURE(#) or LIVABLE(L) based on Rule b
returns number of changes

6. Create main while loop that runs so long as new cultures are spawned
or cultures die, include iteration counter

7. Create "REPORT" function that scans arrays, and returns:
a) Number of total iterations
b) Number of total locations
b) Number of culture locations
c) Ratio of culture to total as %

    STRETCH GOALS:
1. Is it worth it to only keep track of empty, LIVEABLE spaces ? So each
"SPAWN" loop doesn't have to evaluate every space, every time?
    - could be done during "DIE" step, output array of LIVEABLE spaces
