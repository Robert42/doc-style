#!/usr/bin/env python3

import subprocess
import webbrowser
import sys
import os
from os import path

scriptDir = path.dirname(path.abspath(__file__))

docStyleDir = path.join(scriptDir, "..");

sys.path.append(path.join(docStyleDir, "python")) # path for python modules

import find_qt_docs

# normpath is a workaround to use backslashes on windows
os.environ["DOCSTYLE_DIR"] = path.normpath(path.abspath(docStyleDir));
find_qt_docs.store_env_var()

# Note, for the following line to work, the directory containing qdoc must be in the PATH variable
subprocess.call(["qdoc", path.join(scriptDir, "doc-style-example.qdocconf")])

if "show" in sys.argv:
    webbrowser.open(path.join(scriptDir, "html", "index.html"))

