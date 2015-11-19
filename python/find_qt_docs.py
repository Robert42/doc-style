#! /usr/bin/env python3

import os
import re
from os import path

def find():
    for d in ["/opt"]:
        potential_candidates = []
        for f in os.listdir(d):
            f = path.join(d, f)
            if os.path.isdir(f) and re.match(r'^Qt[5-9][0-9]*(\.[0-9]+)*$', path.basename(f)):
                qt_docs_parent_dir = path.join(f, "Docs")
                for f in os.listdir(qt_docs_parent_dir):
                    qt_doc_dir = path.join(qt_docs_parent_dir, f)
                    if os.path.isdir(qt_doc_dir) and re.match(r'^Qt\-?5[0-9]*(\.[0-9]+)*$', path.basename(qt_doc_dir)):
                        potential_candidates.append(qt_doc_dir)
        potential_candidates.sort()
        potential_candidates.reverse()
        if len(potential_candidates) > 0:
            return potential_candidates[0]
        return None

def store_env_var(varname = "QT_DOCS_DIR"):
    d = find()
    if d:
        os.environ[varname] = path.normpath(path.abspath(d));
    else:
        print("Warning: couln't locate the qt documentation")
