#!/bin/sh --

#Helper script for use on build server.
#
# Intended to be run after the Maven build is successful.
#

# Debugging: -x to enable, +x to disable
set -x

timestamp=$(date +%Y%m%d%H%M%S)

which mvn
cd sectionsUtilityTool
mvn clean install
cd target

warFilename=$(ls *.war | head -1)
targetFilename=$(basename ${warFilename} .war)

mv ${targetFilename}.war ${targetFilename}.${timestamp}.war
