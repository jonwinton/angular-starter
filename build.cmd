@echo off

set BASE=%~dp0
set NODE_DIR=%BASE%tools\node\windows\
set BIT_64=
set BIT_32=32
If Defined ProgramFiles(x86) (
    set BIT=%BIT_64%
) Else (
    set BIT=%BIT_32%
)

echo =============================================================
echo Validating node installation...
echo =============================================================

if exist "%NODE_DIR%node.exe" (
    goto standalone
) else (
    goto global
)

:standalone
REM If a standalone node installation exists, use that
set NODE=%NODE_DIR%node%BIT%.exe
echo Standalone node installation found!
echo Location: "%NODE%"

echo =============================================================
echo Installing dependencies...
echo =============================================================

CALL "%NODE_DIR%npm" install
CALL "%NODE_DIR%bower" install

echo =============================================================
echo Performing Grunt build...
echo =============================================================

CALL "%NODE_DIR%grunt" %*

goto continue

:global
REM Otherwise, assume global install is available
echo Global node installation found!

echo =============================================================
echo Installing dependencies...
echo =============================================================

CALL npm install
CALL bower install

echo =============================================================
echo Performing Grunt build...
echo =============================================================

CALL grunt %*

goto continue

:continue

echo DONE