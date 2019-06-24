# nextBus
## Problem Statement
Program to tell you how long it is until the next bus on “BUS ROUTE” leaving from “BUS STOP NAME” going “DIRECTION” using the api defined at http://svc.metrotransit.org/

“BUS ROUTE” will be a substring of the bus route name which is only in one bus route

“BUS STOP NAME” will be a substring of the bus stop name which is only in one bus stop on that route

“DIRECTION” will be “north” “east” “west” or “south”

Eg, if you wanted to know the next bus leaving from our Brooklyn Park campus to our downtown campus:
```
$ node nextBus.js “Express - Target - Hwy 252 and 73rd Av P&R - Mpls” “Target North Campus Building F” “south”
2 Minutes
```
(note that that won’t return anything if the last bus for the day has already left)


Or if you wanted to take the light rail from downtown to the Mall of America or the Airport:

```
$ node nextBus.js “METRO Blue Line” “Target Field Station Platform 1” “south” 
8 Minutes
```


## Setup
1. Clone the repository to your local
```
mkdir nextBus
cd nextBus
git clone https://github.com/charanjeet2008/nextBus.git .
```

2. Install required packages
```
npm install
```


## Usage
```
node nextBus.js {BusRoute} {BusStopName} {Direction}

node nextBus.js "18 - Nicollet Av -Grand Av - South Bloomington" "South Bloomington Transit Center" "NORTHBOUND"
```

## Todo
Directions, Routes and Stops API's response can be cached in Memcache/Redis with the key of queryArguments,Date
 