#!/bin/sh

PLATFORM=$(uname | tr '[A-Z]' '[a-z]')
ARCH=$(getconf LONG_BIT)
BASE="$(cd "$(dirname "$_")"; pwd)"
NODE_DIR="$BASE/tools/node/$PLATFORM-x$ARCH"
NODE="$NODE_DIR/bin/node"

printf '=============================================================\n'
printf 'Validating node installation...\n'
printf '=============================================================\n'

if [ -e "$NODE_DIR" ]; then
    # If a standalone node installation exists, use that
    chmod 770 "$NODE"

    printf 'Standalone node installation found!\n'
    printf 'Location: %s\n' "$NODE"

    printf '=============================================================\n'
    printf 'Installing dependencies...\n'
    printf '=============================================================\n'

    "$NODE_DIR/bin/npm" install
    "$NODE" "$NODE_DIR/bin/bower" install

    printf '=============================================================\n'
    printf 'Performing Grunt build...\n'
    printf '=============================================================\n'

    "$NODE" "$NODE_DIR/bin/grunt" $@
else
    # Otherwise, assume global install is available
    printf 'Global node installation found!\n'

    printf '=============================================================\n'
    printf 'Installing dependencies...\n'
    printf '=============================================================\n'

    npm install
    bower install

    printf '=============================================================\n'
    printf 'Performing Grunt build...\n'
    printf '=============================================================\n'

    grunt $@
fi

printf 'DONE'