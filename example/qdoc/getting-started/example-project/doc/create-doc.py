#!/usr/bin/env python3

import subprocess
import os

scriptDir = os.path.dirname(os.path.abspath(__file__))

docStyleDir = os.path.abspath(os.path.join(scriptDir, "..", "..", "..", "..", ".."));

print(docStyleDir)

# normpath is a workaround to use backslashes on windows
os.environ["DOCSTYLE_DIR"] = os.path.normpath(docStyleDir);

# Note, for the following line to work, the directory containing qdoc must be in the PATH variable
subprocess.call(["qdoc", os.path.join(scriptDir, "example.qdocconf")])
