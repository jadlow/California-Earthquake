# California-Earthquake

USER INTERFACE

To run the source code from your local machine, download the code from the repository. All three visualization are currently accessible in my public_html server provided by UCSC.

https://people.ucsc.edu/~jadlow/AREarthquake_web/

The AR visualization is web-based and runs on the Mozilla XRViewer which is available on IOS devices. The HTML page 
must be hosted on a server accessible to mobile devices. The XREngine library files are included in the Git repository containing the source code, so no downloads are required.

The Three.js version of this visualization can be viewed on any web browser (Chrome, Firefox, etc). The Three.js library files are included in the Git repository as well. The HTML page must be hosted locally on a python server.

I also created a choropleth map using D3 to further analyze the data that can be viewed on any web browser. The HTML page must be hosted locally on a python server.

CODE DOCUMENTATION

This program can be modified to visualize other data sets with county level granularity. Detailed 
code documentation is embedded in the code as comments. The main code can be found in the following files:
AR Visualization: AR_Vis/examples/ar_anchors/index.html
Three.js Visualization: WEB_Vis/eq.js and eq.html
D3 Visualization: D3_Vis/index.html

