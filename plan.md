    L = LIVEABLE
    . = UNLIVEABLE
    o = SPORE
    # = CULTURE

## Rules:
> a) If a LIVABLE area is empty and there are NO adjacent cell cultures, cells will take hold and begin to grow.
>
> b) If a culture is growing in a location where FOUR or more adjacent
locations are also occupied, then the culture dies
>
> c) UNLIVABLE spaces are never occupied with culture

## STEPS
1. Read text file and create an array of arrays.

1. Create scanning frame function that checks the status of a spaces' adjacent spaces, returns number of occupied spaces.

1. Create "SPAWN" scanning function that loops through arrays, and replaces Liveable spaces with temporary SPORE placeholder accoring through Rule a, returns number of changes.

1. Create "GROW" scanning function that loops through arrays, and replaces all SPORES(o) with CULTURE(#)

1. Create "DIE" scanning function that loops through arrays, and either changes CULTURE(#) or LIVABLE(L) based on Rule b returns number of changes

1. Create main while loop that runs so long as new cultures are spawned or cultures die, include iteration counter

1. Create "REPORT" function that scans arrays, and returns:
    - Number of total iterations
    - Number of total locations
    - Number of culture locations
    - Ratio of culture to total as %

## STRETCH GOALS:
- Is it worth it to only keep track of empty, LIVEABLE spaces ? 
    - each "SPAWN" loop doesn't have to evaluate every space, every time?
    - could be done during "DIE" step, output array of LIVEABLE spaces
