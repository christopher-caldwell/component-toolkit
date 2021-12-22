#!/bin/sh

tsc

tscpaths -p tsconfig.json -s src -o dist > /dev/null
