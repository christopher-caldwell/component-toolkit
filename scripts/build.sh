#!/bin/sh

tsc

tscpaths -p tsconfig.json -s src -o dist > /dev/null

# microbundle \
#   --jsx 'React.createElement' \
#   --jsxImportSource react \
#   --globals react/jsx-runtime=jsx \
#   --format modern,cjs
