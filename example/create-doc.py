#!/usr/bin/env python3

import subprocess
import webbrowser
import os
from os import path

scriptDir = path.dirname(path.abspath(__file__))

docStyleDir = path.join(scriptDir, "..");

# normpath is a workaround to use backslashes on windows
os.environ["DOCSTYLE_DIR"] = path.normpath(path.abspath(docStyleDir));

# Note, for the following line to work, the directory containing qdoc must be in the PATH variable
subprocess.call(["qdoc", path.join(scriptDir, "doc-style-example.qdocconf")])
webbrowser.open(path.join(scriptDir, "html", "index.html"))
